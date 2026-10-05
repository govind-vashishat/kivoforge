import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Works in your project",
    body: "Run it from any project folder. Kivo reads and searches your files to understand the code before changing it.",
  },
  {
    title: "Precise edits",
    body: "Changes are made as exact text replacements, so edits are small and easy to review.",
  },
  {
    title: "Runs commands",
    body: "Kivo can run your tests and other shell commands, and use the output to check its own work.",
  },
  {
    title: "Session or one-shot",
    body: "Start an interactive session, or pass a single task as an argument and let it run.",
  },
];

export function Features() {
  return (
    <Section id="features" title="Features">
      <ul className="grid gap-4 md:grid-cols-2">
        {features.map((f) => (
          <li key={f.title}>
            <Card className="h-full">
              <CardHeader className="gap-2">
                <CardTitle>
                  <h3>{f.title}</h3>
                </CardTitle>
                <CardDescription className="max-w-[52ch] text-[15px]">
                  {f.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
