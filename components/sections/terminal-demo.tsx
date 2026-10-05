"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/section";
import { TerminalWindow } from "@/components/terminal-window";
import { cn } from "@/lib/utils";

const PROMPT = 'kivo "fix the failing currency test"';
const STEPS = [
  ["read_file", "src/invoice.ts"],
  ["edit_file", "src/invoice.ts"],
  ["run", "bun test"],
] as const;
// One tick per prompt character, then one per output line (tool calls + done).
const TOTAL = PROMPT.length + STEPS.length + 1;

export function TerminalDemo() {
  const ref = useRef<HTMLDivElement>(null);
  // null = show everything (server render, no JS, reduced motion).
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    let started = false;
    const tick = (n: number) => {
      setProgress(n);
      if (n < TOTAL) {
        timer = setTimeout(() => tick(n + 1), n < PROMPT.length ? 32 : 420);
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (started) return;
        if (entry.isIntersecting) {
          started = true;
          observer.disconnect();
          tick(0);
        } else {
          setProgress(0);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const shown = progress ?? TOTAL;
  const typed = Math.min(shown, PROMPT.length);
  const lines = shown - PROMPT.length;
  const running = progress !== null && progress < TOTAL;

  return (
    <section aria-label="Kivo in the terminal" className="py-12 sm:py-14">
      <Container>
        <div ref={ref} className="mx-auto max-w-[760px]">
          <TerminalWindow title="~/projects/invoices">
            <p className="text-white">
              <span className="text-steel select-none">❯ </span>
              {PROMPT.slice(0, typed)}
              {running && typed < PROMPT.length ? (
                <span
                  className="-mb-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] bg-silver"
                  aria-hidden="true"
                />
              ) : null}
              <span className="invisible">{PROMPT.slice(typed)}</span>
            </p>
            {STEPS.map(([tool, arg], i) => (
              <p
                key={tool}
                className={cn("flex pl-[2ch] text-steel", lines <= i && "invisible")}
              >
                <span className="w-[12ch] shrink-0">{tool}</span>
                <span>{arg}</span>
              </p>
            ))}
            <p
              className={cn(
                "flex flex-wrap justify-between gap-x-6 text-platinum",
                lines <= STEPS.length && "invisible",
              )}
            >
              <span>✓ done</span>
              {/* TODO: real step and token counts from a recorded run */}
              <span className="text-slate">steps TODO · tokens TODO</span>
            </p>
          </TerminalWindow>
        </div>
      </Container>
    </section>
  );
}
