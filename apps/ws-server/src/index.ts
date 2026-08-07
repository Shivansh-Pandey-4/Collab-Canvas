import WebSocket, { WebSocketServer } from "ws";
import authChecker from "./authChecker.js";
import { clientMessageSchema } from "@repo/validation";
import type { IUserInfo } from "./types/allTypes.js";

const allSockets = new Map<string , Set<WebSocket>>();
const socketMapping = new Map<WebSocket, IUserInfo>();

const wss = new WebSocketServer({port : 8080});

wss.on("connection", async(socket, request)=>{
    const session = await authChecker(request);

    if(!session){
        socket.close(1008, "authentication failed");
        return ;
    }

    socket.send(JSON.stringify({
        msg : "ready"
    }));

    socket.on("message", (data)=>{
        try {

            const msg = JSON.parse(data.toString());
            const result = clientMessageSchema.safeParse({msg});

            if(!result.success){
                const err = result.error.issues[0]?.message;
                throw new Error(`invalid client msg schema: err: ${err}`);
            }

            const {id, name} = session.user;

            if(result.data.type === "join_room"){
                const slug = result.data.payload.slug;

                if(!allSockets.has(slug)){
                    allSockets.set(slug, new Set());
                }

                allSockets.get(slug)?.add(socket);
                socketMapping.set(socket, {name, userId: id, slug});

                return allSockets.get(slug)?.forEach(s => {
                    if(s.readyState === s.OPEN){
                        s.send(JSON.stringify({
                            type : "joined_room",
                            payload : {
                                msg : `${name} joined the room successfully`
                            }
                        }))
                    }
                })

            }

            if(result.data.type === "chat"){
                const msg = result.data.payload.msg;
                const name = socketMapping.get(socket)?.name;
                const slug = socketMapping.get(socket)?.slug;

                if(!slug || !name){
                    throw new Error("user not joined any room");
                }

                return allSockets.get(slug)?.forEach(s => {
                    if(s !== socket){
                        s.send(JSON.stringify({
                            type : "chat",
                            payload : {
                                msg : msg,
                                fromUser : name
                            }
                        }))
                    }
                })


            }


        } catch (error) {
            return socket.send(JSON.stringify({
                type : "error",
                payload : {
                    msg : `${error instanceof Error ? error.message : "something went wrong"}`
                }
            }))
            
        }
    })

})