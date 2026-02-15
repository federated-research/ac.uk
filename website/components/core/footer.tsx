import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Federated Research
            </Link>
            <p className="mt-2 max-w-xs text-sm text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            </p>
          </div>

          <nav className="flex gap-8 text-sm text-white/70">
            <Link href="/journey" className="hover:text-white transition-colors">
              Journey
            </Link>
            <Link href="/mission" className="hover:text-white transition-colors">
              Mission
            </Link>
            <Link href="/impact" className="hover:text-white transition-colors">
              Impact
            </Link>
          </nav>
        </div>

        <Separator className="my-8 bg-white/20" />

      </div>
    </footer>
  );
}
