import { Phone, CalendarHeart, Star, ShieldCheck, Sparkles, Activity, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { photos, getReviewerPhoto } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic, TextReveal, Marquee } from "@/components/ui/motion";
import { Photo } from "@/components/media/Photo";
import { MonogramAvatar } from "@/components/art/Portrait";

const reviewerInitials = ["MG", "JR", "PN", "HB"];
const reviewerAccents = ["ocean", "teal", "indigo", "gold"] as const;

export function Hero() {
  return (
    <section className="noise relative isolate flex min-h-[100svh] items-center overflow-hidden bg-void pt-28 lg:pt-32">
      {/* cinematic background: panning photo + optional looping video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-kenburns">
          <Photo
            src={photos.heroSmile}
            alt=""
            priority
            sizes="100vw"
            fallbackAccent="ocean"
            className="h-full w-full"
          />
        </div>
        {/* Plays a looping practice video when one is present at site.heroVideo;
            otherwise stays transparent and the panning photo above shows through. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={site.heroVideo} type="video/mp4" />
        </video>
        {/* legibility + brand overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-aurora opacity-30 mix-blend-screen animate-aurora" aria-hidden="true" />
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

      {/* now playing pill */}
      <div className="pointer-events-none absolute bottom-7 left-6 hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-100/90 backdrop-blur lg:inline-flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
        Inside our studio
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </div>
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
