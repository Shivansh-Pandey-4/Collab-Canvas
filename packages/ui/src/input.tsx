"use client"

import clsx from "clsx"
import { twMerge } from "tailwind-merge"


interface IInput extends React.ComponentProps<"input"> {
    variant?: "sm" | "md" | "lg";
    className?: string;
}

export default function Input({ variant = "md", className, ...props }: IInput) {

    const baseStyle = "rounded-md border border-gray-600"

    const variants = {
        sm: "px-2 py-1.5",
        md: "px-3 py-2",
        lg: "px-5 py-2 text-xl"
    }

    return (
        <input {...props} className={twMerge(clsx(baseStyle, variants[variant], className))} />
    )
}