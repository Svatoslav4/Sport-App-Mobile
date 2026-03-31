import { Request, Response } from 'express'
import { getProfile } from '../Service/user.service.js'

interface AuthRequest extends Request {
  userId?: number
}

export const profile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const user = await getProfile(userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json(user)

  } catch (error: any) {
    return res.status(500).json({
      message: error?.message || 'Server error'
    })
  }
}