import express from "express";
import { profile } from "../Controllers/user.controller";
import { authMiddleware } from "../middllewares/auth.middleware";

const router = express.Router()
router.get('/profile',authMiddleware,profile)

export default router 
