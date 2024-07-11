"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/canvas";
import image1 from "../canvas/mlflash.png"
import image2 from "../canvas/realtime.png"
import image3 from "../canvas/testimonial.png"

export function HomeCanvasRevealEffect() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black dark:bg-white w-full gap-4 mx-auto px-8">
        <Card title="Real time" icon={<Image2 />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Polarity Detection" icon={<Image1 />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Opinion Mining" icon={<Image3 />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-xs w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-black text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-black text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-black text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-black text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-black text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Image1 = () => {
  return (
    <Image
      src={image1} // replace with the actual path to your PNG image
      alt="Icon"
      width={65}
      height={66}
      className="h-17 w-17    dark:text-white group-hover/canvas-card:text-white"
    />
  );
};

const Image2 = () => {
  return (
    <Image
      src={image2} // replace with the actual path to your PNG image
      alt="Icon"
      width={65}
      height={66}
      className="h-17 w-17   dark:text-white group-hover/canvas-card:text-white"
    />
  );
};


const Image3 = () => {
  return (
    <Image
      src={image3} // replace with the actual path to your PNG image
      alt="Icon"
      width={65}
      height={66}
      className="h-17 w-17   dark:text-white group-hover/canvas-card:text-white"
    />
  );
};


export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className} 
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };