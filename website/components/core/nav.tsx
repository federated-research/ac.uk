"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { Logo } from "@/components/core/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinkClass =
  "inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none text-white/90";

const links = [
  { href: "/community", label: "Community" },
  { href: "/journey", label: "Journey" },
  { href: "/mission", label: "Mission" },
  { href: "/impact", label: "Impact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-50 w-full bg-brand p-4">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} passHref>
                    <NavigationMenuLink className={navLinkClass}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-2 -mr-2"
            aria-label="Open menu"
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile overlay + slide-out */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-brand transition-transform duration-200 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white p-2 -mr-2"
            aria-label="Close menu"
          >
            <XIcon className="size-6" />
          </button>
        </div>
        <nav className="flex flex-col px-6 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium text-white/90 border-b border-white/10 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
