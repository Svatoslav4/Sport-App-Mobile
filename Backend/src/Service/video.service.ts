import { prisma } from './../config/prisma';
import { createVideoDTO } from '../types/createVideo.types';

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

export const createVideo = async(data: createVideoDTO) => {
    const video = await prisma.create({
        data: {
            title: data.title,
            description: data.description,
            videoPath: data.videoPath
        }
    })

    return video
}