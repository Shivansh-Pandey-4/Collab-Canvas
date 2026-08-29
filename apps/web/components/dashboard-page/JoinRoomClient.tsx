"use client"

import Button from "@repo/ui/button";
import Input from "@repo/ui/input";
import { CirclePlus } from "lucide-react";

export default function JoinRoomClient() {

    return (
        <div className="flex flex-wrap items-center gap-x-3 justify-end ">
            <Input placeholder="Join via Room Name" className="text-md" variant="sm" />
            <Button className="mt-2 sm:mt-0" size="md">Join</Button>
            <Button size="md" className="ml-4 mt-2 sm:mt-0 flex items-center gap-x-2">
                <CirclePlus size={15} />
                Create
            </Button>
        </div>
    )
}