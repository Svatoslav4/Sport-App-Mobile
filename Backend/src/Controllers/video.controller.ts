import { Request, Response } from "express";
import { createVideo, getAllVideos, getVideoById } from "../Service/video.service";

export const getVideos = async (req: Request, res: Response) => {
    try {
        const videos = await getAllVideos();
        return res.status(200).json(videos);
    } catch (error: any) {
        return res.status(500).json({
            message: error?.message || "Server error"
        });
    }
};

export const getVideo = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: "Invalid video ID"
            });
        }

        const video = await getVideoById(id);

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        return res.status(200).json(video);

    } catch (error: any) {
        return res.status(500).json({
            message: error?.message || "Server error"
        });
    }
};

export const addVideo = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const file = (req as any).file;

        if (!title || !description || !file) {
            return res.status(400).json({
                message: "Заповніть усі поля та завантажте відео"
            });
        }

        const video = await createVideo({
            title,
            description,
            videoPath: file.path
        });

        return res.status(201).json(video);

    } catch (error: any) {
        return res.status(500).json({
            message: error?.message || "Server error"
        });
    }
};