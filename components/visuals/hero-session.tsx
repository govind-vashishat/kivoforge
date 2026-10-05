import { DiffStat, UnifiedDiff, type DiffLine } from "@/components/visuals/code";
import { Prompt, ToolLine, Visual, Window } from "@/components/visuals/primitives";

// [tool, argument, start (s), run time (s)]
const steps = [
  ["read_file", "src/invoice.ts", 1.0, 0.8],
  ["read_file", "src/currency.ts", 1.8, 0.8],
  ["edit_file", "src/currency.ts", 2.6, 1.2],
  ["run", "bun test", 3.8, 1.6],
] as const;

const diff: DiffLine[] = [
  { t: "ctx", o: 1, n: 1, code: 'import { getRate } from "./rates";' },
  { t: "ctx", o: 2, n: 2, code: 'import type { Currency } from "./types";' },
  { t: "ctx", o: 3, n: 3, code: "" },
  { t: "ctx", o: 4, n: 4, code: "const roundToCents = (value: number) =>" },
  { t: "ctx", o: 5, n: 5, code: "  Math.round(value * 100) / 100;" },
  { t: "ctx", o: 6, n: 6, code: "" },
  { t: "ctx", o: 7, n: 7, code: "export function convert(amount: number, from: Currency, to: Currency) {" },
  { t: "ctx", o: 8, n: 8, code: "  if (from === to) return amount;" },
  { t: "ctx", o: 9, n: 9, code: "  const rate = getRate(from, to);" },
  { t: "del", o: 10, code: "  const rounded = roundToCents(amount);" },
  { t: "del", o: 11, code: "  return rounded * rate;" },
  { t: "add", n: 10, code: "  // Round once, after conversion." },
  { t: "add", n: 11, code: "  const converted = amount * rate;" },
  { t: "add", n: 12, code: "  return roundToCents(converted);" },
  { t: "ctx", o: 12, n: 13, code: "}" },
  { t: "ctx", o: 13, n: 14, code: "" },
  { t: "ctx", o: 14, n: 15, code: "export function convertAll(amounts: number[], from: Currency, to: Currency) {" },
  { t: "ctx", o: 15, n: 16, code: "  return amounts.map((amount) => convert(amount, from, to));" },
  { t: "ctx", o: 16, n: 17, code: "}" },
];

const at = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export function HeroSession() {
  return (
    <Visual
      label="A Kivo session in a terminal: Kivo reads two files, edits src/currency.ts, runs the tests, and reports that 12 tests passed. A panel beside it shows the diff."
      className="relative lg:h-[620px]"
    >
      <Window
        title="~/projects/invoices"
        className="lg:absolute lg:inset-0"
        bodyClassName="px-5 pt-5 pb-20 sm:px-7 sm:pt-7 lg:max-w-[54%]"
      >
        <Prompt className="seq" style={at(0.2)}>
          fix the failing currency conversion test
        </Prompt>
        <div className="mt-6">
          {steps.map(([name, arg, start, run], i) => (
            <ToolLine
              key={i}
              name={name}
              arg={arg}
              className="seq"
              dotClassName="seq-dot"
              style={{ ...at(start), "--run": `${run}s` } as React.CSSProperties}
            />
          ))}
        </div>
        <p className="seq mt-6 text-lime" style={at(5.4)}>
          ✓ 12 tests passed
        </p>
        <p className="seq mt-6 max-w-[58ch] text-strong" style={at(5.8)}>
          Fixed rounding in convert(): amounts were rounded before applying the
          exchange rate. Rounding now happens once, after conversion.
        </p>
        <p className="seq mt-6 flex gap-[1ch]" style={at(6.4)}>
          <span className="text-mute">❯</span>
          <span className="h-[1.15em] w-[0.6em] translate-y-[0.3em] bg-mute" />
        </p>
      </Window>

      <div
        className="seq relative -mt-12 ml-8 w-[620px] overflow-hidden rounded-[12px] border border-border bg-raised shadow-2xl shadow-black/70 sm:ml-24 lg:absolute lg:top-[76px] lg:right-[-40px] lg:mt-0 lg:ml-0 lg:h-[600px] lg:w-[50%]"
        style={at(3.8)}
      >
        <div className="flex h-11 items-center justify-between border-b border-border px-4">
          <p className="font-sans text-[13px] text-strong">Changed 1 file</p>
          <span className="lg:mr-36">
            <DiffStat added={3} removed={2} />
          </span>
        </div>
        <p className="border-b border-border px-4 py-2 font-mono text-xs text-mute">
          src/currency.ts
        </p>
        <div className="font-mono text-xs leading-6 sm:text-[13px]">
          <UnifiedDiff lines={diff} />
        </div>
      </div>
    </Visual>
  );
}
