import { auth } from "@repo/auth";
import type { NextFunction, Request, Response } from "express";

export default async function authMiddleware(req: Request, res: Response, next: NextFunction){

    try {
        const session = await auth.api.getSession({
            //@ts-ignore
            headers : req.headers
        });

    if(!session){
        return res.status(401).json({
            success : false,
            msg : "authentication failed"
        })
    }

        req.user_session = session;
        return next();
    
    } catch (error) {
        return res.status(500).json({
            success : false,
            msg : "failed to authenticate",
            error : error instanceof Error ? error.message : "something went wrong"
        })
    }
    
}