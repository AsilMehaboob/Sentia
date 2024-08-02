"use client";
import React from "react";
import { WavyBackground } from "../../components/hero";
import { HoverBorderGradientDemo} from "../button/button"
import Link from "next/link";
import Navbar from "../navbar/navbar";

export function Hero() {
  return (

    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-4xl md:text-4xl lg:text-8xl sm:text-3xl text-neutral-200 font-bold  text-center">
        Sentia
      </p>
      <p className="text-base md:text-4x1 mt-lg text-white font-normal text-center">
      Make smarter decisions with data-driven sentiment analysis.
      </p>
      <Link href='/analyze' >
      <HoverBorderGradientDemo/></Link>
    </WavyBackground>
  );
}
