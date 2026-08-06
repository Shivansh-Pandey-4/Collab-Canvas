import { Router, type Request, type Response } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { roomSlugSchema } from "@repo/validation";
import { prisma } from "@repo/db";


const router = Router();

router.get("/:slug", authMiddleware, async(req: Request<{slug ?: string}>, res: Response)=>{

    const slug = req.params?.slug;
    const result = roomSlugSchema.safeParse({slug});

    if(!result.success){
        return res.status(400).json({
            success : false,
            msg : "invalid room name provided",
            error : `err : ${result.error.issues[0]?.message}`
        })
    }

    try {
        const slug = result.data.slug;

        const roomExist = await prisma.room.findUnique({
            where : {slug}
        });
        
        if(!roomExist){
            return res.status(400).json({
                success : false,
                msg : "room not found"
            })
        }

        const roomMember = await prisma.roomMember.findFirst({
            where : {
                userId : req.user_session.user.id,
                roomId : roomExist.id
            }
        })

        if(!roomMember){
            return res.status(400).json({
                success : false,
                msg : "user is not a member of room"
            })
        }

        const allChats = await prisma.message.findMany({
            where : {
                roomId : roomExist.id
            }
        })

        return res.json({
            success : true,
            msg : "all chats found successfully",
            allChats
        });

    } catch (error) {

        return res.status(500).json({
            success : false,
            msg : "failed to get chats",
            error : error instanceof Error ? error.message : "something went wrong"
        })
    }

})


export default router;