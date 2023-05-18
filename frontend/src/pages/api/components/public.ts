import { components } from '@/db/components'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    const { page = 0 } = req.query
    const componentNames = Object.keys(components)
    const totalPages = Math.floor(componentNames.length / 10)
  }
}

export default handler
