"use client";

import { createContext, useState } from "react";

export type ToolItem = "arrow" | "circle" | "triangle" | "square" | "diamond" | "right-arrow" | "line" | "pencil" | "text-type" | "eraser";

export interface IToolContext {
    selectedItem: ToolItem;
    setSelectedItem: React.Dispatch<React.SetStateAction<ToolItem>>
}

export const ToolContext = createContext<IToolContext | null>(null);

export const ToolProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedItem, setSelectedItem] = useState<ToolItem>("arrow");

    return (
        <ToolContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </ToolContext.Provider>
    )
}

