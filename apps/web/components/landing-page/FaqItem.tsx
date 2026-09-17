"use client"

import Button from "@repo/ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"


interface IFaqItem {
    item: {
        id: number;
        question: string;
        answer: string;
    }
}


export default function FaqItem(props: IFaqItem) {

    const { item } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={item.id} className="border rounded-md border-gray-700 max-w-full xl:max-w-lg w-full mx-auto p-3">
            <div className="flex justify-between items-center space-x-3">
                <h2 className="text-xl">{item.question}</h2>
                <Button className={`transition-all ${isOpen ? "bg-red-700 hover:bg-red-600" : "bg-green-700 hover:bg-green-600"} `} onClick={(e) => setIsOpen(prev => !prev)}>
                    {
                        isOpen ? <Minus /> : < Plus />
                    }
                </Button>
            </div>
            {
                isOpen && <p className="mt-6 text-gray-400">{item.answer}</p>
            }
        </div >
    )
}