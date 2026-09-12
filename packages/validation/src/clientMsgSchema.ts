import zod from "zod";
import { drawShapeSchema } from "./drawingShapeSchema.js";


const joinRoomSchema = zod.object({
    type : zod.literal("join_room"),
    payload : zod.object({
        slug : zod.string().trim().min(3,"minimum 3 characters are required").max(100, "maximum 100 characters are allowed only")
    })
})

const chatSchema = zod.object({
    type : zod.literal("chat"),
    payload : zod.object({
        msg : zod.string().trim()
    })
});

const canvasDrawingSchema = zod.object({
    type : zod.literal("canvas_drawing"),
    payload : zod.object({
        msg : drawShapeSchema
    })
})

const mouseMovementSchema = zod.object({
    type : zod.literal("mouse_movement"),
    payload : zod.object({
        msg : zod.object({
            x : zod.number(),
            y : zod.number()
        })
    })
})

const leaveRoomSchema = zod.object({
    type : zod.literal("leave_room")
})

const clientMessageSchema = zod.discriminatedUnion("type", [joinRoomSchema, chatSchema, leaveRoomSchema, canvasDrawingSchema, mouseMovementSchema]);

export default clientMessageSchema;