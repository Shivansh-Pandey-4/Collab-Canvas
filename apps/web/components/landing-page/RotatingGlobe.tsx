"use client";

import { motion } from "motion/react";


export const RotatingGlobe = () => {


    return (
        <div className="flex justify-center items-center h-[380px] overflow-hidden">
            <motion.svg
                width="300"
                height="500"
                viewBox="10 10 210 210"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="text-yellow-500"
            >
                {/* Outer globe */}
                <circle
                    cx="110"
                    cy="110"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                />

                {/* Vertical longitude lines */}
                <ellipse
                    cx="110"
                    cy="110"
                    rx="35"
                    ry="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.45"
                />

                <ellipse
                    cx="110"
                    cy="110"
                    rx="65"
                    ry="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.45"
                />

                {/* Horizontal latitude lines */}
                <ellipse
                    cx="110"
                    cy="110"
                    rx="80"
                    ry="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.45"
                />

                <ellipse
                    cx="110"
                    cy="110"
                    rx="80"
                    ry="55"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.45"
                />

                {/* Equator */}
                <line
                    x1="30"
                    y1="110"
                    x2="190"
                    y2="110"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.45"
                />
            </motion.svg>
        </div>
    );
};