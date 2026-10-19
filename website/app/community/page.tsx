import { SectionHeader } from "@/components/core/section-header";
import { FadeIn } from "@/components/core/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function Page() {

  const cards = [
    {
      title: "TRE-FX - What is our approach to Federation",
      description: "An explainer video to set out the key concepts of the federated approaches from the DARE UK TRE-FX programme",
      link: "https://www.youtube.com/watch?v=U3QKFv5Eexc",
    },
    {
      title: "Secure Data Environments (SDEs) Public Explainer & Survey",
      description: "Co-designed public animation and detailed explainer on SDEs/TREs, plus a survey of the UK's main health SDEs covering funding, data held and outputs",
      link: "https://www.understandingpatientdata.org.uk/secure-data-environments",
    },
    {
      title: "Five Safes Framework",
      description: "Foundational governance framework (Safe People, Projects, Settings, Data, Outputs) underpinning TRE access and federation governance",
      link: "https://ukdataservice.ac.uk/help/secure-lab/what-is-the-five-safes-framework/",
    },
]
  return (
    <div>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h1>Federated Research Community Group</h1>
            <Button asChild size="lg" className="text-sm mt-20">
                <Link href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=7qe9Z4D970GskTWEGCkKHlMNjmFrW3lHsq4prbFVNKBUQTlVMjJaTEtBQkdaRlVVREg1SjY0NDFJSC4u&route=shorturl">Join the Group</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl max-w-3xl">
              Objectives
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