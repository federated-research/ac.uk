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
        title="Case study title headline"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <Summary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Summary>

      <Metrics
        items={[
          { value: "00", label: "Metric label" },
          { value: "00", label: "Metric label" },
          { value: "00", label: "Metric label" },
        ]}
      />

      <SectionBreak label="Background" />

      <Prose>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </Prose>

      <Quote
        text="Quote placeholder that captures a key insight or testimonial from a participant in the programme."
        attribution="Name, Role at Institution"
      />

      <Prose>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </Prose>

      <SectionBreak label="Outcomes" />

      <Metrics
        items={[
          { value: "00", label: "Metric label" },
          { value: "00", label: "Metric label" },
          { value: "00%", label: "Metric label" },
          { value: "00", label: "Metric label" },
        ]}
      />

      <Prose>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </Prose>

      <Figure src="/image.jpg" aspect="21/9" />

      <SectionBreak />

      <Summary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Summary>

      <Resources
        description="Explore the research, tools, and publications from this programme."
        links={[
          {
            href: "https://example.com",
            title: "Publication title in journal",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            label: "Paper",
          },
          {
            href: "https://example.com",
            title: "Project repository",
            description: "Source code and documentation for the platform.",
            label: "GitHub",
          },
          {
            href: "https://example.com",
            title: "Programme announcement blog post",
            label: "Blog",
          },
          {
            href: "https://example.com",
            title: "Technical documentation",
            description:
              "Implementation guides and API reference for collaborators.",
            label: "Docs",
          },
        ]}
      />
    </>
  );
}
