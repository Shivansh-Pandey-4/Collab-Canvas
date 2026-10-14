"use client"

import { Search } from "lucide-react"
import IconInput from "@repo/ui/icon-input"
import { useState, useTransition } from "react"
import Button from "@repo/ui/button";
import { useRouter } from "next/navigation";


export default function FilterClient() {

    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        // if (searchInput.trim().length === 0) {
        //     return toast.error("Search Box is empty");
        // }

        // using encodeURIComponent here because 
        //         Suppose the user searches for:
        //             React & Next.js
        // Without encoding, special characters such as & can be interpreted as URL query separators.Encoding makes the search value safe to place in the URL.

        startTransition(() => {
            router.push(
                `/dashboard?search=${encodeURIComponent(searchInput)}&page=1`
            );
        });
        return;
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-3">
                <IconInput htmlFor="search" id="search" icon={Search} placeholder="Filter search here..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />

                <Button
                    size="md"
                    className="py-2"
                    disabled={isPending}
                >
                    {isPending ? "Searching..." : "Search"}
                </Button>
            </div >
        </form>
    )
}