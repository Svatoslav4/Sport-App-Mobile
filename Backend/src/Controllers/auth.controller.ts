import { Request,Response } from "express";
import { registerUser,loginUser } from "../Service/auth.service";

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
        const {email, password,} = req.body
        const results = await loginUser(email, password,)
        res.json(results)
    }

    catch(error: any) {
        res.status(400).json({message: error.message})
    }
}