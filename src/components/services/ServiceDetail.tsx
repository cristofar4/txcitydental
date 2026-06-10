import { Check, Lightbulb, ArrowRight, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceIcon, ToothMark } from "@/components/art/icons";
import { getAccent, accentGradient } from "@/lib/accents";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data/services";

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const reverse = index % 2 === 1;
  const accent = getAccent(service.accent);

  return (
    <section
      id={service.slug}
      className={cn("scroll-mt-28 py-14 sm:py-16", reverse ? "bg-mist/50" : "bg-white")}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <Reveal className={cn(reverse && "lg:order-last")}>
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-[2.25rem] p-8 shadow-lift sm:p-10"
                style={{ background: accentGradient(service.accent) }}
              >
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-15" aria-hidden="true" />
                <ToothMark className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rotate-12 text-white/10" />
                <ServiceIcon
                  name={service.icon}
                  className="pointer-events-none absolute -bottom-6 -left-4 h-40 w-40 text-white/10"
                />

                <div className="relative">
                  <span className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-white/20 text-white ring-1 ring-white/30 backdrop-blur">
                    <ServiceIcon name={service.icon} className="h-8 w-8" />
                  </span>
                  <p className="mt-6 max-w-xs text-pretty text-lg font-medium leading-snug text-white">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
                    <Tag className="h-4 w-4" />
                    {service.priceNote}
                  </span>
                </div>
              </div>

              {/* good-to-know floating note */}
              <div className="relative z-10 mx-4 -mt-8 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
                    style={{ background: accent.soft, color: accent.text }}
                  >
                    <Lightbulb className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: accent.text }}>
                      Good to know
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{service.goodToKnow}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ background: accent.soft, color: accent.text }}
            >
              Service
            </span>
            <h2 className="mt-4 text-3xl text-ink sm:text-4xl">{service.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{service.description}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: accent.from }}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                What&apos;s included
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.treatments.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button href={`/appointment?service=${service.slug}`}>
                Book {service.title} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
