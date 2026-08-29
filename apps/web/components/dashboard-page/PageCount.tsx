"use client"

import Button from "@repo/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function PageCount() {

    return (
        <div className="flex justify-between items-center">
            <p>Page 1 of 1</p>
            <div className="space-x-5 flex items-center">
                <Button size="md"> <span className="gap-x-1 flex items-center"><ChevronLeft size={15} /> Prev</span></Button>

                <Button size="md"> <span className="gap-x-1 flex items-center">Next <ChevronRight size={15} /></span></Button>
            </div>
        </div>
    )
}