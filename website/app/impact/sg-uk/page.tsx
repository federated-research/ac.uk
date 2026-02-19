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
import { FadeIn } from "@/components/core/fade-in";
import { SGTimeline } from "@/components/core/sg-timeline";
import { Map } from "@/components/core/map";

export default function Page() {
  return (
    <>
      <CaseStudyHeader
        label="Case Study"
        title="Cross Border Federation: UK and Singapore"
        subtitle="Two countries, one shared ambition: giving researchers access to health data across 10,000 kilometres."
      />

      <Summary>
      Cancer and diabetes don't respect borders. 
      The data that could help researchers understand them is scattered across institutions and countries, each with their own rules, systems, and ways of working. 
      HDR UK and Singapore's National Research Foundation are building the infrastructure to change just that. 
      Connecting secure data environments across the UK and Singapore so researchers can ask questions of data they could never reach before, without that data ever leaving home.
      </Summary>

      <Map />

      <SectionBreak label="Background" />

      <Prose>
        <p>
        Some research questions are too big for any single country to answer alone. 
        Understanding how cancer behaves differently across populations, or why diabetes outcomes vary between communities, requires data at a scale and diversity that no single institution holds. 
        It requires the kind of collaboration that is easy to announce and hard to actually build.
        </p>
        <p>
        The partnership between HDR UK and Singapore's National Research Foundation, formalised in 2024, is attempting exactly that. 
        Spanning 10,000 kilometres and involving institutions across both countries — including Singapore's MOH Office for Healthcare Transformation, GovTech, A*STAR, and universities across the UK 
        — it is a serious attempt to make international health data research work in practice, not just in principle.
        </p>
      </Prose>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-8 md:py-12">
        <FadeIn>
          <SGTimeline />
        </FadeIn>
      </div>

      <SectionBreak label="Approach" />

      <Prose>
        <p>
        The foundation is trust. Both countries operate Trusted Research Environments, secure settings where researchers can apply to analyse sensitive health data without that data ever leaving its home institution. 
        The challenge with these environments, until now, has been that they don't talk to each other. 
        A researcher in Nottingham couldn't combine their analysis with data in Singapore. The datasets existed. The research question existed. The connection didn't.
        </p>
      </Prose>


      <Prose>
        <p>
        The partnership is building that connection. 
        Using open-source tools including Bunny and Five Safes TES, the teams are deploying a federated network that lets distributed analysis happen across borders while each country retains full control over its own data. 
        The first exemplar studies will focus on cancer and diabetes — two conditions where population diversity genuinely changes what the data can tell you, and where larger, more representative datasets could meaningfully change what researchers discover.
        </p>
      </Prose>

      <Figure
        src="/images/sguk.jpg"
        caption="The project team during a recent visit to the MOH Office for Healthcare Transformation (MOHT) in Singapore, collaborating to deploy tools that bridge healthcare innovation between Singapore and the UK. Credit: MOHT"
        aspect="16/9"
      />

      <Prose>
        <p>
        What makes this collaboration unusual is the deliberate investment in the human side. 
        The teams have visited each other, worked through shared governance challenges, and built the kind of understanding that makes technical integration possible. 
        </p>
      </Prose>

      <Quote
        text="Quote from Singapore."
        attribution="Name, Role at Singapore"
      />

      <SectionBreak />

      <Summary>
      We are building a model for what international health research collaboration can look like when it is done openly, carefully, and with the researchers themselves at the centre.
      </Summary>

      <Resources
        description="Read more about the UK and Singapore cross border federation."
        links={[
          {
            href: "https://www.hdruk.ac.uk/news/bridging-10000km-connecting-singapore-and-the-uk-for-better-health-data-research/",
            title: "Bridging 10,000km: Connecting Singapore and the UK for Better Health Data Research",
            label: "Website",
          }
        ]}
      />
    </>
  );
}
