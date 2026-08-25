"use client"

import { useEffect, useRef } from "react"
import ToolBar from "./ToolBar";

export default function ClientCanvas2() {

    const myCanvas = useRef<HTMLCanvasElement>(null);
    const initialPoint = useRef({ x: 0, y: 0 });
    const widthHeight = useRef({ x: 0, y: 0 });
    const isStart = useRef(false);

    useEffect(() => {
        const canvas = myCanvas.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function handleMouseDown(e: MouseEvent) {
            const value = canvas?.getBoundingClientRect();
            if (!value) return;

            isStart.current = true;

            const startX = e.clientX - value.left;
            const startY = e.clientY - value.top;

            initialPoint.current = { x: startX, y: startY };
            widthHeight.current = { x: 0, y: 0 };
        }

        function handleMouseMove(e: MouseEvent) {
            const value = canvas?.getBoundingClientRect();
            if (!value) return;
            if (!ctx) return;
            if (!isStart.current) return;

            const x = initialPoint.current.x;
            const y = initialPoint.current.y;

            const width = e.clientX - value.left;
            const height = e.clientY - value.top;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.strokeRect(x, y, width - x, height - y);
        }

        function handleMouseUp(event: MouseEvent) {
            const value = canvas?.getBoundingClientRect();
            if (!value) return;

            isStart.current = false;
            const x = event.clientX - value.left;
            const y = event.clientY - value.top;

            const width = x - initialPoint.current.x;
            const height = y - initialPoint.current.y;

            widthHeight.current = { x: width, y: height };
            drawPicture();
        }

        function drawPicture() {
            if (!ctx) return;

            const x = initialPoint.current.x;
            const y = initialPoint.current.y;
            const width = widthHeight.current.x;
            const height = widthHeight.current.y;

            ctx.strokeRect(x, y, width, height);
        }

        function resizeCanvas() {
            if (!canvas) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resizeCanvas);

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("resize", resizeCanvas);
        }

    }, []);

    return (
        <>
            <ToolBar />
            <canvas ref={myCanvas} height={600} width={1300} className="bg-white" />
        </>
    )
}