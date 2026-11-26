import { SectionHeader } from "@/components/core/section-header";
import { FadeIn } from "@/components/core/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const cards = [
     {
      tag: "Video",
      title: "Patient data saves lives: The bigger picture",
      description: "Produced by Understanding Patient Data, this video explains how patient data can make a difference in healthcare.",
      link: "https://www.youtube.com/watch?v=fJ2hyXCOOyQ",
    },
    {
      tag: "Video",
      title: "Bringing Data Together Safely",
      description: "DARE UK TREvolution describes how data is used in research and the role federation has in connecting multiple datasets",
      link: "https://youtu.be/AX_4BpurIBc?si=bKPXjIysCvLzPjNH",
    },
    {
      tag: "Framework",
      title: "Five Safes Framework",
      description: "Foundational governance framework focussed on Safe; People, Projects, Settings, Data, Outputs, that underpin TREs and federation",
      link: "https://ukdataservice.ac.uk/help/secure-lab/what-is-the-five-safes-framework/",
    },
    {
      tag: "Video",
      title: "How is data kept secure?",
      description: "Produced by Resarch Data Scotland, this video explains how data is kept secure in TREs.",
      link: "https://youtu.be/NwDGdaGoHrA?si=13tMYCcu5ekuf9IH",
    },
    {
      tag: "Video",
      title: "Secure Data Environments explained",
      description: "Explainer on Secure Data Environments and Trusted Research Environments",
      link: "https://www.understandingpatientdata.org.uk/secure-data-environments",
    },

    {
      tag: "Article",
      title: "What are Trusted Research Environments?",
      description: "Breakdown of what TREs are, how they work, and why they are important for research",
      link: "https://www.researchdata.scot/engage-and-learn/data-explainers/what-are-trusted-research-environments/",
    },
    {
      tag: "Video",
      title: "SAFER for The Public",
      description: "Designed for the public, this describes how federation enables large-scale, interdisciplinary research across disparate TREs.",
      link: "https://www.youtube.com/watch?v=vUKlmrQU5HU",
    },
    {
      tag: "Video",
      title: "SAFER for Data Owners",
      description: "Designed for data owners, this describes how federation enables large-scale, interdisciplinary research across disparate TREs.",
      link: "https://www.youtube.com/watch?v=lsYMEZvixdw",
    },
      {
      tag: "Video",
      title: "SAFER for Researchers",
      description: "Designed for researchers, this describes how federation enables large-scale, interdisciplinary research across disparate TREs.",
      link: "https://www.youtube.com/watch?v=FP8QdPYANKY",
    },
    {
      tag: "Specification",
      title: "Introduction to the SATRE Project",
      description: "A specification for implementing TREs, developed by the community.",
      link: "https://www.youtube.com/watch?v=auExNHEGwcc",
    },
    {
      tag: "Glossary",
      title: "DATAMIND Glossary",
      description: "Glossary of terms related to data science, AI, and machine learning, developed by the DATAMIND project.",
      link: "https://datamind.org.uk/datamind-glossary/",
    },
      {
      tag: "Glossary",
      title: "UK TRE Glossary",
      description: "Community glossary of TRE terminology across organisations to supportshared language",
      link: "https://ukdataservice.ac.uk/help/secure-lab/what-is-the-five-safes-framework/",
    },
  ];

  return (
    <div>
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Resources"
              description="These resources support and promote shared understanding of key concepts related to federation."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border bg-card p-8 md:p-10">
                  <Badge variant="outline" className="mb-4">
                    {card.tag}
                  </Badge>
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
    </div>
  );
}