"use client";

import { useState } from "react";
import Button from "@repo/ui/button";
import { ChevronRight, ChevronLeft, LucideProps, LayoutDashboard, UserPen, Sun, LogOut } from "lucide-react";

import { useSidebarContext } from "../../context/SidebarContext";
import type { ISessionData } from "../../types/SessionType";
import { useRouter } from "next/navigation";

interface ISidebarItems {
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    text: string;
    name: string;
    isActive: boolean;
    onClick: () => void;
}


export default function SideBarClient({
    session,
}: {
    session: ISessionData;
}) {
    const { extend, setExtend } = useSidebarContext();

    const [activeItem, setActiveItem] = useState("DashBoard");
    const navigate = useRouter();


    return (
        <aside
            className={`h-screen shrink-0 max-w-3xs shadow-sm shadow-amber-50 bg-neutral-800 ${extend ? "w-full" : "w-22"
                }`}
        >
            <nav className="h-full border-r pt-6 px-2 flex flex-col">
                <div
                    className={`flex items-center justify-between ${!extend && "justify-center"
                        }`}
                >
                    <h1
                        className={`text-xl ${extend ? "block" : "hidden"
                            } transition-all`}
                    >
                        Collab Canvas
                    </h1>

                    <Button
                        onClick={() => setExtend((prev) => !prev)}
                        size={extend ? "sm" : "md"}
                    >
                        {extend ? <ChevronLeft /> : <ChevronRight />}
                    </Button>
                </div>

                <ul className="mt-12 py-1 flex-1 rounded-md">
                    <SidebarItems
                        name="DashBoard"
                        icon={LayoutDashboard}
                        text="DashBoard"
                        isActive={activeItem === "DashBoard"}
                        onClick={() => setActiveItem("DashBoard")}
                    />

                    <SidebarItems
                        name="profile"
                        icon={UserPen}
                        text="Profile"
                        isActive={activeItem === "profile"}
                        onClick={() => {
                            setActiveItem("profile")
                            navigate.push("/profile");
                        }}
                    />

                    <SidebarItems
                        name="switch-btn"
                        icon={Sun}
                        text="Light-Mode"
                        isActive={activeItem === "switch-btn"}
                        onClick={() => setActiveItem("switch-btn")}
                    />

                    <SidebarItems
                        name="logout"
                        icon={LogOut}
                        text="Logout"
                        isActive={activeItem === "logout"}
                        onClick={() => {
                            setActiveItem("logout");
                        }}
                    />
                </ul>

                <div className="py-5">
                    <div
                        className={`${extend ? "gap-x-3" : "justify-center"
                            } flex items-center bg-red-900 p-2 rounded-md`}
                    >
                        <h1 className="rounded-lg py-2 px-4 border text-center bg-orange-800">
                            {session?.user.name.charAt(0).toUpperCase()}
                        </h1>

                        <div
                            className={`leading-4 ${extend ? "block" : "hidden"
                                } overflow-hidden transition-all`}
                        >
                            <h1>{session?.user.name.toLocaleUpperCase()}</h1>
                            <p className="text-sm text-zinc-400">
                                {session?.user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItems({
    icon,
    text,
    name,
    isActive,
    onClick,
}: ISidebarItems) {
    const Icon = icon;
    const { extend } = useSidebarContext();

    return (
        <li
            onClick={onClick}
            className={`relative group flex items-center rounded-md my-3 cursor-pointer
        ${extend ? "space-x-4 p-2" : "justify-center py-2"}
        ${isActive ? "bg-neutral-500" : "bg-neutral-700"}
        hover:bg-neutral-500
      `}
        >
            <Icon size={extend ? "22" : "20"} />
            <span
                className={`${extend ? "block" : "hidden"
                    } transition-all`}
            >
                {text}
            </span>

            {!extend && (
                <div className="absolute left-full ml-2 bg-gray-700 px-3 rounded-md py-1 z-10 invisible group-hover:visible">
                    <p>{text === "Light-Mode" ? "Light" : text}</p>
                </div>
            )}
        </li>
    );
}