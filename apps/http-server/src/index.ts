import express, { type Request, type Response } from "express";
import { toNodeHandler, auth } from "@repo/auth";
import chatRouter from "./routes/chatRoute.js";
import roomRouter from "./routes/roomRoute.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.HTTP_PORT) || 4000;

app.use(
  cors({
    origin: process.env.PUBLIC_TRUSTED_FRONTED_BETTER_AUTH_URL,
    credentials: true,
    // methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.all('/api/auth/{*any}', toNodeHandler(auth));


app.use(express.json());

app.use("/room", roomRouter);
app.use("/chat", chatRouter);
app.get("/", (req: Request, res: Response)=>{
    return res.json({
        success : true,
        msg : "hello world"
    })
})

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`app started listening on the port: ${PORT}`);
})