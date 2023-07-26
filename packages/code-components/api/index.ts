import { VercelRequest, VercelApiHandler } from '@vercel/node'

const handler: VercelApiHandler = (req, res) => {
  if (req.method === 'GET') {
    const { path } = req.query
    res.send('Noice')
  }
}

export default handler
