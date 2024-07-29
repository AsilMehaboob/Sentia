import Hero from "../pages/hero/hero";
import HomeCanvasRevealEffect from "../pages/canvas/canvas";
import GeminiLinkPreview from "../pages/linktext/linktext";
import Navbar from "../components/navbar";


export default function Landing() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <HomeCanvasRevealEffect />
      <GeminiLinkPreview />
    </div>
  );
}
