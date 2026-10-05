import { Badge } from "@/components/ui/badge";
import { Visual, Window } from "@/components/visuals/primitives";

// TODO: replace with the real sandbox names and numbers from the eval runner.
const sandboxes = [
  "01-currency-rounding",
  "02-pagination-off-by-one",
  "03-missing-await",
  "04-stale-cache-key",
];

const cols = "grid grid-cols-[176px_76px_70px_110px_110px] items-center px-5 sm:grid-cols-[230px_110px_110px_150px_150px] sm:px-7 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_0.6fr]";

function Todo() {
  return <span className="text-faint">TODO</span>;
}

export function EvalsVisual() {
  return (
    <Visual label="Eval runner output: a table with columns Sandbox, Result, Steps, Peak tokens and Total tokens. Sandboxes 01 to 04 are marked pass. The numeric cells are placeholders.">
      <Window title="eval run" bodyClassName="pb-24 lg:pb-32">
        <div className="min-w-[560px] sm:min-w-[760px]">
          <div className={`${cols} h-10 border-b border-border font-sans text-xs text-mute`}>
            <span>Sandbox</span>
            <span>Result</span>
            <span>Steps</span>
            <span>Peak tokens</span>
            <span>Total tokens</span>
          </div>
          {sandboxes.map((name) => (
            <div key={name} className={`${cols} h-12 border-b border-border`}>
              <span className="text-strong">{name}</span>
              <span>
                <Badge
                  variant="outline"
                  className="gap-1.5 border-lime/25 bg-lime/10 text-lime"
                >
                  <span className="size-1.5 rounded-full bg-lime" />
                  pass
                </Badge>
              </span>
              <Todo />
              <Todo />
              <Todo />
            </div>
          ))}
          <div className={`${cols} h-12`}>
            <span className="text-mute">Pass rate</span>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </div>
        </div>
      </Window>
    </Visual>
  );
}
