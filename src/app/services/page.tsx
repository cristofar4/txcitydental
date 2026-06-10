import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CreditCard, BadgePercent, Receipt } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceIcon } from "@/components/art/icons";
import { services } from "@/lib/data/services";
import { accentGradient } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore our full range of dental services in Texas City, TX — general, cosmetic, orthodontics, oral surgery, pediatric dentistry, cleanings, and crowns & bridges.",
  alternates: { canonical: "/services" },
};

const assurances = [
  { icon: ShieldCheck, title: "Most PPO insurance accepted", text: "We file your claims for you." },
  { icon: BadgePercent, title: "Flexible 0% financing", text: "Low monthly payments available." },
  { icon: CreditCard, title: "Membership plan", text: "No insurance? Save with our in-house plan." },
  { icon: Receipt, title: "Transparent pricing", text: "Clear estimates before we begin — always." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        breadcrumb="Services"
        title={
          <>
            Complete care for every smile,{" "}
            <span className="text-gradient">at every age</span>
          </>
        }
        lead="One trusted home for your family's entire dental journey — delivered with comfort, artistry, and the latest technology."
      />

      {/* Quick nav grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} withHighlights />
              </StaggerItem>
            ))}
            <StaggerItem className="h-full">
              <div className="flex h-full flex-col justify-center gap-3 rounded-3xl border border-dashed border-brand-200 bg-brand-50/40 p-7 text-center">
                <p className="font-display text-xl font-semibold text-ink">
                  Your whole family, one place
                </p>
                <p className="text-sm text-slate-600">
                  Jump to any service below for the full details, or book a visit and we&apos;ll guide you.
                </p>
                <Link href="/appointment" className="mt-1 font-semibold text-brand-700 hover:text-brand-600">
                  Book an appointment →
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* Anchor chips */}
      <div className="sticky top-[4.5rem] z-30 border-y border-slate-100 bg-white/80 py-3 backdrop-blur lg:top-[6.5rem]">
        <Container size="wide">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                <span
                  className="grid h-5 w-5 place-items-center rounded-full text-white"
                  style={{ background: accentGradient(s.accent) }}
                >
                  <ServiceIcon name={s.icon} className="h-3 w-3" />
                </span>
                {s.title}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Detailed sections */}
      <div>
        {services.map((s, i) => (
          <ServiceDetail key={s.slug} service={s} index={i} />
        ))}
      </div>

      {/* Assurances */}
      <section className="bg-gradient-to-b from-white to-mist/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {assurances.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.title} className="flex flex-col items-start gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{a.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Found the care you were looking for?" />
    </>
  );
}
