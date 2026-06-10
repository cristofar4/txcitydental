import type { Metadata } from "next";
import { HeartHandshake, Gem, ShieldCheck, Lightbulb, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Stats } from "@/components/home/Stats";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { Photo } from "@/components/media/Photo";
import { doctors } from "@/lib/data/doctors";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Texas City Dental — a luxury, comfort-first dental practice serving Texas City, TX with compassionate, expert care for the whole family.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "We lead with empathy. Every patient is met with patience, warmth, and zero judgment." },
  { icon: Gem, title: "Excellence", text: "From materials to technique, we hold ourselves to the highest standard — your smile deserves nothing less." },
  { icon: ShieldCheck, title: "Integrity", text: "Honest recommendations, transparent pricing, and care we'd choose for our own families." },
  { icon: Lightbulb, title: "Innovation", text: "We invest in modern technology so your care is faster, gentler, and more precise." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        breadcrumb="About"
        title={
          <>
            Redefining the dental experience in{" "}
            <span className="text-gradient-electric">Texas City</span>
          </>
        }
        lead="We believe going to the dentist should feel calm, caring, and even a little luxurious. Here's the story — and the people — behind that promise."
      >
        <Button href="/appointment" size="lg">Become a Patient</Button>
      </PageHero>

      {/* Story */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="group relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-electric-400/25 to-iris-500/25 blur-xl" aria-hidden="true" />
                <Photo
                  src={photos.clinicInterior}
                  alt="The bright, modern interior of Texas City Dental"
                  sizes="(max-width:1024px) 90vw, 40vw"
                  overlay="soft"
                  zoom
                  fallbackAccent="ocean"
                  className="relative aspect-[4/5] w-full rounded-[2.25rem] shadow-lift ring-1 ring-white/10"
                />
                <div className="absolute -bottom-5 -left-3 animate-float rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-slate-100 sm:-left-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <MapPin className="h-4 w-4 text-brand-600" /> Proudly local since {new Date().getFullYear() - site.stats.yearsServing}
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                align="left"
                eyebrow="A Practice Built on Care"
                title="Big-city dentistry with hometown heart"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Texas City Dental began with a simple frustration: too many people dread the
                  dentist. We set out to build something different — a practice where advanced,
                  world-class dentistry meets the warmth and familiarity of a neighborhood you know.
                </p>
                <p>
                  Today, our team of three dedicated doctors and a caring support staff serve
                  thousands of local families. We&apos;ve combined a beautiful, calming space with
                  the latest digital technology so every visit is comfortable, efficient, and a
                  little bit special.
                </p>
                <p>
                  Whether you&apos;re here for a six-month cleaning or a complete smile makeover,
                  our promise is the same: we&apos;ll listen carefully, treat you gently, and never
                  stop until your smile — and your experience — exceeds expectations.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services" variant="secondary">Our Services</Button>
                <Button href="/doctors" variant="ghost">Meet the Doctors →</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-mist/60 to-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every visit"
            lead="These four principles guide how we treat our patients, our community, and each other."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <span className="inline-grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <Stats />

      {/* Community blurb */}
      <section className="py-20 sm:py-24">
        <Container size="narrow">
          <Reveal>
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-card sm:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Users className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-ink sm:text-3xl">
                More than a dental office — part of the community
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-slate-600">
                We&apos;re honored to care for the families, teachers, first responders, and
                small-business owners who make Texas City special. When you sit in our chair,
                you&apos;re not a chart number — you&apos;re our neighbor.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Team preview */}
      <section className="bg-gradient-to-b from-white to-mist/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Team"
            title="The dentists you'll get to know by name"
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <StaggerItem key={d.slug} className="h-full">
                <DoctorCard doctor={d} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 flex justify-center">
            <Button href="/doctors" variant="secondary">Meet the full team</Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
