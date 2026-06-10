import type { Metadata } from "next";
import { Hand, Sparkles, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryCases } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "Browse real before and after smile transformations from Texas City Dental, veneers, whitening, clear aligners, implants, crowns, and bonding.",
  alternates: { canonical: "/smile-gallery" },
};

const notes = [
  { icon: Hand, title: "Drag to compare", text: "Slide each image to reveal the before and after." },
  { icon: Sparkles, title: "Real results", text: "Every case reflects the artistry of our doctors." },
  { icon: ShieldCheck, title: "Yours could be next", text: "Book a consult to preview your own new smile." },
];

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile Gallery"
        breadcrumb="Smile Gallery"
        title={
          <>
            Before &amp; after:{" "}
            <span className="text-gradient-electric">smiles transformed</span>
          </>
        }
        lead="Slide through real transformations crafted by our team. From subtle refinements to complete makeovers, see what's possible for your smile."
      />

      {/* helper notes */}
      <section className="pt-4">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {notes.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.title}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{n.title}</p>
                    <p className="text-xs text-slate-500">{n.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* gallery */}
      <section className="py-14 sm:py-16">
        <Container>
          <Reveal>
            <GalleryGrid cases={galleryCases} />
          </Reveal>
        </Container>
      </section>

      {/* disclaimer */}
      <Container size="narrow">
        <p className="rounded-2xl bg-mist/70 px-5 py-4 text-center text-xs leading-relaxed text-slate-500">
          Illustrative representations of common treatment outcomes. Individual results vary.
          Your dentist will review realistic expectations during your personalized consultation.
        </p>
      </Container>

      <CTASection
        title="Ready to start your transformation?"
        subtitle="Book a complimentary smile consultation and we'll show you exactly what's possible, with a digital preview of your new smile."
      />
    </>
  );
}
