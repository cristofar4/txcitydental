import { Phone, CalendarHeart, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { photos } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/motion";
import { Photo } from "@/components/media/Photo";
import { ToothMark } from "@/components/art/icons";

/** Reusable conversion band, the closing call-to-action used across pages. */
export function CTASection({
  title = "Ready for the smile you deserve?",
  subtitle = "Book your visit in under a minute. New patients are always welcome, and we'll make sure your first appointment feels anything but ordinary.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative px-4 py-16 sm:py-20">
      <Container size="wide">
        <Reveal>
          <div className="noise relative isolate overflow-hidden rounded-[2.5rem] shadow-lift">
            {/* photo + aurora backdrop */}
            <Photo
              src={photos.ctaBackdrop}
              alt=""
              sizes="100vw"
              fallbackAccent="ocean"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-aurora animate-aurora opacity-90 mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/70" aria-hidden="true" />
            <div className="absolute inset-0 bg-dots opacity-15" aria-hidden="true" />
            <ToothMark className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rotate-12 text-white/5" />

            <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
              <div className="mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-electric-300" />
                  Same week appointments
                </span>
                <h2 className="mt-6 text-balance text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h2>
                <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-brand-100/85 sm:text-lg">
                  {subtitle}
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Magnetic className="w-full sm:w-auto">
                    <Button href="/appointment" size="lg" className="w-full sm:w-auto">
                      <CalendarHeart className="h-5 w-5" />
                      Book Your Appointment
                    </Button>
                  </Magnetic>
                  <Button href={site.phoneHref} variant="outline-light" size="lg" className="w-full sm:w-auto">
                    <Phone className="h-5 w-5" />
                    {site.phone}
                  </Button>
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-brand-100/80">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-electric-300" /> Most insurance accepted
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-electric-300" /> Evening &amp; Saturday hours
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarHeart className="h-4 w-4 text-electric-300" /> Flexible financing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
