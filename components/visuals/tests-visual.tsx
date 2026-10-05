import { Prompt, ToolLine, Visual, Window } from "@/components/visuals/primitives";

function Result({ pass, children }: { pass: boolean; children: string }) {
  return (
    <p className="flex gap-[1ch] pl-[4ch] whitespace-nowrap">
      <span className={pass ? "text-add" : "text-del"}>{pass ? "✓" : "✗"}</span>
      <span className={pass ? "text-mute" : "text-strong"}>{children}</span>
    </p>
  );
}

function Summary({ pass, fail }: { pass: number; fail: number }) {
  return (
    <p className="mt-1 flex gap-[3ch] pl-[4ch]">
      <span className="text-add">{pass} pass</span>
      <span className={fail ? "text-del" : "text-mute"}>{fail} fail</span>
    </p>
  );
}

export function TestsVisual() {
  return (
    <Visual label="Terminal output: a test run with one failing test, an edit to src/currency.ts, then a second run where all 12 tests pass.">
      <Window
        title="~/projects/invoices"
        bodyClassName="grid gap-x-10 gap-y-6 px-5 pt-5 pb-28 sm:px-7 sm:pt-7 lg:grid-cols-2 lg:pr-36 lg:pb-36"
      >
        <div>
          <Prompt>make the currency tests pass</Prompt>
          <ToolLine name="run" arg="bun test tests/currency.test.ts" className="mt-6" />
          <p className="mt-2 pl-[2ch] text-mute">tests/currency.test.ts</p>
          <Result pass>converts between two currencies</Result>
          <Result pass>returns the amount unchanged for the same currency</Result>
          <Result pass={false}>rounds once, after conversion</Result>
          <p className="pl-[8ch] text-mute">
            expected <span className="text-add">91.27</span>
          </p>
          <p className="pl-[8ch] text-mute">
            received <span className="text-del">91.30</span>
          </p>
          <Result pass>converts every amount in a list</Result>
          <Summary pass={11} fail={1} />
        </div>
        <div>
          <ToolLine name="read_file" arg="src/currency.ts" />
          <ToolLine name="edit_file" arg="src/currency.ts" />
          <ToolLine name="run" arg="bun test tests/currency.test.ts" />
          <p className="mt-2 pl-[2ch] text-mute">tests/currency.test.ts</p>
          <Result pass>converts between two currencies</Result>
          <Result pass>returns the amount unchanged for the same currency</Result>
          <Result pass>rounds once, after conversion</Result>
          <Result pass>converts every amount in a list</Result>
          <Summary pass={12} fail={0} />
          <p className="mt-6 text-lime">✓ 12 tests passed</p>
        </div>
      </Window>
    </Visual>
  );
}
