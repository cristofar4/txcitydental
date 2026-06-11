import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVideo } from "@/components/home/HeroVideo";

/** Shared dark hero for interior pages, clears the floating header. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Accepted for backwards compatibility; no longer rendered. */
  breadcrumb?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("noise relative isolate overflow-hidden bg-void pb-20 pt-36 lg:pb-24 lg:pt-48", className)}>
      {/* Moving video backdrop with the same 3D camera feel as the home hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-aurora animate-aurora" aria-hidden="true" />
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden="true" />
        <HeroVideo />
        {/* heavier veil here so the centered heading stays crisp over the video */}
        <div className="absolute inset-0 bg-void/72" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/55" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-dark opacity-20 mask-fade-b" aria-hidden="true" />
      </div>

      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-electric-500/20 blur-[110px] animate-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-28 h-80 w-80 rounded-full bg-iris-500/20 blur-[120px] animate-glow [animation-delay:1.5s]" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow && (
            <Reveal y={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl leading-[1.06] text-white sm:text-5xl lg:text-[3.7rem]">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.16}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-brand-100/80">{lead}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.24}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
