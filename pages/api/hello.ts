import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}