"use client"
import Button from "@repo/ui/button";
import { X, Menu, PenBoxIcon, Sun } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="max-w-2xl mx-auto mt-4 border border-zinc-700 py-4 rounded-full w-full sticky top-4 bg-black z-50">

            {/* for sm device */}
            <nav className="md:hidden block px-6 relative">
                <ul className="flex justify-between items-center space-x-8 text-lg font-light">
                    <Link href="#hero" className="flex items-center">
                        <span className="mr-2">
                            <PenBoxIcon className="bg-white text-black rounded-md p-1" />
                        </span> Collab Canvas
                    </Link>
                    {/* <li><Sun /></li> */}
                    <li className="cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                        {isOpen ? <X /> : <Menu />}
                    </li>

                </ul>
            </nav>

            <nav className="hidden md:block" >
                <ul className="flex justify-around px-4 items-center space-x-8 text-lg font-light">
                    <Link href="#hero">
                        <li className="cursor-pointer hover:text-gray-300">
                            <PenBoxIcon className="bg-white text-black rounded-sm" />
                        </li>
                    </Link>
                    <Link href="#features">
                        <li className="cursor-pointer hover:text-gray-300">Features</li>
                    </Link>
                    <Link href="#faq">
                        <li className="cursor-pointer hover:text-gray-300">FAQs</li>
                    </Link>
                    <Link href="#contact">
                        <li className="cursor-pointer hover:text-gray-300">Contact Me</li>
                    </Link>
                    <Link href={"/signup"}>
                        <Button className="hover:text-gray-300 px-3">Signup</Button>
                    </Link>
                </ul>
            </nav>

            {
                isOpen && (
                    <div className="absolute bg-white text-black p-5 top-18 w-full rounded-lg md:hidden">
                        <ul className="flex flex-col justify-around px-4 text-lg font-light space-y-1">
                            <Link href="#features" onClick={() => setIsOpen(false)}>
                                <li className="cursor-pointer hover:bg-gray-300 p-2 rounded-md">Features</li>
                            </Link>
                            <Link href="#faq" onClick={() => setIsOpen(false)}>
                                <li className="cursor-pointer hover:bg-gray-300 p-2 rounded-md">FAQs</li>
                            </Link>
                            <Link href="#contact" onClick={() => setIsOpen(false)}>
                                <li className="cursor-pointer hover:bg-gray-300 p-2 rounded-md">Contact Me</li>
                            </Link>
                            <Link href="/signup">
                                <Button className="w-full mt-1" size="md" variant="secondary">Signup</Button>
                            </Link>
                        </ul>
                    </div>
                )
            }

        </header >
    )
}