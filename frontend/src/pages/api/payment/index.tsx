import { NextApiHandler } from 'next'
import Stripe from 'stripe'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as any, {
  apiVersion: '2022-11-15',
})

const payment: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body || {}

    if (!email)
      return res.status(400).json({
        error: 'Email missing',
      })

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price: 'price_1N8isQCMVxcjybDEegEf3LMk',
        },
      ],
      customer_email: req.body.email,
      success_url: `${req.headers.origin}/demo?purchase=success`,
      cancel_url: `${req.headers.origin}`,
      customer_creation: 'if_required',
      metadata: {
        userEmail: email,
        purchaseId: 'price_1N8isQCMVxcjybDEegEf3LMk',
      },
    })

    res.status(200).json(session)
  }
}

export default payment
