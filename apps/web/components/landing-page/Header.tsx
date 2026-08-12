"use client"
import { Cross, Menu, PenBoxIcon, Sun } from "lucide-react"
import { useContext } from "react"
import { OpenContext } from "../../context/OpenContext";


export default function Header() {

    const myOpen = useContext(OpenContext);


    return (
        <header className="max-w-2xl mx-auto mt-4 border border-zinc-700 py-4 rounded-full w-full sticky top-3 bg-black">

            {/* for sm device */}
            <nav className="md:hidden block px-6">
                <ul className="flex justify-between items-center space-x-8 text-lg font-light">
                    <li className="flex items-center"> <span className="mr-2"><PenBoxIcon className="bg-white text-black rounded-md p-1" /></span> Collab Canvas
                    </li>
                    {/* <li><Sun /></li> */}
                    <li className="cursor-pointer" onClick={() => myOpen?.setIsOpen(prev => !prev)}>
                        {myOpen?.isOpen ? <Cross /> : <Menu />}
                    </li>

                </ul>
            </nav>

            <nav className="hidden md:block" >
                <ul className="flex justify-around px-4 items-center space-x-8 text-lg font-light">
                    <li><PenBoxIcon className="bg-white text-black rounded-sm" /></li>
                    <li>Features</li>
                    <li>Discover</li>
                    <li>FAQs</li>
                    <li>About Me</li>
                    <li>Signup</li>
                </ul>
            </nav>

        </header>
    )
}