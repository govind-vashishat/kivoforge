"use client";

import { useSyncExternalStore } from "react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/section";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const links = [
  { label: "Docs", href: site.docs },
  { label: "Evals", href: "#evals" },
  { label: "Roadmap", href: "#roadmap" },
];

export function SiteNav() {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 8,
    () => false,
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-black/70 backdrop-blur-md"
          : "border-transparent bg-black",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2" aria-label="kivo, home">
          <Logo size={22} strokeWidth={6} />
          <span className="text-[17px] font-medium tracking-tight text-white">
            kivo
          </span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-7">
          <ul className="flex items-center gap-4 text-[13px] sm:gap-7 sm:text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-silver transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.repo}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-[13px] text-platinum transition-colors hover:text-white sm:px-3.5 sm:text-sm"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
