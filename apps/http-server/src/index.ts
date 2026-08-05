import express, { type Request, type Response } from "express";
import { toNodeHandler, auth } from "@repo/auth";
import roomRouter from "./routes/roomRoute.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.HTTP_PORT || 4000;

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

app.use("/room", roomRouter);
app.get("/", (req: Request, res: Response)=>{
    return res.json({
        success : true,
        msg : "hello world"
    })
})

app.listen(PORT, ()=>{
    console.log(`app started listening on the port: ${PORT}`);
})