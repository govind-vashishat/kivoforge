import { Evals } from "@/components/sections/evals";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { QuickStart } from "@/components/sections/quick-start";
import { Roadmap } from "@/components/sections/roadmap";
import { TerminalDemo } from "@/components/sections/terminal-demo";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top" className="pb-10">
        <Hero />
        <TerminalDemo />
        <Features />
        <QuickStart />
        <HowItWorks />
        <Evals />
        <Roadmap />
      </main>
      <SiteFooter />
    </>
  );
}
