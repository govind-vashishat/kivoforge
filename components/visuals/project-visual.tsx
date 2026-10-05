import {
  FileTree,
  Prompt,
  ToolLine,
  Visual,
  Window,
  type TreeItem,
} from "@/components/visuals/primitives";

const tree: TreeItem[] = [
  { name: "src", depth: 0, dir: true },
  { name: "currency.ts", depth: 1 },
  { name: "format.ts", depth: 1 },
  { name: "invoice.ts", depth: 1 },
  { name: "rates.ts", depth: 1, active: true },
  { name: "types.ts", depth: 1 },
  { name: "tests", depth: 0, dir: true },
  { name: "currency.test.ts", depth: 1 },
  { name: "invoice.test.ts", depth: 1 },
  { name: "bun.lock", depth: 0 },
  { name: "package.json", depth: 0 },
  { name: "README.md", depth: 0 },
  { name: "tsconfig.json", depth: 0 },
];

export function ProjectVisual() {
  return (
    <Visual
      label="A project file tree with src, tests and package.json, and a terminal where Kivo searches the code and reads several files."
      className="relative h-[470px] lg:h-[540px]"
    >
      <div className="absolute inset-y-0 left-0 w-[300px] overflow-hidden rounded-[14px] border border-border bg-panel sm:w-[440px]">
        <p className="flex h-10 items-center border-b border-border px-4 font-mono text-xs text-mute">
          invoices
        </p>
        <div className="py-2">
          <FileTree items={tree} />
        </div>
      </div>

      <Window
        title="~/projects/invoices"
        className="absolute top-[150px] right-[-240px] bottom-[-40px] left-[56px] bg-raised shadow-2xl shadow-black/70 sm:right-0 sm:left-[240px] lg:top-[72px] lg:left-[300px]"
        bodyClassName="p-5 sm:p-7"
      >
        <Prompt>why is the EUR invoice total off by a cent?</Prompt>
        <div className="mt-6">
          <ToolLine name="run" arg={'grep -rn "convert(" src tests'} />
          <ToolLine name="read_file" arg="src/invoice.ts" />
          <ToolLine name="read_file" arg="src/currency.ts" />
          <ToolLine name="read_file" arg="tests/invoice.test.ts" />
          <ToolLine name="read_file" arg="src/rates.ts" running />
        </div>
      </Window>
    </Visual>
  );
}
