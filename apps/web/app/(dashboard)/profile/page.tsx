import { auth } from "@repo/auth"
import Button from "@repo/ui/button";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";



export default async function Profile() {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        return redirect("/signup");
    }


    return (
        <div className="min-h-screen bg-linear-to-b from-blue-200 to-blue-500 flex justify-center items-center px-5">
            <div className="border max-w-xl w-full mx-auto rounded-md overflow-hidden">
                <div className="relative">
                    <div className="relative w-full h-30 md:h-48">
                        <Image
                            src="/bg-image.avif"
                            alt="background image"
                            fill
                            className="object-cover"
                        />

                    </div>
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-15 h-15 md:w-20 md:h-20 rounded-full border-2 border-black  bg-white flex items-center justify-center">
                        <h1 className="text-3xl text-center text-black">
                            {session.user.name.charAt(0).toUpperCase()}
                        </h1>
                    </div>
                </div>

                <div className="mt-2 p-2 md:mt-8 md:p-4">
                    <h1 className="text-sm md:text-lg capitalize">{session.user.name}</h1>
                    <h1 className="text-sm md:text-lg">{session.user.email}</h1>
                </div>

                <div className="border-t md:border mt-4 gap-2 md:grid grid-cols-4 p-4 md:p-0">
                    <div className="col-span-1 flex justify-between md:flex-col items-center border md:border-transparent p-2 ">
                        <h1 className="text-sm md:text-lg">5.0</h1>
                        <p className="text-xs md:text-sm text-black font-semibold">Rating</p>
                    </div>
                    <div className="col-span-2 flex justify-between md:flex-col items-center border md:border-transparent p-2">
                        <h1 className="text-sm md:text-lg">{new Date(session.user.createdAt).toDateString()}</h1>
                        <p className="text-xs md:text-sm text-black font-semibold">Account</p>
                    </div>
                    <div className="col-span-1 flex justify-between md:flex-col items-center border md:border-transparent p-2">
                        <h1 className="text-sm md:text-lg">1 Room</h1>
                        <p className="text-xs md:text-sm text-black font-semibold">Active</p>
                    </div>
                </div>

                <div className="my-4 max-w-lg mx-auto">
                    <Button size="md" className="w-full md:text-xl" >
                        Edit Profile
                    </Button>
                </div>
            </div>
        </div>
    )

}