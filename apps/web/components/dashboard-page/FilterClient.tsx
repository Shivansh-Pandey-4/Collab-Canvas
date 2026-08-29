"use client"

import { Search } from "lucide-react"
import IconInput from "@repo/ui/icon-input"

export default function FilterClient() {

    return (
        <div>
            <IconInput icon={Search} placeholder="Filter search here..." />
        </div>
    )
}