import type { ReactElement } from "react";

/**
 * A clean, frontal smile used for the before/after slider. The geometry is
 * identical for both variants (whitening does not move teeth), only the tooth
 * color changes: "before" is stained / brown, "after" is bright white. This is
 * rendered as SVG so it always shows and stays perfectly on palette.
 */

const TEETH = 10;

function toothPath(w: number, h: number) {
  const rt = w * 0.34;
  const rb = w * 0.46;
  return `M0 ${rt} Q0 0 ${rt} 0 L${w - rt} 0 Q${w} 0 ${w} ${rt} L${w} ${
    h - rb
  } Q${w} ${h} ${w - rb} ${h} L${rb} ${h} Q0 ${h} 0 ${h - rb} Z`;
}

export function SmileGraphic({
  variant,
  uid = "smile",
  className,
}: {
  variant: "before" | "after";
  uid?: string;
  className?: string;
}) {
  const before = variant === "before";
  const toothTop = before ? "#b88c44" : "#edf1ec";
  const toothBottom = before ? "#e4c87f" : "#ffffff";

  const cx = 210;
  const gumTop = 104;
  const widths: number[] = [];
  for (let i = 0; i < TEETH; i++) {
    const d = Math.abs(i - (TEETH - 1) / 2);
    widths.push(36 - d * 2.4);
  }
  const total = widths.reduce((a, b) => a + b, 0) + (TEETH - 1) * 3;

  let x = cx - total / 2;
  const teeth: ReactElement[] = [];
  for (let i = 0; i < TEETH; i++) {
    const w = widths[i];
    const d = Math.abs(i - (TEETH - 1) / 2);
    const h = 86 - d * 2.2;
    teeth.push(
      <g key={i} transform={`translate(${x} ${gumTop})`}>
        <path d={toothPath(w, h)} fill={`url(#${uid}-tooth)`} stroke={before ? "#9b7531" : "#e2e8e1"} strokeWidth="0.6" />
        {before && <path d={toothPath(w, h)} fill={`url(#${uid}-stain)`} opacity="0.55" />}
        <path d={toothPath(w, h)} fill={`url(#${uid}-gloss)`} opacity="0.5" />
      </g>,
    );
    x += w + 3;
  }

  return (
    <svg viewBox="0 0 420 300" className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${uid}-tooth`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={toothTop} />
          <stop offset="1" stopColor={toothBottom} />
        </linearGradient>
        <linearGradient id={`${uid}-stain`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#74531f" stopOpacity="0.75" />
          <stop offset="0.5" stopColor="#9c7836" stopOpacity="0.18" />
          <stop offset="1" stopColor="#9c7836" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-gloss`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.28" stopColor="white" stopOpacity="0.7" />
          <stop offset="0.45" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${uid}-bg`} cx="0.5" cy="0.4" r="0.85">
          <stop offset="0" stopColor="#fff3f3" />
          <stop offset="1" stopColor="#f2d7da" />
        </radialGradient>
        <linearGradient id={`${uid}-lip`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e98a96" />
          <stop offset="1" stopColor="#d2697a" />
        </linearGradient>
        <clipPath id={`${uid}-mouth`}>
          <path d="M45 118 Q210 92 375 118 Q210 216 45 118 Z" />
        </clipPath>
      </defs>

      <rect width="420" height="300" fill={`url(#${uid}-bg)`} />

      {/* lips */}
      <path d="M36 116 Q210 78 384 116 Q210 228 36 116 Z" fill={`url(#${uid}-lip)`} />
      <path d="M36 116 Q210 78 384 116" fill="none" stroke="#c4546a" strokeWidth="2" opacity="0.45" />

      {/* inner mouth */}
      <path d="M45 118 Q210 92 375 118 Q210 216 45 118 Z" fill="#48202a" />

      <g clipPath={`url(#${uid}-mouth)`}>
        {/* upper gum */}
        <path d="M45 118 Q210 92 375 118 L375 134 Q210 110 45 134 Z" fill="#e0929d" />
        {/* lower teeth hint */}
        <path d="M72 196 Q210 240 348 196 L348 214 Q210 250 72 214 Z" fill={before ? "#cba86f" : "#eee7da"} opacity="0.6" />
        {/* upper teeth */}
        {teeth}
        {/* soft inner shadow under the lip line */}
        <path d="M45 118 Q210 92 375 118 L375 126 Q210 100 45 126 Z" fill="#3a1820" opacity="0.35" />
      </g>
    </svg>
  );
}
