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

export function Journey() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Milestone text="Milestone description" />
          <Milestone text="Milestone description" />
          <Milestone text="Milestone description" />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Milestone text="Milestone description" />
          <Milestone text="Milestone description" />
          <Milestone text="Milestone description" />
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Milestone text="Milestone description" />
          <Milestone text="Milestone description" />
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
