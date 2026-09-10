
"use client"

import Button from "@repo/ui/button";
import Input from "@repo/ui/input";
import { MessageSquareMore, X, SendHorizonal } from "lucide-react"
import { useState } from "react";

export default function ChatMsg() {

    const [showPop, setShowPop] = useState(false);

    return (
        <>
            {
                showPop && <ChatPop />
            }

            <div onClick={() => setShowPop(prev => !prev)} className="fixed right-0 bottom-0  mr-5 mb-5 z-50 w-13 h-13 rounded-full bg-black flex items-center justify-center hover:bg-red-600 cursor-pointer">
                {
                    showPop ? <X /> : <MessageSquareMore size={30} className="text-white" />
                }

            </div>
        </>
    )
}


export function ChatPop() {

    return (
        <div className="fixed h-110 max-w-xs w-full border bg-black right-0 bottom-0 mr-5 mb-25 rounded-2xl z-50 flex flex-col">
            <div className="py-3 px-3 bg-neutral-600 rounded-t-2xl">
                <h1 className="font-semibold">Live Chat</h1>
                {/* <h1>offline</h1> */}
            </div>
            <div className="flex-1 p-3">
                <h1>Message Component</h1>
            </div>
            <div className="flex gap-x-2 py-3 px-3 bg-neutral-600 rounded-b-2xl">
                <Input autoFocus type="text" placeholder="enter message" variant="sm" className="flex-1 border border-white bg-gray-700 text-white" />
                <Button variant="secondary" className="px-2"><SendHorizonal /></Button>
            </div>
        </div>
    )
}