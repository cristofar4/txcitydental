import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Shared hero for interior pages — clears the fixed header and sets the tone. */
export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumb?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-mist to-cloud pb-16 pt-32 sm:pb-20 lg:pt-44",
        className,
      )}
    >
      {/* decorative field */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60 mask-fade-b" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500">
            <Link href="/" className="transition-colors hover:text-brand-700">
              Home
            </Link>
            {breadcrumb && (
              <>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-brand-700">{breadcrumb}</span>
              </>
            )}
          </nav>
        </Reveal>

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
                {lead}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
