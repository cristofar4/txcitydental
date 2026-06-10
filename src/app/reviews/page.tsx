import type { Metadata } from "next";
import { Star, Quote, ExternalLink, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { Button } from "@/components/ui/Button";
import { MonogramAvatar } from "@/components/art/Portrait";
import { Photo } from "@/components/media/Photo";
import { TestimonialsCarousel } from "@/components/reviews/TestimonialsCarousel";
import { testimonials } from "@/lib/data/testimonials";
import { getReviewerPhoto } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read why Texas City families rate us 4.9/5. Real reviews about comfortable, expert dental care at Texas City Dental.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Reviews"
        breadcrumb="Reviews"
        title={
          <>
            Trusted by thousands of{" "}
            <span className="text-gradient-electric">Texas City smiles</span>
          </>
        }
        lead="We're proud of the relationships we've built — but our patients say it best. Here's what your neighbors think of their experience."
      />

      {/* Rating summary */}
      <section className="pb-8 pt-4">
        <Container size="narrow">
          <Reveal>
            <div className="grid items-center gap-6 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card sm:grid-cols-[auto_1fr] sm:p-10">
              <div className="text-center sm:border-r sm:border-slate-100 sm:pr-10">
                <p className="font-display text-6xl font-semibold text-ink">{site.stats.rating}</p>
                <Stars rating={site.stats.rating} size={20} className="mt-2 justify-center" />
                <p className="mt-2 text-sm text-slate-500">{site.stats.reviewCount}+ verified reviews</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Would recommend us", value: "99%" },
                  { label: "Rate comfort 5 stars", value: "97%" },
                  { label: "Seen on time", value: "96%" },
                  { label: "Patients who return", value: "94%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-mist/70 p-4">
                    <p className="font-display text-2xl font-semibold text-brand-700">{s.value}</p>
                    <p className="text-sm text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured carousel */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading eyebrow="In Their Words" title="Featured patient stories" />
          <div className="mt-12">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </Container>
      </section>

      {/* All reviews masonry */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="break-inside-avoid rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <Stars rating={t.rating} size={16} />
                  <Quote className="h-7 w-7 text-brand-100" />
                </div>
                <blockquote className="mt-4 text-pretty text-[0.95rem] leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-50 pt-4">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                    <Photo
                      src={getReviewerPhoto(i)}
                      alt={t.name}
                      sizes="44px"
                      className="h-full w-full rounded-full"
                      fallback={<MonogramAvatar initials={t.initials} accent={t.accent} className="h-full w-full text-sm" />}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-500">
                      <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
                      {t.treatment}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-mist/70 px-6 py-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-gold-500 shadow-soft">
                <Star className="h-7 w-7 fill-gold-400 text-gold-400" />
              </span>
              <h2 className="text-2xl font-semibold text-ink">Loved your visit?</h2>
              <p className="max-w-md text-sm text-slate-600">
                Your review helps other families find the gentle, expert care they deserve. We&apos;d be so grateful.
              </p>
              <Button href={site.social.google} variant="secondary">
                Leave us a review <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Experience five-star dentistry yourself" />
    </>
  );
}
