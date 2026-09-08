"use client"

import { Ellipsis } from "lucide-react"
import { useState, useEffect, useRef } from "react";
import Button from "@repo/ui/button";


export default function EllipsisHover() {

    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div ref={popupRef} className="relative">
            <Ellipsis onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer hover:rounded-md hover:bg-amber-700 mx-auto" />

            {
                isOpen && (
                    <div className=" absolute right-0 top-full mt-2 z-50 w-48 border border-gray-200 bg-white shadow-lg space-y-1 py-2" >

                        <h1 className="text-black py-2">Room Actions</h1>

                        <Button className="w-full px-4 py-1 text-left bg-gray-100 hover:bg-gray-400 text-black hover:text-black rounded-none border-transparent" > Open Canvas </Button>

                        <Button className="w-full px-4 py-1 text-left hover:bg-gray-400 text-black rounded-none bg-gray-100 hover:text-black border-transparent" > Edit Room </Button>

                        <Button variant="danger" className="w-full px-4 py-1 text-left text-red-black hover:bg-red-800 rounded-none border-transparent" > Delete Room </Button>
                    </div>)
            }

        </div>
    )
}