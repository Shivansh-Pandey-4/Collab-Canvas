"use client"

import Input from "./input"
import { LucideProps } from "lucide-react";

interface IIconInput extends React.ComponentProps<"input"> {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export default function IconInput({ icon, ...props }: IIconInput) {
    const Icon = icon;

    return (
        <div className="relative">
            <label htmlFor="search" className="absolute top-1/2 -translate-y-1/2 left-2">
                <Icon />
            </label>
            <Input id="search" {...props} className="px-10" />
        </div>
    )
}