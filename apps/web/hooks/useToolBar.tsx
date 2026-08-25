"use client";

import { useContext } from "react";
import { ToolContext } from "../context/ToolContext";

export default function useToolBar() {
    const myToolBar = useContext(ToolContext);

    if (!myToolBar) {
        throw new Error("ToolContext Provider is not added");
    }

    return myToolBar;
}