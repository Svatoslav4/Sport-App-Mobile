import {prisma} from '../config/prisma.js'

export const getProfile = async(userID: number) => {
     const user = await prisma.user.findUnique({
        where: { id: userID },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true
        }
    })
    
    if(!user) throw new Error('User not found')

}
