import { cn } from "@/lib/utils";
import { accentGradient, getAccent, type AccentKey } from "@/lib/accents";

/** Small circular monogram used in reviews, lists and doctor chips. */
export function MonogramAvatar({
  initials,
  accent,
  className,
}: {
  initials: string;
  accent: AccentKey;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-grid place-items-center rounded-full font-display font-semibold text-white shadow-sm ring-2 ring-white/70",
        className,
      )}
      style={{ background: accentGradient(accent) }}
    >
      {initials}
    </span>
  );
}

/**
 * Tall illustrated "portrait" placeholder for doctor cards. A designed,
 * on-brand stand-in for photography — drop a real headshot into /public/doctors
 * and pass `photo` to DoctorCard to use it instead.
 */
export function DoctorPortrait({
  initials,
  accent,
  className,
}: {
  initials: string;
  accent: AccentKey;
  className?: string;
}) {
  const a = getAccent(accent);
  return (
    <svg
      viewBox="0 0 400 480"
      className={cn("h-full w-full", className)}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`p-${initials}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a.from} />
          <stop offset="1" stopColor={a.to} />
        </linearGradient>
        <radialGradient id={`pg-${initials}`} cx="0.5" cy="0.32" r="0.75">
          <stop offset="0" stopColor="white" stopOpacity="0.32" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <pattern id={`pd-${initials}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="white" opacity="0.10" />
        </pattern>
      </defs>

      <rect width="400" height="480" fill={`url(#p-${initials})`} />
      <rect width="400" height="480" fill={`url(#pd-${initials})`} />
      <rect width="400" height="480" fill={`url(#pg-${initials})`} />

      {/* floating accents */}
      <circle cx="330" cy="90" r="46" fill="white" opacity="0.10" />
      <circle cx="64" cy="150" r="26" fill="white" opacity="0.08" />

      {/* figure silhouette */}
      <g fill="white">
        <path
          d="M60 480c0-92 63-150 140-150s140 58 140 150Z"
          opacity="0.18"
        />
        <circle cx="200" cy="246" r="74" opacity="0.22" />
        {/* lab-coat collar */}
        <path
          d="M150 352l50 40 50-40 18 22-68 60-68-60Z"
          opacity="0.16"
        />
      </g>

      {/* monogram badge */}
      <g>
        <circle cx="200" cy="250" r="50" fill="white" opacity="0.16" />
        <text
          x="200"
          y="250"
          dominantBaseline="central"
          textAnchor="middle"
          fontFamily="var(--font-display), serif"
          fontSize="46"
          fontWeight="600"
          fill="white"
        >
          {initials}
        </text>
      </g>
    </svg>
  );
}
