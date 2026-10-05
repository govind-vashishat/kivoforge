import { cn } from "@/lib/utils";

const TOKEN =
  /(\/\/.*$|"[^"]*"|`[^`]*`|\b(?:import|export|from|const|let|return|function|async|await|for|of|while|if|type|true|yield)\b)/g;

/** Greyscale syntax highlighting: keywords brighter, strings and comments dimmer. */
export function Code({ children }: { children: string }) {
  return (
    <>
      {children.split(TOKEN).map((part, i) => {
        if (i % 2 === 0) return part;
        const tone = part.startsWith("//")
          ? "text-faint"
          : part.startsWith('"') || part.startsWith("`")
            ? "text-mute"
            : "text-foreground";
        return (
          <span key={i} className={tone}>
            {part}
          </span>
        );
      })}
    </>
  );
}

export type DiffLine = {
  t: "ctx" | "add" | "del";
  /** Line number in the old file. */
  o?: number;
  /** Line number in the new file. */
  n?: number;
  code: string;
};

const rowTone = {
  ctx: "",
  add: "bg-add/12",
  del: "bg-del/12",
};
const signTone = {
  ctx: "text-faint",
  add: "text-add",
  del: "text-del",
};
const sign = { ctx: " ", add: "+", del: "−" };

export function UnifiedDiff({ lines }: { lines: DiffLine[] }) {
  return (
    <div className="py-2">
      {lines.map((line, i) => (
        <div key={i} className={cn("flex whitespace-pre", rowTone[line.t])}>
          <span className="w-[4ch] shrink-0 text-right text-faint">{line.o ?? ""}</span>
          <span className="w-[4ch] shrink-0 text-right text-faint">{line.n ?? ""}</span>
          <span className={cn("w-[3ch] shrink-0 text-center", signTone[line.t])}>
            {sign[line.t]}
          </span>
          <span className="text-strong">
            <Code>{line.code}</Code>
          </span>
        </div>
      ))}
    </div>
  );
}

/** One side of a side-by-side diff. `null` is an empty slot opposite a changed line. */
export function DiffSide({
  lines,
  className,
}: {
  lines: (Omit<DiffLine, "o"> | null)[];
  className?: string;
}) {
  return (
    <div className={cn("min-w-0 overflow-hidden py-2", className)}>
      {lines.map((line, i) =>
        line ? (
          <div key={i} className={cn("flex whitespace-pre", rowTone[line.t])}>
            <span className="w-[4ch] shrink-0 text-right text-faint">{line.n}</span>
            <span className={cn("w-[3ch] shrink-0 text-center", signTone[line.t])}>
              {sign[line.t]}
            </span>
            <span className="text-strong">
              <Code>{line.code}</Code>
            </span>
          </div>
        ) : (
          <div key={i} className="bg-raised/60 whitespace-pre"> </div>
        ),
      )}
    </div>
  );
}

export function DiffStat({ added, removed }: { added: number; removed: number }) {
  return (
    <span className="font-mono text-xs">
      <span className="text-add">+{added}</span>{" "}
      <span className="text-del">−{removed}</span>
    </span>
  );
}
