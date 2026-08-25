"use state";

import { createContext, useState } from "react";

type ToolItem = "arrow" | "circle" | "rectangle" | "eraser";

interface IToolContext {
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

