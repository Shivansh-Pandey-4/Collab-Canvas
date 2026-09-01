"use client"

import Button from "@repo/ui/button"
import Input from "@repo/ui/input"
import Link from "next/link"
import { signupSchema } from "@repo/validation"
import { useRef, useState } from "react"
import { toast } from "sonner"
import { authClient } from "../../lib/auth-client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"


export default function SignupClient() {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const inputErr = useRef("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useRouter();

    async function handleSignup(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();

        const result = signupSchema.safeParse(inputData);
        if (!result.success) {
            const msg = result.error.issues[0]?.message;
            const err = result.error.issues[0]?.path.toString();
            inputErr.current = `error: ${msg}, field: ${err}`
            toast.error(inputErr.current);
            return;
        }

        try {
            const { data, error } = await authClient.signUp.email({
                email: inputData.email,
                password: inputData.password,
                name: inputData.name
            }, {
                onRequest: (ctx) => {
                    setIsLoading(true);
                },
                onSuccess: (ctx) => {
                    navigate.push("/dashboard");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
            });
        } catch (error) {
            if (error instanceof TypeError) {
                inputErr.current = error.message + " " + "(ERR_CONNECTION_REFUSED)";
                toast.error(inputErr.current);
                return;
            }

            if (error instanceof Error) {
                inputErr.current = error.message;
                toast.error(inputErr.current);
                return;
            } else {
                toast.error("something went wrong");
                return;
            }

        } finally {
            setIsLoading(false);
        }



    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {

        setInputData(prev => (
            { ...prev, [event.target.name]: event.target.value }
        ))
    }



    return (
        <form className="flex flex-col border border-gray-300 p-5 w-full gap-y-6 rounded-md">
            <h1 className="text-center text-3xl">Signup Page</h1>

            <div className="flex flex-col gap-y-1">
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" value={inputData.name} onChange={handleInputChange} required id="name" variant="sm" placeholder="enter name" />
            </div>
            <div className="flex flex-col gap-y-1">
                <label htmlFor="email">Email</label>
                <Input type="email" name="email" value={inputData.email} onChange={handleInputChange} required id="email" variant="sm" placeholder="enter email" />
            </div>
            <div className="flex flex-col gap-y-1">
                <label htmlFor="password">Password</label>
                <Input type="password" name="password" value={inputData.password} onChange={handleInputChange} required id="password" variant="sm" placeholder="enter password" />
            </div>

            <Button onClick={handleSignup} size="md" className="text-xl mt-1" variant="secondary">
                {
                    isLoading ? <span className="flex items-center justify-center py-0.5"><Loader2 className="animate-spin" /></span> : "Signup"
                }
            </Button>

            <div className="mt-2 border-t">
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-500 hover:underline font-semibold" href={"/signin"}>Signin</Link></p>
            </div>
        </form>
    )
}