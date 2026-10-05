import { Logo } from "@/components/logo";
import { Container } from "@/components/section";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-5 py-10 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={20} strokeWidth={6} />
          <p>Kivo is open source under the MIT license.</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={site.repo} className="text-silver transition-colors hover:text-white">
            GitHub
          </a>
          <a href={site.npm} className="text-silver transition-colors hover:text-white">
            npm
          </a>
        </div>
      </Container>
    </footer>
  );
}
