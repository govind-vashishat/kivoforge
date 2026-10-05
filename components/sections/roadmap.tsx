import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

const milestones = [
  { version: "v0.2", title: "Long tasks and context compaction", current: true },
  { version: "v0.3", title: "Support for more model providers" },
  { version: "v0.4", title: "Streaming output and interrupting tasks" },
  { version: "v0.5", title: "Codebase awareness" },
  { version: "v0.6", title: "Web interface" },
  { version: "v0.7", title: "Image input" },
  { version: "v0.8", title: "Memory across sessions" },
];

export function Roadmap() {
  return (
    <Section id="roadmap" title="Roadmap">
      <ol className="relative max-w-[560px]">
        <span
          className="absolute top-3 bottom-3 left-[4.5px] w-px bg-border"
          aria-hidden="true"
        />
        {milestones.map((m) => (
          <li
            key={m.version}
            aria-current={m.current ? "step" : undefined}
            className="relative flex items-baseline gap-5 py-3 pl-8"
          >
            <span
              className={cn(
                "absolute top-[1.15rem] left-0 size-2.5 rounded-full",
                m.current ? "bg-white" : "border border-slate bg-black",
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "w-10 shrink-0 font-mono text-sm",
                m.current ? "text-platinum" : "text-slate",
              )}
            >
              {m.version}
            </span>
            <span className={cn(m.current ? "font-medium text-white" : "text-steel")}>
              {m.title}
              {m.current ? (
                <span className="font-normal text-silver"> (in progress)</span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
