import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {

    return (

        <div className="border-t mt-12 border-gray-500 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto">

            <div className=" col-span-1">
                <h1 className="text-2xl font-semibold">Stay</h1>
                <h1 className="text-2xl font-semibold">Connected</h1>
                <p className="text-gray-400 mt-1">Collaborate with me on exciting projects!</p>
                <input className="mt-3 border border-gray-500 py-1 rounded-md px-3" type="text" placeholder="Enter your email" />
            </div>

            <div className=" col-span-1">
                <h1 className="text-xl font-medium">Quick Links</h1>
                <ul className="mt-4">
                    <li className="text-sm">Home</li>
                    <li className="mt-1 text-sm">Features</li>
                </ul>
            </div>

            <div className=" col-span-1">
                <h1 className="text-xl font-medium">Contact Me</h1>
                <p className="mt-4 text-sm ">Delhi, India</p>
                <p className="mt-1 text-sm">Email : shivanshofficial@gmail.com</p>
            </div>

            <div className=" col-span-1">
                <h1 className="text-xl font-medium">Follow Me</h1>

                <div className="mt-4 flex gap-x-2">
                    <Link href={"https://github.com/Shivansh-Pandey-4"} target="blank">
                        <IconBrandGithub />
                    </Link>
                    <IconBrandLinkedin />
                </div>
            </div>

            {/* <div className="border-t-2 border-amber-50 mt-8">
                <p>2026 by Shivansh Pandey. All rights reserved.</p>
            </section> */}
        </div>
    )
}