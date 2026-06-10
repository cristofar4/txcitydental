import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { site } from "@/lib/site";

const stats = [
  { value: site.stats.yearsServing, suffix: "+", label: "Years serving Texas City" },
  { value: 12, suffix: "k+", label: "Smiles transformed" },
  { value: site.stats.rating, decimals: 1, suffix: "/5", label: "Average patient rating" },
  { value: 7, suffix: "", label: "Specialty services" },
];

export function Stats() {
  return (
    <section className="relative px-4 py-6">
      <Container size="wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-mesh px-6 py-12 shadow-lift sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
            <dl className="relative grid grid-cols-2 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display text-4xl font-semibold text-white sm:text-5xl">
                      <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                    </span>
                    <span className="mt-2 block text-sm font-medium text-brand-100/80">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
