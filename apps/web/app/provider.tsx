"use client";

import React from "react";
import { OpenProvider } from "../context/OpenContext";
import { ToolProvider } from "../context/ToolContext";
import { SidebarProvider } from "../context/SidebarContext";

export default function Provider({ children }: { children: React.ReactNode }) {

    return (
        <>
            <OpenProvider>
                <ToolProvider>
                    <SidebarProvider>
                        {children}
                    </SidebarProvider>
                </ToolProvider>
            </OpenProvider>
        </>
    )
}