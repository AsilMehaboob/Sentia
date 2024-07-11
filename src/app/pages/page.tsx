import { Hero } from "../pages/hero/hero";
import { HomeCanvasRevealEffect } from "../pages/canvas/canvas";
import { GeminiLinkPreview } from "../pages/linktext/linktext";




export default function Landing() {
    return (
      <>
      <div>
        <Hero/>
      
        <HomeCanvasRevealEffect/>
        <GeminiLinkPreview/>
      </div>
      </>
    );
  }