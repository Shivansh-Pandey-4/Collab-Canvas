"use client"

import Button from "@repo/ui/button"
import Input from "@repo/ui/input"
import Link from "next/link"

export default function SigninClient() {

    return (
        <form className="flex flex-col border border-gray-300 p-5 w-full gap-y-6 rounded-md">
            <h1 className="text-center text-3xl">Signin Page</h1>

            <div className="flex flex-col gap-y-1">
                <label htmlFor="email">Email</label>
                <Input required id="email" variant="sm" placeholder="enter email" />
            </div>
            <div className="flex flex-col gap-y-1">
                <label htmlFor="password">Password</label>
                <Input required id="password" variant="sm" placeholder="enter password" />
            </div>
            <Button size="md" className="text-xl mt-1" variant="secondary">Signin</Button>
            <div className="mt-2 border-t">
                <p className="text-center mt-4">Don't have an account? <Link className="text-blue-500 hover:underline font-semibold" href={"/signup"}>Signup</Link></p>
            </div>
        </form>
    )
}