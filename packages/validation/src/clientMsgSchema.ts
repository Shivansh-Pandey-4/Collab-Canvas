import zod from "zod";

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

const clientMessageSchema = zod.discriminatedUnion("type", [joinRoomSchema, chatSchema]);

export default clientMessageSchema;