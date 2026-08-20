"use client"
import { useEffect, useRef } from "react";
import { MousePointer, Circle, Square, Diamond, MoveRight, Minus, Pencil, TypeOutline, Eraser } from "lucide-react";



export default function ClientCanvas() {
    const myCanvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = myCanvas.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };

    }, []);


    return (
        <>
            <div className="border rounded-md px-4 py-1.5 max-w-lg fixed w-full top-5 left-1/2 -translate-x-1/2 border-gray-300 shadow-md shadow-gray-200">
                <ul className="flex gap-x-6 items-center justify-center">
                    <li className="p-2 hover:bg-gray-100 rounded-md"><MousePointer className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><Square className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><Circle className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><Diamond className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><MoveRight className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><Minus className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><Pencil className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><TypeOutline className="text-gray-700" size={14} /></li>
                    <li className="p-2 hover:bg-gray-100 rounded-md"><Eraser className="text-gray-700" size={14} /></li>
                </ul>
            </div>
            <canvas ref={myCanvas} className="bg-white" height={200} width={200} id="canvas"></canvas>
        </>
    )
}