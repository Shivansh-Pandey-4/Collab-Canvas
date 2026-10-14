"use client"

import Input from "./input"
import { LucideProps } from "lucide-react";

interface IIconInput extends React.ComponentProps<"input"> {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    htmlFor: string;
}

export default function IconInput({ icon, htmlFor, ...props }: IIconInput) {
    const Icon = icon;

    return (
        <div className="flex items-center">
            <label htmlFor={htmlFor} className="absolute ml-2">
                <Icon className="text-gray-500" />
            </label>
            <Input {...props} className="px-10" />
        </div>
    )
}