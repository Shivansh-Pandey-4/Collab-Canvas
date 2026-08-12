import Features from "./Features";
import Hero from "./Hero";

export default function Body() {

    return (
        <div className="md:mx-4">
            <Hero />
            <section className="mt-5 py-8 px-4 mb-2 text-center">
                <h1 className="text-xl md:text-3xl  text-shadow-gray-500">
                    Sketchcalibur is a real-time collaborative whiteboard.
                </h1>
                <p className="text-gray-500 text-sm md:text-xl  max-w-4xl mx-auto mt-4">
                    Sketch, brainstorm, and co-create ideas visually with your team. Share links, invite collaborators, and draw together seamlessly in themed rooms.
                </p>
            </section>
            <Features />
        </div>
    )
}