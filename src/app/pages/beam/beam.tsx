"use client";
import React from "react";
import { BackgroundBeams } from "../../components/beam";

export default function HelpBackgroundBeams() {
  return (
    <div className="h-[45rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mb-8">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10  text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          What is Sentia?
        </h1>
        <p className="text-bold text-neutral-500 max-w-lg mx-auto my-2 text-md relative z-10">
          <br />
          Sentia is built by fine-tuning Google's Gemini to provide precise sentiment analysis of text. It generates sentiment scores ranging from -1 (negative) to 1 (positive), offering insights into the tone of any written content.
          <br /><br />
          <br />
          Simply input your text to receive instant sentiment analysis. Whether evaluating customer feedback or social media posts, Sentia provides actionable insights to support informed decision-making.
          <br /><br />
          <br />


          While Sentia delivers accurate sentiment analysis, automated tools may not capture nuances like sarcasm or cultural context fully. Use the sentiment scores as a guide, always interpreting them in the context of the text.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
