import { HeartHandshake, ShieldCheck, Microscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Unhurried Comfort",
    text: "We never rush. Calm, spa-like visits, gentle techniques, and sedation options keep even the most nervous patients at ease.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise You Trust",
    text: "Three experienced, genuinely caring dentists and a warm team who treat every patient — and every smile — like family.",
  },
  {
    icon: Microscope,
    title: "Modern Technology",
    text: "Digital X-rays, 3D treatment planning, and precise digital impressions mean faster, more comfortable, more accurate care.",
  },
];

export function Welcome() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Welcome to Texas City Dental"
          title={
            <>
              Dentistry that feels{" "}
              <span className="text-gradient">refreshingly different</span>
            </>
          }
          lead="For over a decade, Texas City families have trusted us for honest, gentle, and beautiful dental care. We've reimagined the dental visit around one idea: you should actually enjoy being here."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>

      {/* signature flourish */}
      <Reveal className="mt-14">
        <Container className="flex justify-center">
          <p className="text-center font-display text-lg italic text-slate-500">
            &ldquo;We treat every patient the way we&apos;d want our own family treated.&rdquo;
            <span className="mt-1 block text-sm not-italic text-brand-600">— The Texas City Dental Team</span>
          </p>
        </Container>
      </Reveal>
    </section>
  );
}
