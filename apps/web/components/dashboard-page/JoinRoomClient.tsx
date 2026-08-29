"use client"

import Button from "@repo/ui/button";
import Input from "@repo/ui/input";
import { CirclePlus } from "lucide-react";

export default function JoinRoomClient() {

    return (
        <div className="flex items-center gap-x-3">
            <Input placeholder="Join via Room Name" className="text-md" variant="sm" />
            <Button size="md">Join</Button>
            <Button size="md" className="ml-4 flex items-center gap-x-2">
                <CirclePlus size={15} />
                Create
            </Button>
        </div>
    )
}