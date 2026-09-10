import { auth, fromNodeHeaders } from "@repo/auth";
import {IncomingMessage} from "node:http";

export default async function authChecker(request: IncomingMessage){
     const session = await auth.api.getSession({
            headers : fromNodeHeaders(request.headers),
        });
     
     if(!session){
        return null;
     }

     return session;
}