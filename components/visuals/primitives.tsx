import { ChevronDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

/** Wrapper for a product visual. Decorative: the section text describes it. */
export function Visual({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div role="img" aria-label={label} className={cn("visual-fade", className)}>
      <div aria-hidden="true" className="h-full select-none">
        {children}
      </div>
    </div>
  );
}

export function Window({
  title,
  className,
  bodyClassName,
  children,
}: {
  title: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border border-border bg-panel",
        className,
      )}
    >
      <div className="relative flex h-10 items-center border-b border-border px-4">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#2c2e33]" />
          <span className="size-2.5 rounded-full bg-[#2c2e33]" />
          <span className="size-2.5 rounded-full bg-[#2c2e33]" />
        </div>
        <p className="absolute inset-x-0 text-center font-mono text-xs text-mute">
          {title}
        </p>
      </div>
      <div className={cn("font-mono text-xs leading-6 sm:text-[13px]", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}

export function Prompt({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p className={cn("flex gap-[1ch] text-foreground", className)} style={style}>
      <span className="text-mute">❯</span>
      <span>{children}</span>
    </p>
  );
}

/** One tool call. The dot is lime while running and grey when done. */
export function ToolLine({
  name,
  arg,
  running,
  className,
  style,
  dotClassName,
}: {
  name: string;
  arg: string;
  running?: boolean;
  className?: string;
  style?: React.CSSProperties;
  dotClassName?: string;
}) {
  return (
    <p className={cn("flex items-center gap-[1ch]", className)} style={style}>
      <span
        style={style}
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          running ? "bg-lime motion-safe:animate-pulse" : "bg-faint",
          dotClassName,
        )}
      />
      <span className="w-[10ch] shrink-0 text-mute">{name}</span>
      <span className="whitespace-nowrap text-strong">{arg}</span>
    </p>
  );
}

export type TreeItem = {
  name: string;
  depth: number;
  dir?: boolean;
  active?: boolean;
};

export function FileTree({ items }: { items: TreeItem[] }) {
  return (
    <ul className="font-mono text-xs leading-7 sm:text-[13px]">
      {items.map((item, i) => (
        <li
          key={i}
          style={{ paddingLeft: `${0.75 + item.depth * 1}rem` }}
          className={cn(
            "flex items-center gap-2 pr-3 whitespace-nowrap",
            item.dir ? "text-strong" : "text-mute",
            item.active && "bg-hover text-foreground",
          )}
        >
          {item.dir ? (
            <ChevronDown className="size-3.5 text-faint" />
          ) : (
            <FileText className="size-3.5 text-faint" />
          )}
          {item.name}
        </li>
      ))}
    </ul>
  );
}
