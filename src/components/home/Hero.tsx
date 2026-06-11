import { Phone, CalendarHeart, Star, ShieldCheck, Sparkles, Activity, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic, TextReveal, Marquee } from "@/components/ui/motion";
import { MonogramAvatar } from "@/components/art/Portrait";
import { HeroVideo } from "@/components/home/HeroVideo";

const reviewers = [
  { initials: "MG", accent: "ocean" as const },
  { initials: "JR", accent: "teal" as const },
  { initials: "PN", accent: "indigo" as const },
  { initials: "HB", accent: "gold" as const },
];

export function Hero() {
  return (
    <section className="noise relative isolate flex min-h-[100svh] items-center overflow-hidden bg-void pt-28 lg:pt-32">
      {/* designed cinematic backdrop; a looping practice video plays on top when present */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-aurora animate-aurora" aria-hidden="true" />
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden="true" />
        {/* Looping practice video with ambient 3D camera drift and cursor tilt */}
        <HeroVideo />
        {/* legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/75 via-transparent to-void/25" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-dark opacity-20 mask-fade-b" aria-hidden="true" />
      </div>

      {/* glow orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-electric-500/20 blur-[130px] animate-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-iris-500/20 blur-[130px] animate-glow [animation-delay:1.6s]" aria-hidden="true" />

      <Container className="relative py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal y={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
              </span>
              Texas City&apos;s Premier Dental Studio
            </span>
          </Reveal>

          <h1 className="mx-auto mt-7 text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <TextReveal as="span" text="A smile worth" className="block" />
            <TextReveal
              as="span"
              text="showing off."
              className="mt-1 block text-glow"
              highlight={["showing", "off"]}
              highlightClass="text-gradient-electric"
              delay={0.25}
            />
          </h1>

          <Reveal delay={0.5}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-brand-100/85">
              Luxury, comfort first dental care powered by modern technology. From routine
              cleanings to complete smile makeovers, experience care that feels as good as it looks.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <Button href="/appointment" size="lg" className="w-full sm:w-auto">
                  <CalendarHeart className="h-5 w-5" />
                  Book Your Visit
                </Button>
              </Magnetic>
              <Button href={site.phoneHref} variant="outline-light" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                {site.phone}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.75}>
            <div className="mt-11 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {reviewers.map((r) => (
                    <MonogramAvatar
                      key={r.initials}
                      initials={r.initials}
                      accent={r.accent}
                      className="h-11 w-11 text-xs ring-2 ring-void"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-sm text-brand-100/75">
                    <strong className="text-white">{site.stats.rating}/5</strong> from {site.stats.patientsServed} happy patients
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Value-prop marquee shown directly beneath the hero. */
export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Most PPO Insurance Accepted" },
    { icon: Sparkles, label: "Advanced Digital Dentistry" },
    { icon: CalendarHeart, label: "Same Day Emergencies" },
    { icon: Star, label: "Award Winning Care Team" },
    { icon: ArrowRight, label: "Flexible 0% Financing" },
    { icon: Activity, label: "Evening & Saturday Hours" },
  ];
  return (
    <div className="relative overflow-hidden border-b border-brand-100/60 bg-cloud py-5">
      <div className="mask-fade-x">
        <Marquee className="items-center gap-10 pr-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-slate-600">
                <Icon className="h-5 w-5 text-brand-600" />
                {item.label}
              </span>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
