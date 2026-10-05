import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

function Node({
  title,
  planned,
  className,
}: {
  title: string;
  planned?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[12px] border border-border bg-base px-5 py-4",
        planned && "border-dashed bg-transparent",
        className,
      )}
    >
      <p className={cn("text-sm font-medium", planned ? "text-steel" : "text-white")}>
        {title}
        {planned ? (
          <span className="font-mono text-xs font-normal"> (planned)</span>
        ) : null}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <span className="font-mono text-slate select-none" aria-hidden="true">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </span>
  );
}

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      lead="Kivo is a small TypeScript codebase with no agent framework. The core agent loop sends your task and the conversation to the model, runs the tools the model asks for, and repeats until the task is finished. The core reports everything it does as events, so the terminal interface, the eval runner, and a future web interface all use the same agent."
    >
      <div
        role="img"
        aria-label="Diagram: the agent core emits events, which are used by the terminal, the eval runner, and a planned web UI."
        className="flex flex-col items-stretch gap-3 rounded-[14px] border border-border p-5 text-center sm:p-7 md:flex-row md:items-center md:gap-5 md:text-left"
      >
        <Node title="Agent core" className="md:flex-1" />
        <Arrow />
        <Node title="Events" className="md:flex-1" />
        <Arrow />
        <div className="flex flex-col gap-3 md:flex-1">
          <Node title="Terminal" />
          <Node title="Eval runner" />
          <Node title="Web UI" planned />
        </div>
      </div>
    </Section>
  );
}
