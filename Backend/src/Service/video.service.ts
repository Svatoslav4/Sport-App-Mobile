import { prisma } from './../config/prisma.js';

export const getAllVideos = async() => {
    return prisma.video.findMany()
}

export const getVideoById = async (id: number) => {
    const video = await prisma.video.findUnique({
        where: { id }
    })

    if (!video) throw new Error('Video not found')

    return video
}