import { CopyInstall } from "@/components/copy-install";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function InstallActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <CopyInstall />
        <a href={site.repo} className={buttonVariants({ size: "lg" })}>
          View on GitHub
        </a>
      </div>
      <p className="mt-4 text-center text-sm text-mute">Requires Bun and an OpenAI API key.</p>
    </div>
  );
}

/** Linear-style section: title left, description right, product visual below. */
export function FeatureSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-16">
          <h2
            id={`${id}-title`}
            className="text-[1.75rem] leading-[1.1] font-medium tracking-[-0.025em] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {title}
          </h2>
          <div className="lg:pt-2">
            <p className="max-w-[48ch] text-[17px] leading-relaxed">{description}</p>
            <a
              href={site.docs}
              className="mt-5 inline-block text-[15px] text-strong transition-colors hover:text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-10 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}
