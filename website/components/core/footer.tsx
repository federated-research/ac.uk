import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/core/logo";
import { PartnerGrid } from "@/components/core/partner-grid";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <section className="bg-white text-foreground">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 md:py-16">
          <h2>Partner Organisations</h2>
          <div className="mt-8">
            <PartnerGrid
              partners={[
                { name: "HDR UK", logo: "/logos/partners/hdr.svg" },
                { name: "University of Nottingham", logo: "/logos/partners/uon.svg" },
                { name: "NHS SDE Network", logo: "/logos/partners/sde.svg" },
              ]}
            />
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center mb-2">
              <Logo />
            </Link>
            {/* <p className="mt-2 max-w-xs text-sm text-white/70">
              Connecting researchers to data they can't reach.
            </p> */}
          </div>

          <nav className="flex gap-8 text-sm text-white/70">
            {/* <Link href="/journey" className="hover:text-white transition-colors">
              Journey
            </Link>
            <Link href="/mission" className="hover:text-white transition-colors">
              Mission
            </Link>
            <Link href="/impact" className="hover:text-white transition-colors">
              Impact
            </Link> */}
          </nav>
        </div>

        <Separator className="my-8 bg-white/20" />

      </div>
    </footer>
  );
}
