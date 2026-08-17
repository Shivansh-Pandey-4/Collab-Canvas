import Image from "next/image";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export default function Features() {


    return (
        <div className="mt-4 py-8 px-4">
            <h1 className="text-center text-3xl md:text-5xl text-zinc-200">Get to know the features</h1>

            <section className="mt-4 border border-red-600 p-2 rounded-md gap-2">

                <div className="border rounded-md px-4">
                    <h1 className="text-xl md:text-2xl text-zinc-100">Infinite Canvas integrated with Excalidraw</h1>
                    <p className="text-gray-500 mt-0.5 max-w-sm">Sketch, brainstorm, and map out architectures without ever running out of space.</p>
                    <div className="border mt-2">
                        <Image alt="canvas-image" src={"/excalidraw-img.png"} width={500} height={1000} className="rounded-md" />
                    </div>
                </div>

                <div className="border rounded-md px-4 md:col-span-7">
                    <h1 className="text-xl md:text-2xl text-zinc-100">Customised Real-time Multi-cursor</h1>
                    <p className="text-gray-500 mt-0.5 max-w-sm">See your team's ideas come to life within second.</p>

                </div>

                <div className="border px-4 rounded-md md:col-span-3">
                    <h1 className="text-xl md:text-2xl text-zinc-100">Watch the Demo</h1>
                    <p className="text-gray-500 mt-0.5 max-w-sm">See how Sketchcalibur handles complex diagrams and real-time syncing.</p>

                    <div>
                        <div className="h-[250px] lg:h-[500px]">
                            <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/Gv9MezPAchI" title="Excalidraw, my favorite whiteboard / tech diagram app" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border px-4 rounded-md md:col-span-9">
                    <h1 className="text-xl md:text-2xl text-zinc-100">Global Sync & Sharing</h1>
                    <p className="text-gray-500 mt-0.5 max-w-sm">Synced across the globe with our cutting edge cloud infrastructure and CDN.</p>
                </div>

            </section>

        </div>
    )
}