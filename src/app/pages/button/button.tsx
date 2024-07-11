"use client";
import React from "react";
import { HoverBorderGradient } from "../../components/button"

export function HoverBorderGradientDemo() {
  return (
    <div className="m-5 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-black text-white hover:bg-neutral-800 dark:text-white flex items-center space-x-2"
      >

        <span> Get Started &gt; </span>
      </HoverBorderGradient>
    </div>
  );
}

