import { register,login } from '../Controllers/auth.controller'
import  express, { Router }  from "express";

const router = express.Router()
router.post('/register', register)
router.post('/login', login)

export default router
