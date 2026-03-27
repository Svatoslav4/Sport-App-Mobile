import {prisma} from '../config/prisma.js'

export const getAllVideos = async() => prisma.video.findmany()
export const getVideoById = async() => (id: number) => prisma.video.findUnigue({where:{id}})
