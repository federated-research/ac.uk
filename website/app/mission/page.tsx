"use client";

import { SectionHeader } from "@/components/core/section-header";
import { FadeIn } from "@/components/core/fade-in";

export default function Page() {
  return (
    <>
      {/* Hero Statement */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="max-w-3xl">Mission statement headline</h1>
          </FadeIn>
        </div>
      </section>

      {/* Image */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <img
              src="/image.jpg"
              alt=""
              className="w-full aspect-[3/1] object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <SectionHeader label="The Problem" title="Section headline" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              label="Our Approach"
              title="Section headline"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border bg-card p-8 md:p-10">
                  <h3>Card headline</h3>
                  <p className="mt-3 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader label="Our Values" title="Section headline" />
          </FadeIn>
          <div className="mt-12 space-y-8">
            {[
              { number: "01", title: "Value headline" },
              { number: "02", title: "Value headline" },
              { number: "03", title: "Value headline" },
            ].map((value, i) => (
              <FadeIn key={value.number} delay={i * 0.05}>
                <div className="flex gap-6 border-t pt-8 md:gap-12">
                  <span className="text-3xl font-bold text-muted-foreground/30">
                    {value.number}
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p className="mt-2 max-w-xl text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
