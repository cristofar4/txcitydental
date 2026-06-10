import { Phone, CalendarHeart, ShieldCheck, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ToothMark } from "@/components/art/icons";

/** Reusable conversion band — the closing call-to-action used across pages. */
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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-mesh px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
            {/* decorative */}
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
            <ToothMark className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rotate-12 text-white/5" />
            <ToothMark className="pointer-events-none absolute -bottom-10 -left-6 h-44 w-44 -rotate-12 text-white/5" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100 ring-1 ring-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                Same-week appointments
              </span>
              <h2 className="mt-6 text-balance text-3xl text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-brand-100/85 sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/appointment" variant="gold" size="lg" className="w-full sm:w-auto">
                  <CalendarHeart className="h-5 w-5" />
                  Book Your Appointment
                </Button>
                <Button href={site.phoneHref} variant="outline-light" size="lg" className="w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  {site.phone}
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-brand-100/80">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold-300" />
                  Most insurance accepted
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-300" />
                  Evening &amp; Saturday hours
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarHeart className="h-4 w-4 text-gold-300" />
                  Flexible financing
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
