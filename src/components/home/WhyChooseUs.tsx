import { Check, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SmileArt } from "@/components/art/SmileArt";
import { MonogramAvatar } from "@/components/art/Portrait";
import { site } from "@/lib/site";

const reasons = [
  {
    title: "Comfort-first, always",
    text: "Warm blankets, noise-cancelling headphones, sedation options, and a team that listens. Anxiety welcome — we'll change how you feel about the dentist.",
  },
  {
    title: "Everything under one roof",
    text: "From cleanings to implants, cosmetic veneers to kids' visits — your whole family's care is handled in one beautiful, convenient place.",
  },
  {
    title: "Honest, transparent care",
    text: "No surprises and no pressure. We explain every option clearly, accept most PPO insurance, and offer flexible 0% financing.",
  },
  {
    title: "Beautiful, lasting results",
    text: "Premium materials and meticulous, artistry-driven technique mean restorations and smile makeovers that look natural and last for years.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* visual */}
          <Reveal className="relative order-last lg:order-first">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-brand-100/60 to-gold-200/40 blur-xl" aria-hidden="true" />
              <div className="relative rounded-[2.25rem] bg-white p-3 shadow-lift ring-1 ring-slate-100">
                <div className="overflow-hidden rounded-[1.85rem]">
                  <SmileArt variant={{ shade: 0.96, straightness: 1, gap: 0, chips: false }} uid="why" className="aspect-[4/3] w-full" />
                </div>
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      <MonogramAvatar initials="KM" accent="ocean" className="h-9 w-9 text-[0.65rem]" />
                      <MonogramAvatar initials="SR" accent="teal" className="h-9 w-9 text-[0.65rem]" />
                      <MonogramAvatar initials="KS" accent="indigo" className="h-9 w-9 text-[0.65rem]" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-ink">Our 3 doctors</p>
                      <p className="text-xs text-slate-500">Ready to care for you</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold-200/50 px-2.5 py-1 text-xs font-semibold text-gold-600">
                    <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                    {site.stats.rating}
                  </span>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 px-4 py-3 text-white shadow-glow sm:-right-6">
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-gold-300" /> Gentle, spa-like care
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Texas City Difference"
              title={
                <>
                  Premium care, <span className="text-gradient">without the wait or worry</span>
                </>
              }
            />
            <ul className="mt-8 space-y-5">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.08}>
                  <li className="flex gap-4">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-sm">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{r.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="secondary">
                More about our practice
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
