import { NextFunction,Request,Response } from "express";
import  jwt  from "jsonwebtoken";
import { AuthRequest } from "../types/auth.user.types";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);

    if (!authHeader) {
        return res.status(401).json({ message: "No Token" });
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ message: "Invalid Token Format" });
    }

    const token = parts[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as { userId: number };

        (req as any).userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

