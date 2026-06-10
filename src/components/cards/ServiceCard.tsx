import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAccent, accentGradient } from "@/lib/accents";
import { ServiceIcon } from "@/components/art/icons";
import type { Service } from "@/lib/data/services";

/**
 * Interactive service card. Pure-CSS hover choreography (lift, icon shift,
 * accent glow) keeps it a fast server component. `withHighlights` shows the
 * benefit checklist used on the Services page grid.
 */
export function ServiceCard({
  service,
  withHighlights = false,
  href,
}: {
  service: Service;
  withHighlights?: boolean;
  href?: string;
}) {
  const accent = getAccent(service.accent);
  const link = href ?? `/services#${service.slug}`;

  return (
    <Link
      href={link}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lift"
    >
      {/* accent glow on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: accent.soft }}
      />
      {/* top accent line */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: accentGradient(service.accent) }}
      />

      <div className="relative">
        <span
          className="inline-grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-3"
          style={{ background: accentGradient(service.accent) }}
        >
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>

        <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>

        {withHighlights && (
          <ul className="mt-5 space-y-2">
            {service.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: accent.from }}
                />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative mt-6 flex items-center gap-1.5 pt-2 text-sm font-semibold" style={{ color: accent.text }}>
        <span className={cn("transition-all", "group-hover:mr-0.5")}>Explore {service.title}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
