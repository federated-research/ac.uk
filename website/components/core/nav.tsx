"use client";

import Link from "next/link";
import { Logo } from "@/components/core/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";


export const Nav = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-brand p-4">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="journey" passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                    )}
                  >
                      Journey
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/mission" passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                    )}
                  >
                      Mission
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/impact" passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white/90"
                    )}
                  >
                      Impact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
