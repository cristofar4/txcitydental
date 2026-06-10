import { Phone, CalendarHeart, ShieldCheck, Star, Sparkles, ArrowRight, Activity } from "lucide-react";
import { site } from "@/lib/site";
import { photos, getReviewerPhoto } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic, TextReveal, TiltCard, Marquee } from "@/components/ui/motion";
import { Photo } from "@/components/media/Photo";
import { MonogramAvatar } from "@/components/art/Portrait";

const reviewerInitials = ["MG", "JR", "PN", "HB"];
const reviewerAccents = ["ocean", "teal", "indigo", "gold"] as const;

export function Hero() {
  return (
    <section className="noise relative isolate overflow-hidden bg-aurora animate-aurora pt-32 lg:min-h-[94vh] lg:pt-44">
      {/* ambient glow orbs + grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 mask-fade-b" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-electric-500/25 blur-[120px] animate-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-iris-500/25 blur-[130px] animate-glow [animation-delay:1.5s]" aria-hidden="true" />

      <Container className="relative pb-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Copy */}
          <div className="max-w-xl">
            <Reveal y={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
                </span>
                Texas City&apos;s Premier Dental Studio
              </span>
            </Reveal>

            <h1 className="mt-7 text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
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
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-brand-100/80">
                Luxury, comfort-first dentistry powered by modern technology. From routine
                cleanings to complete smile makeovers — experience care that feels as good
                as it looks.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic>
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
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {reviewerInitials.map((ini, i) => (
                      <span key={ini} className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-void">
                        <Photo
                          src={getReviewerPhoto(i)}
                          alt=""
                          sizes="44px"
                          className="h-full w-full rounded-full"
                          fallback={<MonogramAvatar initials={ini} accent={reviewerAccents[i]} className="h-full w-full text-xs" />}
                        />
                      </span>
                    ))}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <p className="mt-0.5 text-sm text-brand-100/70">
                      <strong className="text-white">{site.stats.rating}/5</strong> · {site.stats.patientsServed} happy smiles
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal x={36} y={0} delay={0.2} className="relative">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="perspective relative mx-auto max-w-md lg:max-w-none">
      <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-electric-500/20 via-transparent to-iris-500/20 blur-2xl" aria-hidden="true" />

      <TiltCard className="relative" max={9}>
        {/* main image card */}
        <div className="gradient-border gradient-border-dark relative overflow-hidden rounded-[2.5rem] shadow-neon">
          <Photo
            src={photos.heroSmile}
            alt="A patient enjoying a bright, confident smile after treatment"
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            overlay="dark"
            fallbackAccent="ocean"
            className="aspect-[4/5] w-full"
          />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="text-sm font-medium text-electric-300">Cosmetic &amp; Family Dentistry</p>
            <p className="font-display text-2xl font-semibold text-white">Your brightest smile, engineered.</p>
          </div>
        </div>

        {/* floating: rating chip */}
        <div className="absolute -left-5 top-10 animate-float rounded-2xl border border-white/15 bg-white/10 p-3.5 shadow-lift backdrop-blur-xl sm:-left-9">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/20 text-gold-300">
              <Star className="h-5 w-5 fill-gold-400 text-gold-400" />
            </span>
            <div>
              <p className="text-sm font-bold leading-none text-white">{site.stats.rating} Rating</p>
              <p className="mt-1 text-xs text-brand-100/70">{site.stats.reviewCount}+ reviews</p>
            </div>
          </div>
        </div>

        {/* floating: live availability */}
        <div className="absolute -bottom-5 -right-2 animate-float-slow rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lift backdrop-blur-xl sm:-right-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric-500/20 text-electric-300">
              <Activity className="h-5 w-5" />
            </span>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-bold leading-none text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Same-week visits
              </p>
              <p className="mt-1 text-xs text-brand-100/70">New patients welcome</p>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

/** Value-prop marquee shown directly beneath the hero. */
export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Most PPO Insurance Accepted" },
    { icon: Sparkles, label: "Advanced Digital Dentistry" },
    { icon: CalendarHeart, label: "Same-Day Emergencies" },
    { icon: Star, label: "Award-Winning Care Team" },
    { icon: ArrowRight, label: "Flexible 0% Financing" },
    { icon: ShieldCheck, label: "Evening & Saturday Hours" },
  ];
  return (
    <div className="relative overflow-hidden border-b border-slate-100 bg-white py-5">
      <div className="mask-fade-x">
        <Marquee className="items-center gap-10 pr-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-slate-600">
                <Icon className="h-5 w-5 text-brand-500" />
                {item.label}
              </span>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
