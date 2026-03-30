import { Request,Response } from "express";
import { registerUser,loginUser } from "../Service/auth.service.js";

export const register = async(req: Request,res: Response) => {
    try {
        const {email, password, name} = req.body
        const results = await registerUser(email, password, name)
        res.json(results)
    }

    catch(error: any) {
        res.status(400).json({message: error.message})
    }

}

export const login = async(req: Request,res: Response) => {
    try {
        const {email, password, name} = req.body
        const results = await loginUser(email, password, name)
        res.json(results)
    }

    catch(error: any) {
        res.status(400).json({message: error.message})
    }
}