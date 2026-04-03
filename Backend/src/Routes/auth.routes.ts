import { register,login } from '../Controllers/auth.controller.js'
import  express, { Router }  from "express";

const router = express.Router()
router.post('/register', register)
router.post('/login', login)

export default router
