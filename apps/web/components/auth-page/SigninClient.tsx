"use client"

import Button from "@repo/ui/button"
import Input from "@repo/ui/input"
import Link from "next/link"
import { useRef, useState } from "react";
import { signinSchema } from "../../../../packages/validation/dist/authSchema";
import { toast } from "sonner";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";


export default function SigninClient() {

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const myError = useRef("");
    const navigate = useRouter();

    async function handleSignin(event: React.SubmitEvent<HTMLFormElement>) {

        event.preventDefault();

        const result = signinSchema.safeParse(inputData);
        if (!result.success) {
            const msg = result.error.issues[0]?.message;
            const path = result.error.issues[0]?.path.toString();

            myError.current = `err: ${msg}, path: ${path}`;
            toast.error(myError.current);
            return;
        }

        try {
            const { data, error } = await authClient.signIn.email({
                email: inputData.email,
                password: inputData.password
            }, {
                onRequest: (ctx) => {
                    setIsLoading(true);
                },
                onSuccess: (ctx) => {
                    setInputData({ email: "", password: "" });
                    navigate.replace("/dashboard");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
            });
        } catch (error) {
            if (error instanceof TypeError) {
                myError.current = error.message + " " + "(ERR_CONNECTION_REFUSED)";
                toast.error(myError.current);
                return;
            }

            if (error instanceof Error) {
                myError.current = error.message;
                toast.error(myError.current);
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

        setInputData(prev => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }


    return (
        <form onSubmit={handleSignin} className="flex flex-col border border-gray-300 p-5 w-full gap-y-6 rounded-md">

            <h1 className="text-center text-3xl">Signin Page</h1>

            <div className="flex flex-col gap-y-1">
                <label htmlFor="email">Email</label>
                <Input name="email" value={inputData.email} onChange={handleInputChange} required id="email" variant="sm" placeholder="enter email" />
            </div>

            <div className="flex flex-col gap-y-1">
                <label htmlFor="password">Password</label>
                <Input name="password" value={inputData.password} onChange={handleInputChange} required id="password" variant="sm" placeholder="enter password" />
            </div>

            <Button type="submit" size="md" className="text-xl mt-1" variant="secondary">
                {
                    isLoading ? <span className="flex items-center justify-center py-0.5"><Loader2 className="animate-spin" /></span> : "Signin"
                }
            </Button>

            <div className="mt-2 border-t">
                <p className="text-center mt-4">Don't have an account? <Link className="text-blue-500 hover:underline font-semibold" href={"/signup"}>Signup</Link></p>
            </div>
        </form>
    )
}