import { NextApiHandler } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'
import faunadb, { query as q } from 'faunadb'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET as string

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler: NextApiHandler = async (req, res) => {
  const sig = req.headers['stripe-signature'] || ''

  const buf = await buffer(req)
  let event

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
  } catch (err) {
    console.error(err)
    res.status(400).send(`Webhook Error: ${(err as any).message}`)
  }

  if (req.method === 'POST') {
    const paymentInfo = event?.data.object as any

    if (
      event?.type === 'checkout.session.completed' ||
      event?.type === 'checkout.session.async_payment_succeeded'
    ) {
      const metadata = paymentInfo.metadata

      const faunaClient = new faunadb.Client({
        secret: process.env.FAUNA_SECRET_KEY as string,
      })

      await faunaClient.query(
        q.Create(q.Collection('purchases'), {
          data: {
            userEmail: metadata.userEmail,
            purchaseId: metadata.purchaseId, // stripeId
            createdAt: q.Date(new Date().toISOString().split('T')[0]),
          },
        })
      )
    }

    res.status(200)
  }
}

export default handler
