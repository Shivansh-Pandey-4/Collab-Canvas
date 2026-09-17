import Image from "next/image";
import { MovingCursor } from "./MovingCursor";
import { RotatingGlobe } from "./RotatingGlobe";


export default function Features() {


    return (
        <div className="mt-4 py-15 px-6 scroll-mt-20" id="features">
            <h1 className="text-center text-3xl md:text-5xl text-zinc-200 font-bold ">Get to know the features</h1>

            <section className="md:mt-15 mt-10 py-2 rounded-md grid md:gap-x-2 md:gap-y-10 lg:grid-cols-12 ">

                <div className="rounded-md p-4 lg:col-span-7">
                    <h1 className="text-xl md:text-2xl text-white">Infinite Canvas integrated with Excalidraw</h1>
                    <p className="text-gray-400 md:mt-0.5 mt-2 max-w-sm text-sm md:text-lg ">Sketch, brainstorm, and map out architectures without ever running out of space.</p>
                    <div className="mt-4 h-[300px] relative rounded-md overflow-hidden">
                        <Image
                            alt="canvas-image"
                            src="/excalidraw-img.png"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>

                <div className=" rounded-md p-4 lg:col-span-5">
                    <h1 className="text-xl md:text-2xl text-white">Customised Real-time Multi-cursor</h1>
                    <p className="text-gray-400 md:mt-0.5 mt-2 text-sm md:text-lg max-w-sm">See your team's ideas come to life within second.</p>
                    <div className="mt-4">
                        <MovingCursor />
                    </div>
                </div>

                <div className=" p-4 rounded-md lg:col-span-4 ">
                    <h1 className="text-xl md:text-2xl text-white">Global Sync & Sharing</h1>
                    <p className="text-gray-400 md:mt-0.5 mt-2 text-sm md:text-lg max-w-sm">Synced across the globe with our cutting edge cloud infrastructure and CDN.</p>

                    <div className="mt-4">
                        <RotatingGlobe />
                    </div>
                </div>

                <div className=" p-4 rounded-md min-h-[450px] lg:col-span-8">
                    <h1 className="text-xl md:text-2xl text-white">Watch the Demo</h1>
                    <p className="text-gray-400 md:mt-0.5 mt-2 text-sm md:text-lg max-w-sm">See how Sketchcalibur handles complex diagrams and real-time syncing.</p>

                    <div className="mt-4">
                        <div className="h-[350px] lg:h-[400px]">
                            <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/Gv9MezPAchI" title="Excalidraw, my favorite whiteboard / tech diagram app" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}