import { SectionHeader } from "@/components/core/section-header";
import { FadeIn } from "@/components/core/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function Page() {

  const cards = [
    {
      title: "Card headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.google.com",
    },
    {
      title: "Card headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.google.com",
    },
    {
      title: "Card headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.google.com",
    },
]
  return (
    <div>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h1>Federated Research Community Group</h1>
            <Button asChild size="lg" className="text-sm mt-20">
                <Link href="https://www.google.com/url?q=https://forms.office.com/e/9mZ7tVu9Lh&sa=D&source=editors&ust=1776184444929933&usg=AOvVaw3MmVhLfd-KQFN6ptMDMtq3">Join the Group</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl max-w-3xl">
              The Federated Research Community Group brings together the public, researchers, and industry to build trust, transparency, and collaboration in federated research.
              The group will:

            </p>

          </FadeIn>
          <div className="mt-12 space-y-8">
            {[
              { number: "01", title: "Drive collaboration on the safe use of sensitive, cross-sector data." },
              { number: "02", title: "Promote engagement and shared understanding across the ecosystem and community." },
              { number: "03", title: "Inform the needs and requirements for solutions that have utility, scalability, and flexibility." },
            ].map((value, i) => (
              <FadeIn key={value.number} delay={i * 0.05}>
                <div className="flex gap-6 border-t pt-8 md:gap-12">
                  <span className="text-3xl font-bold text-muted-foreground/30">
                    {value.number}
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Resources"
              description="These resources capture concepts and resources  to support shared understanding in discussions related federation as part of research data infrastructure."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border bg-card p-8 md:p-10">
                  <h3>{card.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    {card.description}
                  </p>
                  <Button asChild className="mt-4">
                    <Link href={card.link} target="_blank">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      

    </ div>
  );
}