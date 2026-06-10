import Link from "next/link";
import { cn } from "@/lib/utils";
import { ToothMark } from "@/components/art/icons";

/**
 * Brand lockup: a gradient tooth badge + two-line wordmark. `tone` flips the
 * type colors for use on dark backgrounds (footer / hero overlays).
 */
export function Logo({
  tone = "dark",
  className,
  href = "/",
}: {
  tone?: "dark" | "light";
  className?: string;
  href?: string | null;
}) {
  const content = (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow ring-1 ring-white/20 transition-transform duration-300 group-hover:-translate-y-0.5">
        <ToothMark className="h-6 w-6 text-white" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-400 ring-2 ring-white/80" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-tight",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          Texas City
        </span>
        <span
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.34em]",
            tone === "light" ? "text-brand-200" : "text-brand-600",
          )}
        >
          Dental
        </span>
      </span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label="Texas City Dental, home" className="inline-flex">
      {content}
    </Link>
  );
}
