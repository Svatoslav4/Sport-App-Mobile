import express from "express";
import { getVideos, getVideo, addVideo } from "../Controllers/video.controller";

const router = express.Router()
router.get('/',getVideos)
router.get('/:id',getVideo)

export default router