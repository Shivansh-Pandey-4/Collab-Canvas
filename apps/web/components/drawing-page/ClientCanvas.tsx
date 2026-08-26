"use client"

import { useEffect, useRef } from "react"
import ToolBar from "./ToolBar";
import { type IDrawShapes } from "../../types/DrawShapes";
import useToolBar from "../../hooks/useToolBar";


export default function ClientCanvas2() {

    const myCanvas = useRef<HTMLCanvasElement>(null);
    const initialPoint = useRef({ x: 0, y: 0 });
    const widthHeight = useRef({ x: 0, y: 0 });
    const isStart = useRef(false);
    const allData = useRef<IDrawShapes[]>([]);

    const myToolBar = useToolBar();
    const selectedTool = useRef(myToolBar.selectedItem);


    function drawingShapes(ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement | null) {
        if (!ctx) return;
        if (!canvas) return;

        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        allData.current.forEach(item => {
            const { shape } = item;

            if (shape === "square") {
                ctx.strokeRect(item.x, item.y, item.w, item.h);
            }

            if (shape === "circle") {
                const { x, y, w, h, rotationAngle, startAngle, endAngle } = item;
                ctx.beginPath();
                ctx.ellipse(x, y, w, h, rotationAngle, startAngle, endAngle);
                ctx.stroke();
            }

        })

    }

    useEffect(() => {
        selectedTool.current = myToolBar.selectedItem;
    }, [myToolBar.selectedItem]);


    useEffect(() => {
        const canvas = myCanvas.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function handleMouseDown(e: MouseEvent) {
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();

            isStart.current = true;

            const startX = e.clientX - rect.left;
            const startY = e.clientY - rect.top;

            initialPoint.current = {
                x: startX,
                y: startY,
            };
            widthHeight.current = { x: 0, y: 0 };
        }

        function handleMouseMove(e: MouseEvent) {
            if (!canvas) return;
            if (!ctx) return;
            const value = canvas.getBoundingClientRect();

            if (!isStart.current) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawingShapes(ctx, canvas);

            if (selectedTool.current === "arrow") {
                const x = e.clientX - value.left;
                const y = e.clientY - value.top;

                const width = x - initialPoint.current.x;
                const height = y - initialPoint.current.y;

                // ctx.shadowColor = "#dd5533";
                // ctx.shadowBlur = 5;
                // ctx.lineJoin = "bevel";
                ctx.fillStyle = "rgba(0, 255, 0, 0.1)"
                ctx.fillRect(initialPoint.current.x, initialPoint.current.y, width, height);

                // ctx.strokeStyle = "green";
                // ctx.strokeRect(
                //     initialPoint.current.x,
                //     initialPoint.current.y,
                //     width,
                //     height
                // );

            }

            if (selectedTool.current === "square") {
                const x = e.clientX - value.left;
                const y = e.clientY - value.top;

                const width = x - initialPoint.current.x;
                const height = y - initialPoint.current.y;

                // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.strokeStyle = "black"
                ctx.strokeRect(initialPoint.current.x, initialPoint.current.y, width, height);
            }

            if (selectedTool.current === "circle") {
                const x = e.clientX - value.left;
                const y = e.clientY - value.top;

                const width = x - initialPoint.current.x;
                const height = y - initialPoint.current.y;

                const centerX = initialPoint.current.x + width / 2;
                const centerY = initialPoint.current.y + height / 2;

                const radiusX = Math.abs(width / 2);
                const radiusY = Math.abs(height / 2);

                ctx.beginPath();

                ctx.ellipse(
                    centerX,
                    centerY,
                    radiusX,
                    radiusY,
                    0,
                    0,
                    Math.PI * 2
                );

                ctx.stroke();
            }
        }

        function handleMouseUp(e: MouseEvent) {
            if (!canvas) return;
            const value = canvas.getBoundingClientRect();

            isStart.current = false;

            const x = e.clientX - value.left;
            const y = e.clientY - value.top;

            if (selectedTool.current === "square") {
                const width = x - initialPoint.current.x;
                const height = y - initialPoint.current.y;

                const finalShape: IDrawShapes = {
                    shape: "square",
                    x: initialPoint.current.x,
                    y: initialPoint.current.y,
                    w: width,
                    h: height,
                };

                allData.current.push(finalShape);

            }

            if (selectedTool.current === "circle") {
                if (!ctx) return;

                const width = x - initialPoint.current.x;
                const height = y - initialPoint.current.y;

                const centerX = initialPoint.current.x + width / 2;
                const centerY = initialPoint.current.y + height / 2;

                const radiusX = Math.abs(width / 2);
                const radiusY = Math.abs(height / 2);

                const finalShape: IDrawShapes = {
                    shape: "circle",
                    x: centerX,
                    y: centerY,
                    w: radiusX,
                    h: radiusY,
                    rotationAngle: 0,
                    startAngle: 0,
                    endAngle: Math.PI * 2
                }

                allData.current.push(finalShape);

            }

            drawingShapes(ctx, canvas);
        }

        function resizeCanvas() {
            if (!canvas) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resizeCanvas);

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);


    // useEffect(() => {
    //     const canvas = myCanvas.current;
    //     if (!canvas) return;
    //     const ctx = canvas.getContext("2d");
    //     if (!ctx) return;

    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //     drawingShapes(ctx, canvas);

    // }, [allData]);


    return (
        <>
            <ToolBar />
            <canvas ref={myCanvas} height={600} width={1300} className="bg-white" />
        </>
    )
}