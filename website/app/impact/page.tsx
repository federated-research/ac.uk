"use client";

import Link from "next/link";
import { FadeIn } from "@/components/core/fade-in";

const caseStudies = [
  {
    title: "Cohort Discovery: Bunny",
    href: "/impact/cohort-discovery",
    description:
      "Researchers need to know which patients existed in data. Now they can ask and get an answer the same day.",
    image: "/images/bunny-map.png",
  },
  {
    title: "Cross Border Federation: UK and Singapore",
    href: "/impact/sg-uk",
    description:
      "Two countries, one shared ambition: giving researchers access to health data across 10,000 kilometres.",
    image: "/images/sguk.jpg",
  },
  {
    title: "DPUK and ADDI",
    href: "/impact/dpuk-addi",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    image: "/image.jpg",
  },
  {
    title: "OMOP Data Standards: Carrot",
    href: "/impact/omop-carrot",
    description:
      "Before researchers can use health data, someone has to make it speak a common language.",
    image: "/image.jpg",
  },
];

export default function Page() {
  return (
    <>
      {/* Header */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="mt-4 max-w-2xl">Our Impact</h1>
            <p className="mt-6 max-w-xl text-xl text-muted-foreground leading-relaxed">
              Where open infrastructure meets real-world research outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured case study */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <Link href={caseStudies[0].href} className="group block">
              <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-20 md:pr-12 flex flex-col justify-center">
                  <h2 className="mt-4 group-hover:text-brand transition-colors dark:group-hover:text-white">
                    {caseStudies[0].title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {caseStudies[0].description}
                  </p>
                  <span className="mt-6 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Read case study &rarr;
                  </span>
                </div>
                <div className="border-t md:border-t-0 md:border-l">
                  <img
                    src={caseStudies[0].image}
                    alt=""
                    className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                  />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Case study grid */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3">
            {caseStudies.slice(1).map((study, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link
                  href={study.href}
                  className={`group block h-full ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}
                >
                  <div className="py-10 md:py-12 md:px-6 first:md:pl-0 last:md:pr-0 h-full flex flex-col">
                    <img
                      src={study.image}
                      alt=""
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <h3 className="mt-3 group-hover:text-brand transition-colors dark:group-hover:text-white">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">
                      {study.description}
                    </p>
                    <span className="mt-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Read case study &rarr;
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
