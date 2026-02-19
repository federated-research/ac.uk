"use client";

import { FadeIn } from "@/components/core/fade-in";

export type Partner = {
  name: string;
  logo: string;
  href?: string;
};

export function PartnerGrid({
  partners,
  columns = 4,
}: {
  partners: Partner[];
  columns?: 3 | 4 | 5 | 6;
}) {
  const colClass = {
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    6: "grid-cols-3 md:grid-cols-6",
  }[columns];

  return (
    <div className={`grid ${colClass} items-center gap-x-10 gap-y-10 md:gap-x-14 md:gap-y-12`}>
      {partners.map((partner, i) => {
        const inner = (
          <div className="flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[160px] object-contain opacity-50 transition-opacity hover:opacity-100"
            />
          </div>
        );

        return (
          <FadeIn key={partner.name} delay={i * 0.03}>
            {partner.href ? (
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              inner
            )}
          </FadeIn>
        );
      })}
    </div>
  );
}
