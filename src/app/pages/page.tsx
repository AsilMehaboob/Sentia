import { Hero } from "../pages/hero/hero";
import { HomeCanvasRevealEffect } from "../pages/canvas/canvas";
import { GeminiLinkPreview } from "../pages/linktext/linktext";
import Navbar from "../pages/navbar/navbar";
import Footer from "../pages/footer/footer";

export default function Landing() {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center">
         
            <Navbar />
            <section className="flex-grow">
                <Hero />
            </section>
            <HomeCanvasRevealEffect />
            <GeminiLinkPreview />
            <Footer />
        </div>
    );
}
