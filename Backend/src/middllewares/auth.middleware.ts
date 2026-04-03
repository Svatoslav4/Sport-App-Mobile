import { NextFunction,Request,Response } from "express";
import  jwt  from "jsonwebtoken";
import { AuthRequest } from "../types/auth.types.js";


export const authmiddleware = (req:Request,res:Response,next:NextFunction) => {
    const authHeader = req.headers.authorization 
    if(!authHeader) return res.status(401).json({message: "No Token"})
    
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as {userId: number}
        (req as any).userId = decoded.userId
        next()
    }
    
    catch {
        res.status(401).json({message: 'Invalid Token'})
    }

}

