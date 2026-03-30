import { prisma } from './../config/prisma.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async (email: string, password: string, name: string) => {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) throw new Error('User already exists')
    
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: { email, password: hashedPassword, name }
    })

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    )
    
    return {
        user: {
            id: user.id,
            email: user.email,
            name: user.name
        },
        token
    }
}

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error('User not found')

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Invalid password')
    
    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    )

    return {
        user: {
            id: user.id,
            email: user.email,
            name: user.name
        },
        token
    }
}