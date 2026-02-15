"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/core/fade-in";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="max-w-4xl text-6xl md:text-8xl lg:text-9xl">
              Federated
              <br />
              Research
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-lg text-xl text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Button asChild size="lg" className="text-sm">
                <Link href="/impact">Button label</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-1">
          <FadeIn>
            <img
              src="/image.jpg"
              alt=""
              className="w-full aspect-[21/9] object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3">
            {[
              { number: "01", title: "Pillar headline" },
              { number: "02", title: "Pillar headline" },
              { number: "03", title: "Pillar headline" },
            ].map((pillar, i) => (
              <FadeIn
                key={pillar.number}
                delay={i * 0.1}
                className={`py-12 md:py-16 ${i > 0 ? "border-t md:border-t-0 md:border-l md:pl-10" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {pillar.number}
                </p>
                <h3 className="mt-3">{pillar.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-t bg-brand text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24 md:py-36">
          <FadeIn>
            <p className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl max-w-3xl">
              Statement headline that captures the mission in one or two
              compelling sentences.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm"
              >
                <Link href="/mission">Button label</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Network */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The Network
              </p>
              <h2 className="mt-3">Section headline</h2>
            </FadeIn>
            <FadeIn delay={0.1} className="flex items-end">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
