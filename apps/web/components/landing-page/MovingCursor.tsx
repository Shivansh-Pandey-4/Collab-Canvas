"use client"

import { MessageSquare, PointerIcon } from "lucide-react";
import { motion } from "motion/react";

export const MovingCursor = () => {


    return (
        <div className="relative flex flex-col items-start p-4 h-72 overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/50 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800">
            <div className="w-full h-full relative">
                <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 items-end">
                    {/* First Message */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2 bg-white dark:bg-neutral-800 p-2 px-3 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700"
                    >
                        <MessageSquare className="w-3 h-3 text-blue-500" />
                        <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
                            Should we use this logo?
                        </span>
                    </motion.div>

                    {/* Second Message (Reply) */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex items-center gap-2 bg-white dark:bg-neutral-800 p-2 px-3 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700"
                    >
                        <MessageSquare className="w-3 h-3 text-green-500" />
                        <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
                            Looks great, scaling it!
                        </span>
                    </motion.div>
                </div>

                {/* Animated Cursor 1 (Alex) */}
                <motion.div
                    animate={{ x: [20, 100, 60], y: [80, 140, 100] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-40 flex flex-col items-start gap-1"
                >
                    <PointerIcon color="#3b82f6" />
                    <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Alex</span>
                </motion.div>

                {/* Animated Cursor 2 (Sarah) */}
                <motion.div
                    animate={{ x: [220, 160, 200], y: [40, 90, 50] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-40 flex flex-col items-start gap-1"
                >
                    <PointerIcon color="#ef4444" />
                    <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Sarah</span>
                </motion.div>

                {/* Board Simulation */}
                <div className="w-full h-full mt-4 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-black p-4">
                    <img
                        src={"/excalidraw-img.png"}
                        className="w-full h-full object-cover opacity-30"
                        alt="canvas"
                    />
                </div>
            </div>
        </div>
    );
};
