import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import { Hero, TrustBar } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { BeforeAfter } from "@/components/gallery/BeforeAfter";
import { TestimonialsCarousel } from "@/components/reviews/TestimonialsCarousel";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { FaqSchema } from "@/components/seo/StructuredData";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { testimonials } from "@/lib/data/testimonials";
import { faqs } from "@/lib/data/faqs";
import { galleryCases } from "@/lib/data/gallery";

export default function HomePage() {
  const previewCases = galleryCases.slice(0, 2);
  const previewFaqs = faqs.slice(0, 5);

  return (
    <>
      <Hero />
      <TrustBar />
      <Welcome />

      {/* Services */}
      <section id="services" className="relative bg-gradient-to-b from-white to-mist/60 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              align="left"
              className="max-w-2xl"
              eyebrow="Comprehensive Care"
              title={
                <>
                  Every service your family needs,{" "}
                  <span className="text-gradient">beautifully delivered</span>
                </>
              }
              lead="From routine check ups to complete smile transformations, our full range of services is delivered with comfort, artistry, and precision."
            />
            <Button href="/services" variant="ghost" className="hidden shrink-0 sm:inline-flex">
              View all services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
            {/* CTA card to balance the grid */}
            <StaggerItem className="h-full">
              <Link
                href="/contact"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-mesh p-7 text-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                    <MessageCircleQuestion className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">Not sure what you need?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/85">
                    Tell us your goals, we&apos;ll recommend the right care, no pressure.
                  </p>
                </div>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
                  Talk to our team
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <WhyChooseUs />

      {/* Smile gallery preview */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-10" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="Real Transformations"
            title="See the smiles we've crafted"
            lead="Drag the slider to reveal stunning before and after results from real treatments at Texas City Dental."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {previewCases.map((c) => (
              <Reveal key={c.id}>
                <figure className="rounded-[2rem] bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
                  <BeforeAfter before={c.before} after={c.after} uid={c.id} />
                  <figcaption className="flex items-center justify-between px-3 py-3">
                    <div>
                      <p className="font-semibold text-white">{c.title}</p>
                      <p className="text-sm text-brand-100/70">{c.treatment}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-100">
                      {c.doctor}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/smile-gallery" variant="gold" size="lg">
              Explore the Smile Gallery <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      <Stats />

      {/* Doctors preview */}
      <section className="relative py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Meet Your Dentists"
            title={
              <>
                Skilled hands, <span className="text-gradient">warm hearts</span>
              </>
            }
            lead="Three experienced doctors united by one mission: making exceptional, gentle dentistry feel personal."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <StaggerItem key={d.slug} className="h-full">
                <DoctorCard doctor={d} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <Process />

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mist/60 to-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Loved by Our Patients"
            title="Five star care, in their words"
            lead={`Don't just take our word for it, here's what Texas City families say about their experience.`}
          />
          <div className="mt-12">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/reviews" variant="secondary">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently asked questions"
            lead="Everything you need to know before your first visit. Still curious? We're always happy to help."
          />
          <div className="mt-12">
            <FAQAccordion faqs={previewFaqs} />
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Have another question?{" "}
            <Link href="/contact" className="font-semibold text-brand-700 hover:text-brand-600">
              Get in touch →
            </Link>
          </p>
        </Container>
      </section>

      <CTASection />
      <FaqSchema />
    </>
  );
}
