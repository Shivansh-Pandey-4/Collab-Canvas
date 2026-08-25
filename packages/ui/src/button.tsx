"use client"

import React from "react"
import clsx from "clsx";

interface IButton extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "lg" | "md";
    variant?: "primary" | "secondary" | "tertiary" | "danger" | "toolBar";
}


export default function Button({ children, size = "sm", variant = "primary", className, disabled, ...props }: IButton) {

    const baseStyle = "rounded-md border";

    const sizes = {
        sm: "px-1",
        md: "px-2 py-1 text-md",
        lg: "px-3 py-2 text-lg"
    }

    const variants = {
        primary: "bg-gray-600 text-white hover:bg-black hover:text-white",
        secondary: "bg-blue-600 text-white hover:bg-green-600",
        tertiary: "bg-amber-400 text-black hover:bg-amber-600",
        danger: "bg-red-500 text-black hover:text-white hover:bg-red-600",
        toolBar: "hover:bg-gray-100"
    }

    return (
        <button {...props} disabled={disabled} className={clsx(baseStyle, className, sizes[size], variants[variant], disabled ? "opacity-50 cursor-no-drop" : "cursor-pointer")}>
            {children}
        </button>
    )
}