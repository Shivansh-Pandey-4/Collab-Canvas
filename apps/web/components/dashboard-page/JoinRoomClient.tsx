"use client"

import Button from "@repo/ui/button";
import Input from "@repo/ui/input";
import Model from "@repo/ui/model";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export default function JoinRoomClient() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            {
                isOpen && (<Model>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl">New Workspace room</h1>
                        <Button onClick={() => setIsOpen(false)} className="px-2 py-0" variant="danger">X</Button>
                    </div>

                    <div className="flex flex-col gap-y-2 mt-8">
                        <label htmlFor="roomName">Room-Name</label>
                        <Input autoFocus id="roomName" type="text" placeholder="ex: creative-space" />
                        <Button variant="secondary" className="mt-4 mb-2 text-xl" size="md">Confirm</Button>
                    </div>
                </Model>)
            }



            <div className="flex flex-wrap items-center gap-x-3 justify-end ">
                <Input placeholder="Join via Room Name" className="text-md" variant="sm" />
                <Button className="mt-2 sm:mt-0" size="md">Join</Button>
                <Button onClick={() => setIsOpen(true)} size="md" className="ml-4 mt-2 sm:mt-0 flex items-center gap-x-2">
                    <CirclePlus size={15} />
                    Create
                </Button>
            </div>
        </>
    )
}