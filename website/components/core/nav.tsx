"use client";

import Link from "next/link";
import { Logo } from "@/components/core/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinkClass =
  "inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none text-white/90";

export const Nav = () => {
  return (
    <header className="z-50 w-full bg-brand p-4">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/journey" passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    Journey
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/mission" passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    Mission
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/impact" passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    Impact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
