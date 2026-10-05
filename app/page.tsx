import { Container, FeatureSection, InstallActions } from "@/components/layout";
import { Logo } from "@/components/logo";
import { SiteNav } from "@/components/site-nav";
import { DiffVisual } from "@/components/visuals/diff-visual";
import { EditorVisual } from "@/components/visuals/editor-visual";
import { EvalsVisual } from "@/components/visuals/evals-visual";
import { HeroSession } from "@/components/visuals/hero-session";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { RoadmapVisual } from "@/components/visuals/roadmap-visual";
import { TestsVisual } from "@/components/visuals/tests-visual";
import { site } from "@/lib/site";

const footerLink = "text-mute transition-colors hover:text-foreground";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-full flex-col">
      <div
        className="page-wash pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        aria-hidden="true"
      />
      <SiteNav />

      <main id="top">
        <section aria-labelledby="hero-title" className="pt-14 pb-14 sm:pt-24 sm:pb-20">
          <Container>
            <h1
              id="hero-title"
              className="text-[2.375rem] leading-[1.06] font-medium tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              The open-source coding agent{" "}
              <br className="hidden lg:block" />
              for your terminal
            </h1>
            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between lg:gap-10">
              <p className="text-[17px] leading-relaxed">
                Describe a task, and Kivo reads your code, edits files, and runs
                your tests until it&apos;s done.
              </p>
              <a
                href={site.repo}
                className="group shrink-0 text-[15px] text-mute transition-colors hover:text-foreground"
              >
                <span className="mr-3 text-strong group-hover:text-foreground">New</span>
                v0.2 in development <span aria-hidden="true">→</span>
              </a>
            </div>
            <InstallActions className="mt-9" />
            <div className="mt-14 sm:mt-16">
              <HeroSession />
            </div>
          </Container>
        </section>

        <FeatureSection
          id="features"
          title="Works in your project"
          description="Run Kivo from any project folder. It reads and searches your files to understand the code before it changes anything."
        >
          <ProjectVisual />
        </FeatureSection>

        <FeatureSection
          id="edits"
          title="Edits you can review"
          description="Changes are made as exact text replacements, so every edit is small and easy to check. If an edit doesn't match the file, Kivo sees the error and tries again."
        >
          <DiffVisual />
        </FeatureSection>

        <FeatureSection
          id="checks"
          title="Checks its own work"
          description="Kivo runs your tests and other commands, reads the output, and keeps going until the task is done or it needs your input."
        >
          <TestsVisual />
        </FeatureSection>

        <FeatureSection
          id="evals"
          title="Measured with evals"
          description="Kivo is tested against small projects that each contain a real bug and a test that checks the fix. Every change is measured: pass rate, steps taken, and tokens used."
        >
          <EvalsVisual />
        </FeatureSection>

        <FeatureSection
          id="code"
          title="Small enough to read"
          description="Kivo is a few TypeScript files with no agent framework. The agent core reports everything it does as events, so the terminal interface, the eval runner, and the upcoming web interface all use the same agent."
        >
          <EditorVisual />
        </FeatureSection>

        <FeatureSection
          id="roadmap"
          title="Roadmap"
          description="What's being built next."
          learnMore={false}
        >
          <RoadmapVisual />
        </FeatureSection>

        <section id="install" aria-labelledby="install-title" className="py-14 sm:py-24">
          <Container>
            <h2
              id="install-title"
              className="text-[2rem] leading-[1.1] font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
            >
              Try Kivo in your next project
            </h2>
            <InstallActions className="mt-9" />
          </Container>
        </section>
      </main>

      <footer className="mt-auto border-t border-border">
        <Container className="flex flex-col gap-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo size={20} strokeWidth={6} />
            <p>Open source under the MIT license.</p>
          </div>
          <ul className="flex items-center gap-6">
            <li>
              <a href={site.repo} className={footerLink}>
                GitHub
              </a>
            </li>
            <li>
              <a href={site.npm} className={footerLink}>
                npm
              </a>
            </li>
            <li>
              <a href="#roadmap" className={footerLink}>
                Roadmap
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    </div>
  );
}
