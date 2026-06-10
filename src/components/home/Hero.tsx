import { Phone, CalendarHeart, ShieldCheck, Star, BadgeCheck, Clock3 } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MonogramAvatar } from "@/components/art/Portrait";
import { SmileArt } from "@/components/art/SmileArt";

const heroSmile = { shade: 0.97, straightness: 1, gap: 0, chips: false };

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-cloud to-cloud pt-32 lg:pt-44">
      {/* ambient decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] mask-fade-b" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" aria-hidden="true" />

      <Container className="relative pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <Eyebrow>Texas City&apos;s Premier Dental Studio</Eyebrow>

            <h1 className="mt-6 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.85rem]">
              A smile worth <span className="text-gradient">showing off</span>.
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-slate-600">
              Luxury, comfort-first dentistry in the heart of Texas City. From routine
              cleanings to complete smile makeovers — experience care that feels as good
              as it looks.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/appointment" size="lg" className="w-full sm:w-auto">
                <CalendarHeart className="h-5 w-5" />
                Book Your Visit
              </Button>
              <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5 text-brand-600" />
                {site.phone}
              </Button>
            </div>

            {/* social proof */}
            <Reveal delay={0.2} className="mt-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[
                      { i: "MG", a: "ocean" as const },
                      { i: "JR", a: "teal" as const },
                      { i: "PN", a: "indigo" as const },
                      { i: "HB", a: "gold" as const },
                    ].map((p) => (
                      <MonogramAvatar key={p.i} initials={p.i} accent={p.a} className="h-10 w-10 text-xs" />
                    ))}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500">
                      <strong className="text-ink">{site.stats.rating}/5</strong> · {site.stats.patientsServed} happy smiles
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual composition */}
          <Reveal x={30} y={0} delay={0.1} className="relative">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>

      {/* gradient seam into next section */}
      <div className="h-10 bg-gradient-to-b from-transparent to-cloud" aria-hidden="true" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* rotating dashed ring */}
      <div
        className="pointer-events-none absolute -right-6 -top-8 hidden h-28 w-28 rounded-full border-2 border-dashed border-brand-300/60 animate-spin-slow sm:block"
        aria-hidden="true"
      />

      {/* main smile card */}
      <div className="relative rounded-[2.5rem] bg-white p-3 shadow-lift ring-1 ring-slate-100">
        <div className="overflow-hidden rounded-[2rem]">
          <SmileArt variant={heroSmile} uid="hero" className="aspect-[5/4] w-full" />
        </div>
        <div className="absolute inset-x-3 bottom-3 rounded-b-[2rem] bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-6 pt-12">
          <p className="text-sm font-medium text-brand-100">Cosmetic & Family Dentistry</p>
          <p className="text-xl font-semibold text-white">Brighter in just one visit</p>
        </div>
      </div>

      {/* floating: rating chip */}
      <div className="absolute -left-4 top-8 animate-float rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-slate-100 sm:-left-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-200/60 text-gold-600">
            <Star className="h-5 w-5 fill-gold-500 text-gold-500" />
          </span>
          <div>
            <p className="text-sm font-bold leading-none text-ink">{site.stats.rating} Rating</p>
            <p className="mt-1 text-xs text-slate-500">{site.stats.reviewCount}+ reviews</p>
          </div>
        </div>
      </div>

      {/* floating: appointment confirmed card */}
      <div className="absolute -bottom-6 -right-2 animate-float-slow rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 sm:-right-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <BadgeCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold leading-none text-ink">Same-week visits</p>
            <p className="mt-1 text-xs text-slate-500">New patients welcome</p>
          </div>
        </div>
      </div>

      {/* floating: financing pill */}
      <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 animate-float rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-glow lg:block">
        0% Financing
      </div>
    </div>
  );
}

/** Value-prop marquee shown directly beneath the hero. */
export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Most PPO Insurance Accepted" },
    { icon: Clock3, label: "Evening & Saturday Hours" },
    { icon: CalendarHeart, label: "Same-Day Emergencies" },
    { icon: BadgeCheck, label: "Flexible 0% Financing" },
    { icon: Star, label: "Award-Winning Care Team" },
    { icon: ShieldCheck, label: "Advanced Digital Dentistry" },
  ];
  return (
    <div className="relative overflow-hidden border-y border-slate-100 bg-white/70 py-5">
      <div className="flex w-max animate-marquee items-center gap-10 pl-10">
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon;
          return (
            <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-slate-600">
              <Icon className="h-5 w-5 text-brand-500" />
              {item.label}
            </span>
          );
        })}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cloud to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cloud to-transparent" aria-hidden="true" />
    </div>
  );
}
