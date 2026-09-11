import Link from "next/link"
import SigninClient from "../../../components/auth-page/SigninClient"
import Button from "@repo/ui/button"
import { MoveLeftIcon } from "lucide-react"

export default function Signin() {

    return (
        <div className="max-w-3xl mx-auto mt-18">
            <Link href={"/"}>
                <Button variant="toolBar" className="flex items-center justify-center gap-x-2 py-1 hover:text-black"><MoveLeftIcon /> Home</Button>
            </Link>
            <div className="mt-5">
                <SigninClient />
            </div>
        </div>
    )
}