import { Visual } from "@/components/visuals/primitives";

type Status = "progress" | "todo" | "done";

function StatusIcon({ status }: { status: Status }) {
  if (status === "progress") {
    return (
      <svg viewBox="0 0 14 14" className="size-3.5 shrink-0" fill="none">
        <circle cx="7" cy="7" r="6" stroke="var(--lime)" strokeWidth="1.5" />
        <path d="M7 3.5a3.5 3.5 0 0 1 0 7Z" fill="var(--lime)" />
      </svg>
    );
  }
  if (status === "done") {
    return (
      <svg viewBox="0 0 14 14" className="size-3.5 shrink-0" fill="none">
        <circle cx="7" cy="7" r="6.75" fill="#8a8f98" />
        <path
          d="m4.3 7.2 1.9 1.9 3.6-4"
          stroke="#0f1011"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 14 14" className="size-3.5 shrink-0" fill="none">
      <circle cx="7" cy="7" r="6" stroke="#8a8f98" strokeWidth="1.5" />
    </svg>
  );
}

const groups: { status: Status; label: string; issues: [string, string][] }[] = [
  {
    status: "progress",
    label: "In Progress",
    issues: [["KIV-2", "Long tasks and context compaction"]],
  },
  {
    status: "todo",
    label: "Todo",
    issues: [
      ["KIV-3", "Support for more model providers"],
      ["KIV-4", "Streaming output and interrupting tasks"],
      ["KIV-5", "Codebase awareness"],
      ["KIV-6", "Web interface"],
      ["KIV-7", "Image input"],
      ["KIV-8", "Memory across sessions"],
    ],
  },
  {
    status: "done",
    label: "Done",
    issues: [["KIV-1", "First release"]],
  },
];

export function RoadmapVisual() {
  const summary = groups
    .map((g) => `${g.label}: ${g.issues.map((i) => i.join(" ")).join(", ")}`)
    .join(". ");

  return (
    <Visual label={`Roadmap issue list. ${summary}.`}>
      <div className="overflow-hidden rounded-[14px] border border-border bg-panel pb-20 text-[13px] lg:pb-28">
        <p className="flex h-11 items-center gap-2 border-b border-border px-4 text-strong sm:px-5">
          Kivo <span className="text-faint">›</span> Roadmap
        </p>
        {groups.map((group) => (
          <div key={group.label}>
            <p className="flex h-10 items-center gap-2.5 border-b border-border bg-raised px-4 text-strong sm:px-5">
              <StatusIcon status={group.status} />
              <span className="font-medium">{group.label}</span>
              <span className="text-mute">{group.issues.length}</span>
            </p>
            {group.issues.map(([id, title]) => (
              <p
                key={id}
                className="flex h-11 items-center gap-2.5 border-b border-border px-4 whitespace-nowrap sm:px-5"
              >
                <span className="w-[3.25rem] shrink-0 text-mute">{id}</span>
                <StatusIcon status={group.status} />
                <span className="text-foreground">{title}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </Visual>
  );
}
