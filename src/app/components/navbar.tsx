import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  children,
  item,
}: {
  children?: React.ReactNode;
  item: string;
}) => {
  return (
    <div className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-neutral-300 dark:text-black hover:opacity-[0.9] dark:hover:opacity-90"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-gray-300 dark:border-black/[0.2] bg-#0b1623 shadow-input flex justify-center space-x-4 px-8 py-6" style={{ backgroundColor: "#0d1010", boxShadow: "0 0 1px 0 rgba(1, 1, 1, 1)" }}>
      {children}
    </nav>
  );
};

export const ProductItem = () => {
  return null; // Removed ProductItem component to exclude images
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-200 dark:text-neutral-700 hover:text-white dark:hover:text-black">
      {children}
    </Link>
  );
};
