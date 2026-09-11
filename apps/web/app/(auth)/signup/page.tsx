import SignupClient from "../../../components/auth-page/SignupClient";
import Button from "@repo/ui/button";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Signup() {

    return (
        <div className="max-w-3xl mx-auto mt-18">
            <Link href={"/"}>
                <Button variant="toolBar" className="flex items-center justify-center gap-x-2 py-1 hover:text-black"><MoveLeftIcon /> Home</Button>
            </Link>
            <div className="mt-4">
                <SignupClient />
            </div>
        </div>
    )
}