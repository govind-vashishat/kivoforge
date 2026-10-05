import { cn } from "@/lib/utils";

export function TerminalWindow({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border border-border bg-base",
        className,
      )}
    >
      <div className="relative flex h-10 items-center border-b border-border bg-surface px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-slate" />
          <span className="size-2.5 rounded-full bg-slate" />
          <span className="size-2.5 rounded-full bg-slate" />
        </div>
        <p className="absolute inset-x-0 text-center font-mono text-xs text-steel">
          {title}
        </p>
      </div>
      <div className="p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm sm:leading-8">
        {children}
      </div>
    </div>
  );
}
