import { CopyInstall } from "@/components/copy-install";
import { Logo } from "@/components/logo";
import { Container } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip pt-14 pb-12 sm:pt-20 sm:pb-14">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
        <div>
          <Badge
            variant="outline"
            render={<a href="#roadmap" />}
            className="h-7 gap-2 px-3 motion-safe:animate-fade-up"
          >
            <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
            v0.2 in development
          </Badge>

          <h1
            id="hero-title"
            className="hero-gradient mt-6 max-w-[16ch] pb-2 text-[2.5rem] leading-[1.08] font-medium tracking-[-0.03em] motion-safe:animate-fade-up sm:text-5xl lg:text-[3.5rem]"
          >
            An open-source coding agent for your terminal
          </h1>

          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-steel motion-safe:animate-fade-up motion-safe:[animation-delay:80ms]">
            Kivo works inside your project. Describe a task in plain English, and
            it reads your code, edits files, and runs commands until the task is
            done.
          </p>

          <div className="mt-9 flex flex-col gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:160ms] sm:flex-row sm:items-center">
            <CopyInstall />
            <a
              href={site.repo}
              className={cn(buttonVariants({ size: "lg" }), "rounded-[8px]")}
            >
              View on GitHub
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-steel motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
            Requires Bun and an OpenAI API key.
          </p>
        </div>

        <div
          className="relative flex items-center justify-center py-6 lg:justify-end lg:py-0"
          aria-hidden="true"
        >
          <div className="logo-glow absolute top-1/2 left-1/2 size-[320px] max-w-none -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-[-70px] lg:translate-x-0" />
          <Logo
            size={180}
            strokeWidth={2.5}
            className="relative h-auto w-[126px] motion-safe:animate-fade-up lg:w-[180px]"
          />
        </div>
      </Container>
    </section>
  );
}
