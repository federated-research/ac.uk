import { Timeline } from "@/components/ui/timeline";
import { CheckIcon } from "lucide-react";

function Milestone({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
      <span>{text}</span>
    </div>
  );
}

export function SGTimeline() {
  const data = [
    {
      title: "May 2024",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Healthcare Enhancement And Learning Through
            Worldwide Interoperable Systems and Equity (HEALTHWISE) programme signed.
          </p>
        </div>
      ),
    },
    {
      title: "Nov 2024",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
          MoU signed between NRF, MOH-TRUST, A*STAR,
          and Universities of Nottingham and Swansea.
          </p>
        </div>
      ),
    },
    {
      title: "October 2025",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Singapore-UK Workshop on Cross-border Data Analytics held.
          </p>
        </div>
      ),
    },
    {
      title: "May 2026",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Singapore-UK Showcase on Cross-border Data Analytics held.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
