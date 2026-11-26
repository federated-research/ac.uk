import Link from "next/link";
import { SectionHeader } from "@/components/core/section-header";
import { FadeIn } from "@/components/core/fade-in";
import { Button } from "@/components/ui/button";

const outputs = [
  {
    title: "Exploring space and place to facilitate engagement in data research",
    description: "Reflections on the Federation Voices Pilot at the PEDRI Forum 2026.",
    link: "https://dareuk.org.uk/news-and-events/exploring-space-and-place-to-facilitate-engagement-in-data-research/",
  },
{
    title: "Federation Atlas GitHub repository",
    description: "The Federation Atlas is a federated data ontology mapping that describes the relationships between different datasets and their attributes.",
    link: "https://github.com/lsc-sde/federated-analytics-ontology",
  },
  {
    title: "FOCUS-5 PPIE Output Report: Federated Data Ontology Mapping, the Federation Atlas",
    description: "This report describes the development of a federated data ontology mapping, the Federation Atlas",
    link: "https://zenodo.org/records/19368599",
  },
    {
    title: "Federation Voices Pilot Overview",
    description: "This report describes how the Federation Voices Pilot explores how to engage the public in federated research.",
    link: "https://drive.google.com/file/d/1a5ghP4x1LivzIGwk5qh5WojDZoqpyPB3/view?usp=drive_link",
  },
      {
    title: "Federation themes",
    description: "Awaiting upload",
    link: "https://beta.federated-research.ac.uk/",
  },
{
    title: "DARE UK Community Day",
    description: "Awaiting upload",
    link: "https://beta.federated-research.ac.uk/",
  },
      {
    title: "UK TRE Community Conference slides",
    description: "Awaiting upload",
    link: "https://beta.federated-research.ac.uk/",
  },
      {
    title: "DARE UK Community Group launch",
    description: "Awaiting upload",
    link: "https://beta.federated-research.ac.uk/",
  },
];

export default function Page() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Outputs"
            description="Reports, publications and other outputs from the Federated Research Community Group."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {outputs.map((o, i) => (
            <FadeIn key={o.title} delay={i * 0.1}>
              <div className="border bg-card p-8 md:p-10">
                <h3>{o.title}</h3>
                <p className="mt-3 text-muted-foreground">{o.description}</p>
                <Button asChild className="mt-4">
                  <Link href={o.link} target="_blank" rel="noopener noreferrer">
                    View
                  </Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}