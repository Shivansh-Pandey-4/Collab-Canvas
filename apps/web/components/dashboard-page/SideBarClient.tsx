"use client"

import Button from "@repo/ui/button"
import { ChevronRight, LucideProps, LayoutDashboard, UserPen, Sun, LogOut } from "lucide-react"

interface ISidebarItems {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

    text: string;
}


export default function SideBarClient() {


    return (
        <aside className="h-screen max-w-3xs w-full shadow-sm shadow-amber-50 bg-neutral-800">
            <nav className="h-full border-r pt-6 px-2 flex flex-col">

                <div className="flex items-center justify-between">
                    <h1 className="text-xl">Collab Canvas</h1>
                    <Button>
                        <ChevronRight />
                    </Button>
                </div>

                <ul className="mt-12 flex-1 rounded-md">
                    <SidebarItems icon={LayoutDashboard} text="DashBoard" />
                    <SidebarItems icon={UserPen} text="Profile" />
                    <SidebarItems icon={Sun} text="Light Mode" />
                    <SidebarItems icon={LogOut} text="Logout" />
                </ul>

                <div className="py-10">
                    <div className=" flex items-center gap-x-3 bg-red-900 p-2 rounded-md">
                        <h1 className="rounded-lg py-2 px-4 border text-center bg-orange-800">S</h1>
                        <div className="leading-4">
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

    return (
        <li className="flex items-center space-x-4 bg-neutral-700 p-2 rounded-md my-3 hover:bg-neutral-500 cursor-pointer">
            <Icon />
            <span>{text}</span>
        </li>
    )
}