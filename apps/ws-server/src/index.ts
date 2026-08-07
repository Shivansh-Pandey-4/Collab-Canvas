import { WebSocketServer } from "ws";
import authChecker from "./authChecker.js";
import { clientMessageSchema } from "@repo/validation";

const wss = new WebSocketServer({port : 8080});

wss.on("connection", async(socket, request)=>{
    const session = await authChecker(request);

    if(!session){
        socket.close(1008, "authentication failed");
        return ;
    }

    socket.send("connection created successfully");

    socket.on("message", (data)=>{
        try {

            const clientMessage = JSON.parse(data.toString());
            return socket.send(JSON.stringify({
                type : "info",
                payload : {
                    msg : `${clientMessage.msg} : from server`
                }
            }))

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