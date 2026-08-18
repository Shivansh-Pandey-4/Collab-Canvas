"use client"
import { useEffect, useRef } from "react";

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
        <canvas ref={myCanvas} className="bg-white" height={200} width={200} id="canvas"></canvas>
    )
}