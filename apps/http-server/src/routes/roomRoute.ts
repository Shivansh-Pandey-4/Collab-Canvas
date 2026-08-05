import { prisma } from "@repo/db";
import zod from "@repo/validation";
import { createRoomSlugSchema } from "@repo/validation";
import { Router, type Request, type Response } from "express";
import authMiddleware from "../middleware/authMiddleware.js";


const router = Router();

router.post("/create", authMiddleware, async(req: Request<{}, {}, {slug ?: string}>, res: Response)=>{
    
     const slug  = req.body?.slug;
     const result = createRoomSlugSchema.safeParse({slug});

     if(!result.success){
        return res.status(401).json({
            success : false,
            msg : "invalid room name provided",
            error : `err: ${result.error.issues[0]?.message} , path: ${result.error.issues[0]?.path.toString()}`
        })
     }

     try {
        const slug = result.data.slug;

        const roomExist = await prisma.room.findUnique({
            where : {slug}
        });

        if(roomExist){
            return res.status(403).json({
                success : false,
                msg : "room name already taken"
            })
        }

        const newRoom = await prisma.room.create({
            data : {
                slug : slug,
                creatorId : req.user_session.user.id
            }
        })

        return res.json({
            success : true,
            msg : "room created successfully",
            newRoom
        });

     } catch (error) {
        return res.status(500).json({
            success : false,
            msg : "failed to create new room",
            error : error instanceof Error ? error.message : "something went wrong"
        })
     }

})



export default router;