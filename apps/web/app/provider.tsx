"use client";

import React from "react";
import { OpenProvider } from "../context/OpenContext";
import { ToolProvider } from "../context/ToolContext";

export default function Provider({ children }: { children: React.ReactNode }) {

    return (
        <>
            <OpenProvider>
                <ToolProvider>
                    {children}
                </ToolProvider>
            </OpenProvider>
        </>
    )
}