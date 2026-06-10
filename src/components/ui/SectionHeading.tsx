import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "light"
          ? "bg-white/10 text-brand-100 ring-1 ring-white/20"
          : "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-gold-400" : "bg-brand-500",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "dark",
  className,
  as: TitleTag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <TitleTag
        className={cn(
          "text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[2.85rem]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </TitleTag>
      {lead && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            align === "center" ? "mx-auto" : "",
            tone === "light" ? "text-brand-100/85" : "text-slate-600",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
