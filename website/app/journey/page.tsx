"use client";

import { Journey } from "@/components/core/journey";
import { FadeIn } from "@/components/core/fade-in";

export default function Page() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h1>Our Journey</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              The path from fragmented health data to a resource researchers can use.
            </p>
          </FadeIn>
        </div>
      </section>
      <Journey />
    </>
  );
}
