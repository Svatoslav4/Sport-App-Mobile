import {prisma} from '../config/prisma.js'

export const getProfile = async(userID: number) => {
    return prisma.user.findUnigue({
        where: {id:userID},
        select: {id: true,email: true,name: true,createdAT: true}
    })
}

