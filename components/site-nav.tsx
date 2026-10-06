"use client";

import { useSyncExternalStore } from "react";
import { Container } from "@/components/layout";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const links = [
  { label: "Features", href: "#features" },
  { label: "Evals", href: "#evals" },
  { label: "Docs", href: site.docs },
];

const linkClass = "text-sm text-mute transition-colors hover:text-foreground";

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
          ? "border-border bg-background/75 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2" aria-label="Kivo, home">
          <Logo size={22} strokeWidth={6} />
          <span className="text-[15px] font-medium text-foreground">Kivo</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="hidden h-4 w-px bg-border md:block" aria-hidden="true" />
          <a href={site.repo} className={linkClass}>
            GitHub
          </a>
          <a
            href="#install"
            className={cn(buttonVariants({ size: "default" }), "rounded-full px-3.5")}
          >
            Install
          </a>
        </nav>
      </Container>
    </header>
  );
}
