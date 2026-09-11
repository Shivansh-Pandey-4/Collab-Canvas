"use client"

import { Ellipsis, Loader2, DoorOpen } from "lucide-react"
import { useState, useEffect, useRef } from "react";
import Button from "@repo/ui/button";
import type { IData } from "../../types/BasicResponseMsg";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Trash, PencilIcon } from "lucide-react";



export default function EllipsisHover({ roomCreatedName, admin }: { roomCreatedName: string; admin: boolean; }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);


    async function deleteRoom(roomName: string) {
        setIsDeleting(true);

        try {
            const response = await fetch(`http://localhost:3000/room/${roomName}`, {
                method: "DELETE",
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
                toast.error(data?.error || data?.msg || "failed to delete the room")
                return;
            }

            if (data) {
                if (data.success) {
                    toast.success(data.msg);
                    router.refresh();
                    return;
                } else {
                    toast.error(data.msg);
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
            setIsDeleting(false);
            setIsOpen(false);
        }
    }


    return (
        <div ref={popupRef} className="relative">
            <Ellipsis onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer hover:rounded-md hover:bg-amber-700 mx-auto" />

            {
                isOpen && (
                    <div className=" absolute right-0 top-full mt-2 z-50 w-48 border border-gray-200 bg-white shadow-lg space-y-1 py-2" >

                        <h1 className="text-black py-2">Room Actions</h1>

                        <Button onClick={() => (
                            router.push(`/canvas/${roomCreatedName}`)
                        )} className="w-full px-4 py-1 text-left bg-gray-100 hover:bg-gray-400  rounded-none border-transparent" >
                            <div className="flex items-center gap-x-3 text-black"><PencilIcon size={20} /> <span className="text-black">Open Canvas</span></div>
                        </Button>

                        {/* <Button className="w-full px-4 py-1 text-left hover:bg-gray-400 text-black rounded-none bg-gray-100 hover:text-black border-transparent" > Edit Room </Button> */}

                        {
                            admin ? (
                                <Button onClick={() => deleteRoom(roomCreatedName)} variant="danger" className="w-full px-4 py-1 text-left text-red-black hover:bg-red-800 rounded-none border-transparent" >
                                    {
                                        isDeleting ?
                                            <div className="flex items-center justify-center gap-x-3"><Loader2 className="animate-spin" /> <span>Deleting..</span>
                                            </div> :
                                            <div className="flex items-center gap-x-3"><Trash size={20} /> <span>Delete</span>
                                            </div>
                                    }
                                </Button>
                            ) :
                                (
                                    <Button onClick={() => deleteRoom(roomCreatedName)} variant="danger" className="w-full px-4 py-1 text-left text-red-black hover:bg-red-800 rounded-none border-transparent" >
                                        {
                                            isDeleting ?
                                                <div className="flex items-center justify-center gap-x-3"><Loader2 className="animate-spin" /> <span>Leaving..</span>
                                                </div> :
                                                <div className="flex items-center gap-x-3"><DoorOpen size={20} /> <span>Leave Room</span>
                                                </div>
                                        }
                                    </Button>
                                )
                        }


                    </div>)
            }

        </div>
    )
}