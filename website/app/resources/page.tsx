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

      <section className="50 py- md:py-28">
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