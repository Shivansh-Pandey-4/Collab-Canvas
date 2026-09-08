"use client"

import Input from "./input"
import { LucideProps } from "lucide-react";

interface IIconInput extends React.ComponentProps<"input"> {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export default function IconInput({ icon, ...props }: IIconInput) {
    const Icon = icon;

    return (
        <div className="flex items-center">
            <label htmlFor="search" className="absolute ml-2">
                <Icon className="text-gray-500" />
            </label>
            <Input id="search" {...props} className="px-10" />
        </div>
    )
}