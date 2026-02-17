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
        title="Cohort Discovery: Bunny"
        subtitle="Researchers need to know which patients existed in data. Now they can ask and get an answer the same day."
      />

      <Summary>
      Finding patients for clinical research has always taken too long.
      Researchers would send queries by email, wait weeks for a response, and often discover too late that the data wasn't there. 
      Cohort Discovery changes that, and Bunny is the open-source tool that made it work across the NHS at scale. 
      It now runs across 80% of NHS Secure Data Environments and is live on over 40 million patient records at CPRD. 
      </Summary>

      <Metrics
        items={[
          { value: "11", label: "Data Partners Connected" },
          { value: "50m+", label: "Patients available" },
        ]}
      />

      <SectionBreak label="Background" />

      <Prose>
        <p>
        Every clinical trial starts with a question: are there enough patients? 
        It sounds simple. In practice, answering it has consumed months of staff time, involved spreadsheets sent between institutions, and too often delivered the bad news only after a study was already underway.
        Trials fail. Researchers move on. The data was there, but no one could see it in time.
        </p>
        <p>
        Cohort Discovery is the capability that fixes this. 
        Rather than asking data custodians to run bespoke queries on request, 
        it gives researchers a standardised way to ask structured questions across multiple datasets simultaneously, 
        receiving aggregate counts that tell them, quickly and safely, whether a study is feasible.
         The data never moves. Patient privacy is preserved. And the process that once took months can happen in a minute.
        </p>
      </Prose>

      <Figure
        src="/image.jpg"
        caption="Image caption — description of what is shown."
        aspect="16/9"
      />

      <SectionBreak label="Approach" />

      <Prose>
        <p>
        Bunny is the open-source tool built to put that capability inside NHS data environments. 
        Developed through a collaboration between the University of Nottingham and NHS Secure Data Environments under the HDR UK Federated Analytics programme, 
        it was designed with a clear priority: simplicity. 
        A small NHS team should be able to deploy it, own it, and build on it. 
        It was released under an MIT licence with documentation and active support, and SDE teams were brought in early as contributors, not just users.
        </p>
      </Prose>


      <Prose>
        <p>
        The results speak to what happens when infrastructure is built that way. 
        Eight NHS Secure Data Environments adopted Bunny, representing around 80% of the programme, with five contributing back to the codebase. 
        No procurement process drove this. No senior mandate. 
        Teams chose it because it worked and because they had a hand in shaping it. 
        Commercial partners such as BC Platforms, Fitfile, Answer Digital, MetadataWorks joined the same contributor community alongside NHS staff, sustaining the tool well beyond its initial development.
        </p>
      </Prose>

      <Prose>
        <p>
        The landmark deployment is at CPRD, where Bunny is now running in production across data covering more than 40 million patients. 
        That is the scale at which Cohort Discovery becomes genuinely transformative for UK clinical research. 
        Not just a promising pilot, but standard infrastructure, quietly doing its job.
        </p>
      </Prose>

      <Quote
        text="Quote from CPRD."
        attribution="Name, Role at CPRD"
      />

      <Figure src="/image.jpg" aspect="21/9" />

      <SectionBreak />

      <Summary>
        What this demonstrates, beyond the adoption numbers, is that shared infrastructure in health research is achievable. 
        The conditions for it are trust, openness, and a tool that does one thing well. 
        Bunny succeeded because it was built alongside the people who needed it, released in a way that invited ownership, and focused entirely on getting researchers to the data faster. 
        That is the model worth repeating.
      </Summary>

      <Resources
        description="Explore the research, tools, and publications from this programme."
        links={[
          {
            href: "https://healthdatagateway.org/en/about/cohort-discovery",
            title: "Cohort Discovery Tool",
            label: "Website",
          },
          {
            href: "https://bunny.health",
            title: "Bunny website",
            label: "Website",
          },
          {
            href: "https://github.com/health-informatics-uon/hutch-bunny",
            title: "Bunny GitHub repository",
            description: "Source code for Bunny.",
            label: "GitHub",
          },
          {
            href: "https://hutch.health/bunny",
            title: "Bunny technical documentation",
            description:
              "Implementation guides for Data Partners.",
            label: "Documentation",
          },
        ]}
      />
    </>
  );
}
