"use client";

import { createContext, useState } from "react";

interface IOpenContext {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const OpenContext = createContext<IOpenContext | null>(null);

export function OpenProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <OpenContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </OpenContext.Provider>
    )
}