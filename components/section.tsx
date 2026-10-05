import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1100px] px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 sm:py-14">
      <Container>
        <h2
          id={`${id}-title`}
          className="text-2xl font-medium tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h2>
        {lead ? (
          <p className="mt-4 max-w-[68ch] leading-relaxed text-silver">{lead}</p>
        ) : null}
        <div className="mt-8 sm:mt-10">{children}</div>
      </Container>
    </section>
  );
}
