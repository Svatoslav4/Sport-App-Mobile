import express from "express";
import { profile } from "../Controllers/user.controller.js";
import { authMiddleware } from "../middllewares/auth.middleware.js";

const router = express.Router()
router.get('/profile',authMiddleware,profile)

export default router