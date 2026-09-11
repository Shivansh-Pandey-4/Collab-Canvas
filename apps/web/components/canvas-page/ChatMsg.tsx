
"use client"

import Button from "@repo/ui/button";
import Input from "@repo/ui/input";
import { MessageSquareMore, X, SendHorizonal } from "lucide-react"
import { useState, useRef, useEffect } from "react";
import { IAllMsg } from "../drawing-page/ClientCanvas";
import { toast } from "sonner";

interface IChatMsgProps {
    wsRef: React.RefObject<WebSocket | null>
    allMsg: IAllMsg[];
    setAllMsg: React.Dispatch<React.SetStateAction<IAllMsg[]>>;
    userName: string;
}


export default function ChatMsg(props: IChatMsgProps) {

    const { allMsg, setAllMsg, wsRef, userName } = props;
    const [showPop, setShowPop] = useState(false);

    return (
        <>
            {
                showPop && <ChatPop userName={userName} allMsg={allMsg} setAllMsg={setAllMsg} wsRef={wsRef} />
            }

            <div onClick={() => setShowPop(prev => !prev)} className="fixed right-0 bottom-0  mr-5 mb-5 z-50 w-13 h-13 rounded-full bg-black flex items-center justify-center hover:bg-red-600 cursor-pointer">
                {
                    showPop ? <X /> : <MessageSquareMore size={30} className="text-white" />
                }

            </div>
        </>
    )
}


export function ChatPop(props: IChatMsgProps) {

    const { allMsg, setAllMsg, wsRef, userName } = props;
    const [inputData, setInputData] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    function handleSendMsg(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputData.trim() === "") {
            toast.message("cannot send empty msg");
            return;
        }

        wsRef.current?.send(JSON.stringify({
            type: "chat",
            payload: {
                msg: inputData.trim()
            }
        }))

        setAllMsg(prev => ([...prev, { type: "chat", payload: { fromUser: userName, msg: inputData } }]));

        setInputData("");

    }

    useEffect(() => {
        function scrollChat() {
            scrollRef.current?.scrollIntoView({
                behavior: "smooth"
            })
        }

        if (scrollRef.current) {
            scrollChat();
        }

    }, [allMsg]);


    return (
        <div className="fixed h-110 max-w-xs w-full border bg-black right-0 bottom-0 mr-5 mb-25 rounded-2xl z-50 flex flex-col">
            <div className="py-3 px-3 bg-neutral-600 rounded-t-2xl">
                <h1 className="font-semibold">Live Chat</h1>
                {/* <h1>offline</h1> */}
            </div>
            <div className="flex-1 p-3 overflow-y-auto space-y-3">
                {
                    allMsg.length === 0 && (<div className="h-full flex items-center justify-center">
                        <p className="text-sm text-neutral-500"> No messages yet </p>
                    </div>)
                }
                {
                    allMsg.map((item, index) => {
                        const isMyMessage = item.payload.fromUser === userName;
                        return (
                            <div key={index} className={`flex w-full ${isMyMessage ? "justify-start" : "justify-end"}`} >
                                <div className={`max-w-[75%] px-3 py-2 rounded-2xl ${isMyMessage ? "bg-neutral-700 text-white rounded-bl-sm" : "bg-green-600 text-white rounded-br-sm"}`} >
                                    {isMyMessage ?
                                        (<p className="text-xs font-semibold text-green-200 mb-1"> {"you"} </p>) : <p className="text-xs font-semibold text-green-100 mb-1"> {item.payload.fromUser} </p>} <p className="text-sm wrap-break-word"> {item.payload.msg} </p>
                                </div>
                                <div ref={scrollRef}></div>
                            </div>
                        );
                    })}
            </div>
            <form onSubmit={(e) => handleSendMsg(e)} className="flex gap-x-2 py-3 px-3 bg-neutral-600 rounded-b-2xl">

                <Input value={inputData} onChange={(e) => setInputData(e.target.value)} autoFocus type="text" placeholder="enter message" variant="sm" className="flex-1 border border-white bg-gray-700 text-white" />

                <Button type="submit" variant="secondary" className="px-2">
                    <SendHorizonal />
                </Button>
            </form>
        </div>
    )
}