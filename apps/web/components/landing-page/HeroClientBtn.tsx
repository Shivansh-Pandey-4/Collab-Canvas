"use client"

import Button from "@repo/ui/button"
import Link from "next/link"
import { authClient } from "../../lib/auth-client"

export default function HeroClientBtn() {

    const { data, isPending } = authClient.useSession();


    return (
        <div className="mt-8 space-x-5 flex items-center justify-center">
            <Link href={"/canvas"}>
                <Button variant="secondary" size="lg" >Open Free Canvas</Button>
            </Link>

            {
                isPending ? <Button variant="primary" size="lg">Loading ...</Button> : (
                    data ? <Link href={"/dashboard"}>
                        <Button variant="primary" size="lg" >Go To Dashboard</Button>
                    </Link> : <Link href={"/signup"}>
                        <Button variant="primary" size="lg" >Create Account</Button>
                    </Link>
                )
            }

        </div>
    )
}