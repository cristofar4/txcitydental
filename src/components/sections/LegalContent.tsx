import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

/** Shared, readable layout for Privacy, Terms, and Accessibility pages. */
export function LegalContent({
  updated,
  intro,
  sections,
}: {
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container size="prose">
        <Reveal>
          <p className="text-sm font-medium text-brand-600">Last updated: {updated}</p>
          <div className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">{intro}</div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.03}>
              <div className="scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.heading}</h2>
                <div className="mt-3 space-y-3 text-[0.975rem] leading-relaxed text-slate-600 [&_a]:font-semibold [&_a]:text-brand-700 [&_a:hover]:text-brand-600 [&_li]:ml-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                  {s.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
