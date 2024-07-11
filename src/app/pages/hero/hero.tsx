"use client";
import React from "react";
import { WavyBackground } from "../../components/hero";
import { HoverBorderGradientDemo} from "../button/button"
import Link from "next/link";

export function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-8xl text-white font-bold inter-var text-center">
        Sentia
      </p>
      <p className="text-base md:text-4x1 mt-lg text-white font-normal inter-var text-center">
      Make smarter decisions with data-driven sentiment analysis.
      </p>
      <Link href='/analyze' >
      <HoverBorderGradientDemo/></Link>
    </WavyBackground>
  );
}
