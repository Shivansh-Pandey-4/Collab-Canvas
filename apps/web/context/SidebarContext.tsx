"use client"

import { createContext, useContext, useState } from "react";

interface ISidebarContext {
    extend: boolean;
    setExtend: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = createContext<ISidebarContext | null>(null);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {

    const [extend, setExtend] = useState(true);

    return (
        <SidebarContext.Provider value={{ extend, setExtend }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    const myContext = useContext(SidebarContext);

    if (!myContext) {
        throw new Error("SidebarContext Provider is not wrapped properly")
    }

    return myContext;
}

