import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CalendarHeart, Ambulance } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Texas City Dental at ${site.phone} or visit us at ${site.address.full}. Request an appointment or ask us anything.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        breadcrumb="Contact"
        title={
          <>
            We&apos;d love to <span className="text-gradient">hear from you</span>
          </>
        }
        lead="Questions, appointments, or just saying hello — our friendly team is here to help. Reach out and we'll get right back to you."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Details */}
            <div>
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Visit our studio</h2>
              <p className="mt-3 text-slate-600">
                Conveniently located on Palmer Hwy with easy parking. Walk-ins welcome — though we recommend booking ahead.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoCard icon={Phone} title="Call us" href={site.phoneHref} value={site.phone} note="Mon–Sat" />
                <InfoCard icon={Mail} title="Email us" href={site.emailHref} value={site.email} note="We reply within a day" />
                <InfoCard
                  icon={MapPin}
                  title="Find us"
                  href={site.mapsDirections}
                  value={site.address.street}
                  note={`${site.address.city}, ${site.address.state} ${site.address.zip}`}
                  external
                />
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">Office hours</p>
                  <dl className="mt-2 space-y-1 text-sm">
                    {site.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-3">
                        <dt className="text-slate-500">{h.day.slice(0, 3)}</dt>
                        <dd className={h.short === "Closed" ? "text-slate-400" : "font-medium text-ink"}>
                          {h.short}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Emergency */}
              <div className="mt-6 flex items-start gap-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-glow">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15">
                  <Ambulance className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold">Dental emergency?</p>
                  <p className="mt-0.5 text-sm text-brand-100/90">
                    Call us right away — we keep same-day slots open for urgent care.
                  </p>
                  <a href={site.phoneHref} className="mt-2 inline-block font-semibold text-gold-300 hover:text-gold-200">
                    {site.phone} →
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <Button href="/appointment" size="lg" className="w-full sm:w-auto">
                  <CalendarHeart className="h-5 w-5" /> Book an Appointment
                </Button>
              </div>
            </div>

            {/* Form */}
            <Reveal x={20} y={0}>
              <div>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Send us a message</h2>
                <p className="mt-3 text-slate-600">
                  Prefer to write? Fill out the form and a team member will be in touch shortly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-20">
        <Container>
          <GoogleMap />
        </Container>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  note,
  href,
  external,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  note?: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
      <p className="mt-0.5 font-medium text-brand-700">{value}</p>
      {note && <p className="text-xs text-slate-500">{note}</p>}
    </a>
  );
}
