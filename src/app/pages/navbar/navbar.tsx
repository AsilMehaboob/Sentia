"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem } from "../../components/navbar";
import { cn } from "../../utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/" className={cn("text-base font-medium", { "text-blue-500": active === "Home" })}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="/analyze" className={cn("text-base text-white font-medium", { "text-blue-500": active === "Analyze" })}>
          <MenuItem setActive={setActive} active={active}  item="Analyze" />
        </Link>
        <Link href="/help" className={cn("text-base text-white font-medium", { "text-blue-500": active === "Help" })}>
          <MenuItem setActive={setActive} active={active} item="Help" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
