import { NextFunction,Request,Response } from "express";
import { Jwt } from "jsonwebtoken";


export const authmiddleware = (res:Response,req:Request,next:NextFunction) => {
    const authHeader = req.headers.authorization 
    if(!authHeader) return res.status(401).json({message: "No Token"})
    
    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token,)
    }