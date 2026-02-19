import {
  CaseStudyHeader,
  Metrics,
  Summary,
  SectionBreak,
  Prose,
  Figure,
  Quote,
  Resources,
} from "@/components/core/case-study";

export default function Page() {
  return (
    <>
      <CaseStudyHeader
        label="Case Study"
        title="OMOP Data Standards: Carrot"
        subtitle="Before researchers can use health data, someone has to make it speak a common language."
      />

      <Summary>
        Health datais collected in dozens of different formats, with different terminologies, 
        different structures, and different local conventions. 
        Before any of that data can be combined or compared across institutions, it has to be standardised.
         Carrot is the open-source toolset that makes that process fast, consistent, and safe, 
         mapping datasets to the OMOP common data model without the mapping team ever seeing the underlying patient data. 
         Across 15 data partners and 55 datasets, it is turning fragmented health data into a resource researchers can actually use.
      </Summary>

      <Metrics
        items={[
          { value: "15", label: "Data Partners Connected" },
          { value: "55", label: "Datasets Standardised" },
          { value: "10", label: "National Collaborations" },
        ]}
      />

      <SectionBreak label="Background" />

      <Prose>
        <p>
        Health data is everywhere. 
        Collected in hospitals, GP surgeries, biobanks, and research cohorts across the country, it represents an extraordinary potential resource for research. 
        But collected does not mean usable. 
        Every institution records data in its own way, using its own terminology, its own schema, its own local conventions built up over years of clinical practice. 
        A diagnosis coded one way in Nottingham may be recorded entirely differently in Dundee. 
        Before a researcher can ask a question that spans both, someone has to reconcile them.
        </p>
        <p>
        That reconciliation process is called data standardisation, 
        and for most organisations it has been slow, expensive, and heavily dependent on bringing external OMOP experts into direct contact with sensitive patient data. 
        Legal agreements, data sharing protocols, and governance processes that can take months, and still carry the risk that the mapping varies depending on who did it and when.
        </p>
      </Prose>

      <Figure
        src="/image.jpg"
        caption="Image caption — description of what is shown."
        aspect="16/9"
      />

      <Prose>
        <p>
        Carrot is the tool that a growing network of UK institutions has chosen to do it. 
        Developed at the University of Nottingham and used by Edinburgh, Dundee, Swansea, Cambridge, East Midlands SDE, Nottingham, Public Health Scotland, it provides a shared, standardised approach to mapping health data to the OMOP common data model. 
        That geographic and institutional breadth is significant. 
        When institutions across all four nations are working from the same tooling and the same mapping rules, the data they produce becomes genuinely comparable. 
        Research that would otherwise require years of bespoke harmonisation work becomes tractable.
        </p>
        <p>
        The projects now running on Carrot-standardised data reflect the ambition this enables. 
        CO-CONNECT used it to bring together COVID-19 cohorts at national scale during the pandemic. 
        Alleviate is using it to build a UK-wide pain data hub. 
        The East Midlands SDE has adopted it to prepare data for cohort discovery.
         International partnerships, including the Singapore collaboration, are deploying it to establish a shared data foundation across borders.
        </p>
      </Prose>

      <Quote
        text="Quote from a Carroter."
        attribution="Name, Role at Institution"
      />

      <SectionBreak />

      <Summary>
      What Carrot represents, at the level that matters for UK health data strategy, is proof that shared open infrastructure can work in practice across a diverse and complex research landscape. 
      Institutions with different systems, different governance frameworks, and different local priorities have converged on a common approach. 
      The result is a national standardisation capability that belongs to everyone who uses it, and grows more valuable with every dataset added.
      </Summary>

      <Resources
        description="Read more about Carrot."
        links={[
          {
            href: "https://carrot.ac.uk",
            title: "Carrot website",
            label: "Website",
          },
          {
            href: "https://github.com/health-informatics-uon/carrot",
            title: "Carrot GitHub repository",
            label: "GitHub",
          },
          {
            href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12004012/",
            title: "Conversion of Sensitive Data to the Observational Medical Outcomes Partnership Common Data Model: Protocol for the Development and Use of Carrot",
            label: "Paper",
          },
          {
            href: "https://carrot.ac.uk/documentation",
            title: "Technical documentation",
            label: "Documentation",
          },
        ]}
      />
    </>
  );
}
