"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Companion", href: "/companion" },
  { label: "My  Journey", href: "/myjourney" },
];

const NavItems = () => {
  const pathName = usePathname();
  return (
    <nav className="flex items-center gap-8">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(pathName === href && "text-primary font-semibold")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
