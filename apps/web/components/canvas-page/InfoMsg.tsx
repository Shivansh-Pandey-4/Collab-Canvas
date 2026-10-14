"use client"
import Model from "@repo/ui/model";
import { FaceSlightlyFrowning, Loader2, MoveLeft } from "lucide-react";
import { IWebsocketConnectionType } from "../drawing-page/ClientCanvas";
import Button from "@repo/ui/button";
import Link from "next/link";

interface IProps {
    websocketConnectionType: IWebsocketConnectionType
}

export default function InfoMsg(props: IProps) {

    const { websocketConnectionType } = props;

    return (
        <Model>
            <div className=" shadow-2xl h-40 flex flex-col items-center justify-center">
                <div>
                    {
                        websocketConnectionType === "pending" &&
                        <div>
                            <h1 className="text-2xl flex items-center gap-x-6">
                                Connecting to socket... <span><Loader2 className="animate-spin" /></span>
                            </h1>
                            <h1 className="mt-5 italic">Please wait while we establish the connection.</h1>
                        </div>
                    }
                    {
                        websocketConnectionType === "error" &&
                        <div className=" flex flex-col items-center">
                            <h1 className="text-2xl text-red-400 flex items-center gap-x-6">Failed to connect to socket. <span><FaceSlightlyFrowning /></span>
                            </h1>
                            <Link href={"/"}>
                                <Button className="mt-5 flex items-center gap-x-3">
                                    <span><MoveLeft /></span>
                                    Back
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </Model>
    )
}