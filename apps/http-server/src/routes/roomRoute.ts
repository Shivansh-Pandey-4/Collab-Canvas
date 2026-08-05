import { prisma } from "@repo/db";
import zod from "@repo/validation";
import { roomSlugSchema} from "@repo/validation";
import { Router, type Request, type Response } from "express";
import authMiddleware from "../middleware/authMiddleware.js";


const router = Router();

router.post("/create", authMiddleware, async(req: Request<{}, {}, {slug ?: string}>, res: Response)=>{

    // need to use transaction in room creation and making the room creator a member of the room too.
    
     const slug  = req.body?.slug;
     const result = roomSlugSchema.safeParse({slug});

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

        const joinRoom = await prisma.roomMember.create({
            data : {
                userId : req.user_session.user.id,
                roomId : newRoom.id
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


router.post("/join/:slug", authMiddleware, async(req: Request<{slug ?: string}>, res: Response)=>{

    const slug = req.params?.slug;
    const result = roomSlugSchema.safeParse({slug});

    if(!result.success){
        return res.status(401).json({
            success : false,
            msg : "invalid room name provided",
            error : `err: ${result.error.issues[0]?.message}` 
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

        const userAlreadyMember = await prisma.roomMember.findFirst({
            where : {
                userId : req.user_session.user.id,
                roomId : roomExist.id
            }
        });

        if(userAlreadyMember){
            return res.status(400).json({
                success : false,
                msg : "user already a member of this room"
            })
        }

        const newMember = await prisma.roomMember.create({
            data : {
                userId : req.user_session.user.id,
                roomId : roomExist.id
            }
        })

        return res.json({
            success : true,
            msg : "user joined the room successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            msg : "failed to join the room",
            error : error instanceof Error ? error.message : "something went wrong"
        })
    }

});


router.delete("/leave/:slug", authMiddleware, async(req: Request<{slug ?: string}>, res: Response)=>{

    // use transaction here also.

    const slug = req.params?.slug;
    const result = roomSlugSchema.safeParse({slug});

     if(!result.success){
        return res.status(401).json({
            success : false,
            msg : "invalid room name provided",
            error : `err: ${result.error.issues[0]?.message}` 
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

        const userAlreadyMember = await prisma.roomMember.findFirst({
            where : {
                userId : req.user_session.user.id,
                roomId : roomExist.id
            }
        })

        if(!userAlreadyMember){
            return res.status(400).json({
                success : false,
                msg : "user is not a member of this room"
            })
        }

        const leaveRoom = await prisma.roomMember.delete({
            where : {
                id : userAlreadyMember.id
            }
        })

        const emptyRoom = await prisma.roomMember.count({
            where : {
                roomId : roomExist.id
            }
        })

        if(emptyRoom === 0){
            await prisma.room.delete({
                where : {
                    id : roomExist.id
                }
            })
        }

        return res.json({
            success : true,
            msg : "user left the room successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success : false, 
            msg : "failed to leave the room",
            error : error instanceof Error ? error.message : "something went wrong"
        })
    }

})


export default router;