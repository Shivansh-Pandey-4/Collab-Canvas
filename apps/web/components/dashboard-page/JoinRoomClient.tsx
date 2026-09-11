"use client"

import Button from "@repo/ui/button";
import Input from "@repo/ui/input";
import Model from "@repo/ui/model";
import { CirclePlus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import type { IData } from "../../types/BasicResponseMsg";



export default function JoinRoomClient() {

    const [isOpen, setIsOpen] = useState(false);
    const [inputData, setInputData] = useState("");
    const [slug, setSlug] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isJoining, setIsJoining] = useState(false);
    const router = useRouter();


    async function createRoom(roomName: string) {

        setIsLoading(true);

        try {
            const response = await fetch(`http://localhost:3000/room/create`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ slug: roomName })
            });

            let data: IData | null = null;

            try {
                data = await response.json();
            } catch (error) {
                data = null;
            }

            if (!response.ok) {
                toast.error(data?.error || data?.msg || "failed to create room");
                return;
            }

            if (data) {
                if (data.success) {
                    toast.message(data.msg);
                    router.refresh();
                    return;
                } else {
                    toast.message(data.msg);
                    return;
                }
            }

        }
        catch (error) {
            if (error instanceof TypeError) {
                toast.error(error.message);
                return;
            }
            if (error instanceof Error) {
                toast.error(error.message);
                return;
            }

            toast.error("failed to create room, something went wrong");
            return;
        }
        finally {
            setIsLoading(false);
            setIsOpen(false);
            setInputData("");
        }
    }


    async function joinRoom(roomName: string) {
        setIsJoining(true);

        try {
            const response = await fetch(`http://localhost:3000/room/join/${roomName}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "content-type": "application/json"
                }
            });

            let data: IData | null = null;

            try {
                data = await response.json();
            } catch (error) {
                data = null;
            }

            if (!response.ok) {
                toast.error(data?.error || data?.msg || "failed to join the room");
                return;
            }

            if (data) {
                if (data.success) {
                    toast.success(data.msg);
                    setSlug("");
                    router.push(`/canvas/${roomName}`);
                    return;
                } else {
                    toast.message(data.msg);
                    return;
                }
            }

        } catch (error) {
            if (error instanceof TypeError) {
                toast.error(error.message);
                return;
            }
            if (error instanceof Error) {
                toast.error(error.message);
                return;
            }

            toast.error("failed to create room, something went wrong");
            return;
        } finally {
            setIsJoining(false);
        }
    }



    return (
        <>

            {
                isOpen && (<Model setIsOpen={setIsOpen}>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl">New Workspace room</h1>

                        <Button onClick={() => { setIsOpen(false); setInputData("") }} className="px-2 py-0" variant="danger">X</Button>
                    </div>

                    <div className="flex flex-col gap-y-2 mt-8">
                        <label htmlFor="roomName">Room-Name</label>
                        <Input name="roomName" value={inputData} onChange={(e) => setInputData(e.target.value)} autoFocus id="roomName" type="text" placeholder="ex: creative-space" />

                        <Button onClick={() => createRoom(inputData)} disabled={(inputData.trim() === "" ? true : false) || isLoading} type="button" variant="secondary" className="mt-4 mb-2 text-xl" size="md">
                            {
                                isLoading ? <span className="flex items-center justify-center py-0.5"><Loader2 className="animate-spin " /></span> : "Confirm"
                            }
                        </Button>
                    </div>
                </Model>)
            }



            <div className="flex flex-wrap items-center gap-x-3 justify-end ">
                <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Join via Room Name" className="text-md" variant="sm" />

                <Button disabled={(slug.trim() === "" ? true : false) || isJoining} onClick={(e) => joinRoom(slug)} className="mt-2 sm:mt-0" size="md">
                    {
                        isJoining ? <span className="flex items-center justify-center py-0.5"><Loader2 className="animate-spin " /></span> : "Join"
                    }
                </Button>

                <Button onClick={() => setIsOpen(true)} size="md" className="ml-4 mt-2 sm:mt-0 flex items-center gap-x-2">
                    <CirclePlus size={15} />
                    Create
                </Button>
            </div>
        </>
    )
}