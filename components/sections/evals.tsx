import { Section } from "@/components/section";
import { TerminalWindow } from "@/components/terminal-window";

// TODO: replace with the real sandbox list and results from the eval runner.
// These names are placeholders, not actual Kivo sandboxes.
const sandboxes = [
  "invoice-currency",
  "pagination-off-by-one",
  "cache-race",
  "timezone-parse",
  "cli-flag-parsing",
];

export function Evals() {
  return (
    <Section
      id="evals"
      title="Evals"
      lead="Kivo is tested against a set of small projects, each with a real bug and a test that checks the fix. Every change to Kivo is measured against this suite: whether the tasks pass, how many steps they take, and how many tokens they use."
    >
      <TerminalWindow title="eval run · sample layout" className="max-w-[760px]">
        <ul>
          {sandboxes.map((name) => (
            <li key={name} className="flex gap-[1ch]">
              <span className="text-lime">
                ✓<span className="sr-only"> pass</span>
              </span>
              <span className="flex-1 text-platinum">{name}</span>
              <span className="hidden text-slate sm:inline">steps TODO</span>
              <span className="hidden pl-[2ch] text-slate sm:inline">
                tokens TODO
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-border pt-4">
          <p className="flex gap-[1ch]">
            <span className="text-platinum">pass rate</span>
            <span className="text-steel">TODO: real eval numbers</span>
          </p>
          <p className="text-steel">
            TODO: real numbers from the eval runner (tokens, steps)
          </p>
        </div>
      </TerminalWindow>
      <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-steel">
        The project names and results shown here are placeholders. They will be
        replaced with output from the eval runner.
      </p>
    </Section>
  );
}
