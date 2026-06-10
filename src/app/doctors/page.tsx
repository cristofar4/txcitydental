import type { Metadata } from "next";
import { Stethoscope, HeartHandshake, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { doctors } from "@/lib/data/doctors";

export const metadata: Metadata = {
  title: "Meet the Doctors",
  description:
    "Meet Dr. Kapil Mangla, Dr. Sushmita Rath, and Dr. Kamran Shaikh — the experienced, compassionate dentists behind Texas City Dental.",
  alternates: { canonical: "/doctors" },
};

const ethos = [
  { icon: HeartHandshake, title: "We lead with kindness", text: "Every patient is met with patience and zero judgment — anxiety and all." },
  { icon: GraduationCap, title: "We never stop learning", text: "Ongoing training keeps our care modern, gentle, and evidence-based." },
  { icon: Stethoscope, title: "We treat the whole person", text: "Your comfort, goals, and budget shape every recommendation we make." },
];

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Doctors"
        breadcrumb="Our Doctors"
        title={
          <>
            The caring experts behind{" "}
            <span className="text-gradient">your smile</span>
          </>
        }
        lead="Three dedicated dentists, one shared philosophy: exceptional, gentle care that treats you like family. Get to know the people you'll trust with your smile."
      />

      {/* Doctor cards */}
      <section className="py-16 sm:py-20">
        <Container>
          <Stagger className="grid gap-7 lg:grid-cols-3">
            {doctors.map((d) => (
              <StaggerItem key={d.slug} className="h-full">
                <DoctorCard doctor={d} variant="full" />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Ethos */}
      <section className="bg-gradient-to-b from-mist/60 to-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What Unites Our Team"
            title="A shared commitment to your comfort"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {ethos.map((e) => {
              const Icon = e.icon;
              return (
                <StaggerItem key={e.title}>
                  <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-card">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal className="mt-10">
            <p className="mx-auto max-w-2xl text-center font-display text-xl italic text-slate-500">
              &ldquo;Great dentistry is equal parts science and trust. We&apos;re honored you&apos;d let us care for your smile.&rdquo;
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Book with the dentist who's right for you"
        subtitle="New patients are always welcome. Choose your preferred doctor when you book, or let us match you with the perfect fit."
      />
    </>
  );
}
