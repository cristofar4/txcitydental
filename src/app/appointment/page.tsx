import type { Metadata } from "next";
import { Phone, Clock, ShieldCheck, HeartHandshake, Sparkles, CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Stars } from "@/components/ui/Stars";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request your dental appointment at Texas City Dental in under a minute. New patients welcome — choose your service, time, and preferred dentist.",
  alternates: { canonical: "/appointment" },
};

const perks = [
  { icon: CalendarCheck, text: "Same-week appointments available" },
  { icon: ShieldCheck, text: "Most PPO insurance accepted" },
  { icon: HeartHandshake, text: "Gentle, judgment-free care" },
  { icon: Sparkles, text: "Complimentary new-patient consults" },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Online"
        breadcrumb="Appointment"
        title={
          <>
            Reserve your visit in{" "}
            <span className="text-gradient-electric">under a minute</span>
          </>
        }
        lead="Tell us a little about what you need and when works best. We'll call to confirm your appointment — no charge, no obligation."
      />

      <section className="pb-20 pt-4 sm:pt-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            {/* Form */}
            <div>
              <AppointmentForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-mesh p-6 text-white shadow-lift">
                <div className="flex items-center gap-2">
                  <Stars rating={site.stats.rating} size={16} />
                  <span className="text-sm font-medium text-brand-100">
                    {site.stats.rating}/5 · {site.stats.reviewCount}+ reviews
                  </span>
                </div>
                <p className="mt-4 font-display text-xl font-semibold">
                  You&apos;re in caring, capable hands.
                </p>
                <ul className="mt-5 space-y-3">
                  {perks.map((p) => {
                    const Icon = p.icon;
                    return (
                      <li key={p.text} className="flex items-center gap-3 text-sm text-brand-100/90">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-gold-300">
                          <Icon className="h-4 w-4" />
                        </span>
                        {p.text}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  <Clock className="h-4 w-4 text-brand-500" /> Office Hours
                </h2>
                <dl className="mt-4 space-y-1.5 text-sm">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-3">
                      <dt className="text-slate-500">{h.day}</dt>
                      <dd className={h.short === "Closed" ? "text-slate-400" : "font-medium text-ink"}>
                        {h.short}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-card">
                <p className="text-sm text-slate-600">Prefer to talk to a person?</p>
                <a
                  href={site.phoneHref}
                  className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-semibold text-brand-700 hover:text-brand-600"
                >
                  <Phone className="h-5 w-5" />
                  {site.phone}
                </a>
                <p className="mt-1 text-xs text-slate-400">We&apos;re happy to help you book by phone.</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
