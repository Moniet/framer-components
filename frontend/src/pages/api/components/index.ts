import { priceIds } from '@/utils/stripePrices'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Client, query as q } from 'faunadb'
import { NextApiHandler } from 'next'
import { components } from '@/db/components'

const componentsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const supabase = createServerSupabaseClient({ req, res })
    const user = await supabase.auth.getUser()
    const query = req.query
    const page = Number(query.page || 0)

    const componentNames = Object.keys(components)
    const limit = 6
    const totalPages = Math.floor(componentNames.length / 6)
    const hasMore = page !== 6

    if (!user) {
      return res.status(401).json({})
    }

    const faunaClient = new Client({
      secret: process.env.FAUNA_SECRET_KEY as string,
    })

    const purchases = (await faunaClient.query(
      q.Paginate(q.Match(q.Index('purchase_by_email'), user.data.user?.email as any))
    )) as {
      data?: string[]
    }

    if (purchases?.data?.find((d: any) => d === priceIds.lifetime)) {
      const allComponents = componentNames.map((cn) => {
        const comp = (components as any)[cn]
        return {
          url: comp.url,
          id: comp.id,
        }
      })
      return res.status(200).json({
        data: allComponents,
        totalPages,
        hasMore,
      })
    }

    return res.json({ data: null })
  }
}

export default componentsHandler