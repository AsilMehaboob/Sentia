"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../../components/linktext";

export default function GeminiLinkPreview() {
  return (
    <div className="flex justify-center bg-black items-center h-[40rem] flex-col px-4">
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Built By Fine-Tuning{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-pink-500">
          <LinkPreview url="https://gemini.google.com">
            Gemini
          </LinkPreview>
        </span>
        .
      </div>
      <div className="text-neutral-500 dark:text-neutral-400 text-center text-xl md:text-3xl max-w-3xl mx-auto">
        From Love Sonnets to Hate Tweets.<br /> Capture the Spectrum.
      </div>
    </div>
  );
}
