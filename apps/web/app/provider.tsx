"use client";

import React from "react";
import { OpenProvider } from "../context/OpenContext";

export default function Provider({ children }: { children: React.ReactNode }) {

    return (
        <>
            <OpenProvider>
                {children}
            </OpenProvider>
        </>
    )
}