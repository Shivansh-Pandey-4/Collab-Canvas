"use client"

import Button from "@repo/ui/button"
import { ChevronRight, LucideProps, LayoutDashboard, UserPen, Sun, LogOut, ChevronLeft } from "lucide-react"
import { useSidebarContext } from "../../context/SidebarContext";

interface ISidebarItems {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

    text: string;
}


export default function SideBarClient() {

    const { extend, setExtend } = useSidebarContext();


    return (
        <aside className={`h-screen shrink-0 max-w-3xs shadow-sm shadow-amber-50 bg-neutral-800 ${extend ? " w-full" : "w-22"}`}>
            <nav className="h-full border-r pt-6 px-2 flex flex-col">

                <div className={`flex items-center justify-between ${!extend && "justify-center"}`}>
                    <h1 className={`text-xl ${extend ? "block" : "hidden"} transition-all`}>Collab Canvas</h1>
                    <Button onClick={() => setExtend(prev => !prev)} size={`${extend ? "sm" : "md"}`}>
                        {
                            extend ? <ChevronLeft /> : <ChevronRight />
                        }
                    </Button>
                </div>

                <ul className="mt-12 py-1 flex-1 rounded-md">
                    <SidebarItems icon={LayoutDashboard} text="DashBoard" />
                    <SidebarItems icon={UserPen} text="Profile" />
                    <SidebarItems icon={Sun} text="Light-Mode" />
                    <SidebarItems icon={LogOut} text="Logout" />
                </ul>

                <div className="py-5">
                    <div className=" flex items-center gap-x-3 bg-red-900 p-2 rounded-md">
                        <h1 className="rounded-lg py-2 px-4 border text-center bg-orange-800">S</h1>
                        <div className={`leading-4 ${extend ? "block" : "hidden"} overflow-hidden transition-all`}>
                            <h1>Shivansh Pandey</h1>
                            <p className="text-sm text-zinc-400">shivansh@gmail.com</p>
                        </div>
                    </div>
                </div>

            </nav>
        </aside>
    )
}


export function SidebarItems({ icon, text }: ISidebarItems) {
    const Icon = icon;
    const { extend, setExtend } = useSidebarContext();

    return (
        <li className={`relative group flex items-center bg-neutral-700  rounded-md my-3 hover:bg-neutral-500 cursor-pointer ${extend ? "space-x-4 p-2" : "justify-center  py-2"}`}>
            <Icon size={`${extend ? "22" : "20"}`} />
            <span className={`${extend ? "block" : "hidden"} transition-all `}>{text}</span>

            {
                !extend && (
                    <div className="absolute left-full ml-2 bg-gray-700 px-3 rounded-md py-1 z-10 invisible group-hover:visible">
                        <p>
                            {text === "Light-Mode" ? "Light" : text}
                        </p>
                    </div>
                )
            }
        </li >
    )
}