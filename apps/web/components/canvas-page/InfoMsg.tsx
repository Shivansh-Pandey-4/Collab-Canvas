"use client"
import Model from "@repo/ui/model";
import { Loader2 } from "lucide-react";

export default function InfoMsg() {


    return (
        <Model>
            <div className=" shadow-2xl h-40 flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-2xl flex items-center gap-x-6">Connecting to socket... <span><Loader2 className="animate-spin" /></span></h1>
                    <h1 className="mt-5 italic">Please wait while we establish the connection.</h1>
                </div>
            </div>
        </Model>
    )
}