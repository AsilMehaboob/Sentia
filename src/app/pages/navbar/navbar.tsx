"use client";
import React from "react";
import Link from "next/link";
import { Menu, MenuItem } from "../../components/navbar";
import { cn } from "../../utils/cn";

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-xl  mx-auto z-50", className)}>
      <Menu>
        <Link href="/" className={cn("text-base font-medium")}>
          <MenuItem item="Home" />
        </Link>
        <Link href="/analyze" className={cn("text-base text-white font-medium")}>
          <MenuItem item="Analyze" />
        </Link>
        <Link href="/help" className={cn("text-base text-white font-medium")}>
          <MenuItem item="Help" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
