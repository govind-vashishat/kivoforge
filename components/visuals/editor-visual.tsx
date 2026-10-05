import { Code } from "@/components/visuals/code";
import { FileTree, Visual, Window, type TreeItem } from "@/components/visuals/primitives";

const tree: TreeItem[] = [
  { name: "src", depth: 0, dir: true },
  { name: "agent", depth: 1, dir: true },
  { name: "context.ts", depth: 2 },
  { name: "events.ts", depth: 2 },
  { name: "loop.ts", depth: 2, active: true },
  { name: "tools.ts", depth: 2 },
  { name: "cli", depth: 1, dir: true },
  { name: "index.ts", depth: 2 },
  { name: "render.ts", depth: 2 },
  { name: "session.ts", depth: 2 },
];

// An illustration of the loop's shape, not a copy of the real source file.
const source = `// Simplified for this page.
import { generateText, type LanguageModel } from "ai";
import type { ContextManager } from "./context";
import type { AgentEvent } from "./events";
import { runTool, tools } from "./tools";

export async function* runAgent(
  task: string,
  context: ContextManager,
  model: LanguageModel,
): AsyncGenerator<AgentEvent> {
  context.addUser(task);

  while (true) {
    const reply = await generateText({ model, messages: context.messages(), tools });
    context.addAssistant(reply);
    yield { type: "message", text: reply.text };

    if (reply.toolCalls.length === 0) return;

    for (const call of reply.toolCalls) {
      yield { type: "tool_start", call };
      const result = await runTool(call);
      yield { type: "tool_end", call, result };
      context.addToolResult(call, result);
    }
  }
}`.split("\n");

export function EditorVisual() {
  return (
    <Visual label="A code editor showing the src/agent and src/cli folders, with loop.ts open on a short agent loop: call the model, run the tools it asks for, emit events, repeat.">
      <Window title="kivo" bodyClassName="flex">
        <div className="hidden w-[230px] shrink-0 border-r border-border py-3 sm:block">
          <FileTree items={tree} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex h-10 border-b border-border">
            <p className="flex items-center border-r border-border bg-raised px-4 text-strong">
              loop.ts
            </p>
            <p className="flex items-center border-r border-border px-4 text-mute">
              events.ts
            </p>
          </div>
          <div className="overflow-hidden pt-3 pb-20 lg:pb-28">
            {source.map((line, i) => (
              <div key={i} className="flex whitespace-pre">
                <span className="w-[5ch] shrink-0 pr-[2ch] text-right text-faint">
                  {i + 1}
                </span>
                <span className="text-strong">
                  <Code>{line || " "}</Code>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Window>
    </Visual>
  );
}
