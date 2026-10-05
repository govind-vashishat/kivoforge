import { Section } from "@/components/section";
import { site } from "@/lib/site";

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-[8px] border border-border bg-base px-4 py-3 font-mono text-sm text-platinum">
      <code>
        <span className="text-steel select-none">$ </span>
        {children}
      </code>
    </pre>
  );
}

export function QuickStart() {
  return (
    <Section id="quick-start" title="Quick start">
      <ol className="max-w-[760px] space-y-7">
        <li className="grid gap-3 sm:grid-cols-[2rem_1fr]">
          <span className="font-mono text-sm leading-6 text-steel" aria-hidden="true">
            1
          </span>
          <div className="min-w-0 space-y-3">
            <h3 className="font-medium text-white">Install</h3>
            <CodeBlock>{site.install}</CodeBlock>
          </div>
        </li>
        <li className="grid gap-3 sm:grid-cols-[2rem_1fr]">
          <span className="font-mono text-sm leading-6 text-steel" aria-hidden="true">
            2
          </span>
          <div className="min-w-0 space-y-3">
            <h3 className="font-medium text-white">Set your API key</h3>
            <CodeBlock>export OPENAI_API_KEY=...</CodeBlock>
          </div>
        </li>
        <li className="grid gap-3 sm:grid-cols-[2rem_1fr]">
          <span className="font-mono text-sm leading-6 text-steel" aria-hidden="true">
            3
          </span>
          <div className="min-w-0 space-y-3">
            <h3 className="font-medium text-white">Run it in your project</h3>
            <CodeBlock>{'kivo "fix the failing test in src/invoice.ts"'}</CodeBlock>
            <p className="text-sm text-silver">
              or just{" "}
              <code className="rounded-[4px] border border-border bg-base px-1.5 py-0.5 font-mono text-[13px] text-platinum">
                kivo
              </code>{" "}
              to start a session
            </p>
          </div>
        </li>
      </ol>
    </Section>
  );
}
