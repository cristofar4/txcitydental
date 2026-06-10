import type { SVGProps } from "react";
import type { ServiceIcon as ServiceIconKey } from "@/lib/data/services";

/**
 * Custom, hand-authored dental line icons. lucide-react covers generic UI
 * glyphs (phone, star, calendar…); these give the service set a bespoke,
 * on-brand character that stock icon libraries can't.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Solid tooth mark used inside the logo badge. */
export function ToothMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.4 2.8C5.3 2.8 3.6 4.5 3.6 6.9c0 1.7.5 3.2.9 5 .3 1.5.5 3.1.7 5.1.16 1.6.5 2.7 1.3 2.7.9 0 1.1-1 1.35-2.6.25-1.5.45-2.5 1.4-2.5s1.15 1 1.4 2.5c.25 1.6.45 2.6 1.35 2.6.8 0 1.14-1.1 1.3-2.7.2-2 .4-3.6.7-5.1.4-1.8.9-3.3.9-5 0-2.4-1.7-4.1-3.8-4.1-1.8 0-2.8 1.05-4.05 1.05S9.2 2.8 7.4 2.8Z" />
    </svg>
  );
}

function Tooth(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7.6 3.4C5.7 3.4 4.2 5 4.2 7.1c0 1.6.5 3 .9 4.7.3 1.4.5 2.9.7 4.7.15 1.5.45 2.6 1.2 2.6.85 0 1.05-1 1.3-2.5.24-1.45.42-2.4 1.3-2.4.88 0 1.06.95 1.3 2.4.25 1.5.45 2.5 1.3 2.5.75 0 1.05-1.1 1.2-2.6.2-1.8.4-3.3.7-4.7.4-1.7.9-3.1.9-4.7 0-2.1-1.5-3.7-3.4-3.7-1.6 0-2.5.95-3.65.95S9.2 3.4 7.6 3.4Z" />
    </svg>
  );
}

function Sparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2c.4 3.6 1.9 5.1 5.5 5.5-3.6.4-5.1 1.9-5.5 5.5-.4-3.6-1.9-5.1-5.5-5.5 3.6-.4 5.1-1.9 5.5-5.5Z" />
      <path d="M18.5 14.2c.18 1.6.84 2.26 2.45 2.44-1.6.18-2.27.84-2.45 2.45-.18-1.6-.84-2.27-2.44-2.45 1.6-.18 2.26-.84 2.44-2.44Z" />
    </svg>
  );
}

function Smile(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.5c2.4-1.4 5.1-2.1 8-2.1s5.6.7 8 2.1" />
      <path d="M5.4 9.2c.7 4 3.3 6.9 6.6 6.9s5.9-2.9 6.6-6.9" />
      <path d="M9 8v3.1M12 7.9v3.4M15 8v3.1" />
    </svg>
  );
}

function Scalpel(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3.5 20 9l-9 1.2L14.5 3.5Z" />
      <path d="m11 10.2-7 7a2.1 2.1 0 0 0 3 3l5.4-7" />
      <path d="m5.5 15.7 2.8 2.8" />
    </svg>
  );
}

function Child(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="6.4" r="2.7" />
      <path d="M7.5 20v-3.4a4.5 4.5 0 0 1 9 0V20" />
      <path d="M10 13.7c.6.5 1.2.7 2 .7s1.4-.2 2-.7" />
    </svg>
  );
}

function Shield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 5 5.8v5c0 4.3 2.9 7.3 7 8.6 4.1-1.3 7-4.3 7-8.6v-5L12 3.2Z" />
      <path d="m9.2 11.6 2 2 3.6-3.8" />
    </svg>
  );
}

function Crown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.5 7 13l5-7 5 7 3-4.5-1.6 9.2H5.6L4 8.5Z" />
      <path d="M5.6 17.7h12.8" />
    </svg>
  );
}

const map: Record<ServiceIconKey, (p: IconProps) => React.ReactElement> = {
  tooth: Tooth,
  sparkle: Sparkle,
  smile: Smile,
  scalpel: Scalpel,
  child: Child,
  shield: Shield,
  crown: Crown,
};

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconKey } & IconProps) {
  const Cmp = map[name] ?? Tooth;
  return <Cmp {...props} />;
}
