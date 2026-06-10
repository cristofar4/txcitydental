import type { SmileVariant } from "@/lib/data/gallery";

/**
 * Procedurally renders a stylised smile from a SmileVariant. Teeth are drawn as
 * a straight row and clipped to a mouth "lens", which trims them into a natural
 * smile arc. Shade, alignment, midline gap and chips are all data-driven so a
 * single component expresses every before/after case. Deterministic jitter keeps
 * server and client renders identical (no hydration mismatch).
 */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Stable pseudo-random in [0,1) from an integer seed. */
const rand = (i: number) => {
  const s = Math.sin(i * 127.1 + 11.7) * 43758.5453;
  return s - Math.floor(s);
};

const rgb = (arr: number[]) => `rgb(${arr.map((n) => Math.round(n)).join(",")})`;

function toothPath(w: number, h: number) {
  const rt = w * 0.3;
  const rb = w * 0.46;
  return `M0 ${rt} Q0 0 ${rt} 0 L${w - rt} 0 Q${w} 0 ${w} ${rt} L${w} ${
    h - rb
  } Q${w} ${h} ${w - rb} ${h} L${rb} ${h} Q0 ${h} 0 ${h - rb} Z`;
}

export function SmileArt({
  variant,
  uid = "smile",
  className,
}: {
  variant: SmileVariant;
  uid?: string;
  className?: string;
}) {
  const { shade, straightness, gap, chips } = variant;

  const count = 10;
  const cx = 210;
  const gumTop = 102;
  const gapPx = gap * 10;

  const top = rgb([lerp(196, 240, shade), lerp(180, 242, shade), lerp(138, 240, shade)]);
  const bottom = rgb([lerp(226, 255, shade), lerp(214, 255, shade), lerp(176, 255, shade)]);

  const widths: number[] = [];
  for (let i = 0; i < count; i++) {
    const d = Math.abs(i - (count - 1) / 2);
    widths.push(34 - d * 2.5);
  }
  const total = widths.reduce((a, b) => a + b, 0) + (count - 1) * 3 + gapPx;

  const teeth: React.ReactElement[] = [];
  let x = cx - total / 2;
  for (let i = 0; i < count; i++) {
    if (i === count / 2) x += gapPx;
    const w = widths[i];
    const d = Math.abs(i - (count - 1) / 2);
    const h = 84 - d * 2.4;
    const jitterY = (rand(i) - 0.5) * (1 - straightness) * 13;
    const jitterRot = (rand(i + 3) - 0.5) * (1 - straightness) * 15;
    const ty = gumTop + jitterY;
    const cxT = x + w / 2;

    teeth.push(
      <g key={i} transform={`translate(${x} ${ty}) rotate(${jitterRot} ${w / 2} 0)`}>
        <path d={toothPath(w, h)} fill={`url(#${uid}-tg)`} />
        {/* soft gloss highlight */}
        <path
          d={toothPath(w, h)}
          fill={`url(#${uid}-gloss)`}
          opacity={0.5}
        />
        {chips && (i === 4 || i === 6) && (
          <path
            d={`M${w * 0.32} ${h} L${w * 0.5} ${h - 9} L${w * 0.68} ${h} Z`}
            fill="#43232c"
            opacity={0.85}
          />
        )}
      </g>,
    );
    void cxT;
    x += w + 3;
  }

  return (
    <svg
      viewBox="0 0 420 300"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${uid}-tg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
        <linearGradient id={`${uid}-gloss`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.25" stopColor="white" stopOpacity="0.7" />
          <stop offset="0.4" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${uid}-bg`} cx="0.5" cy="0.35" r="0.9">
          <stop offset="0" stopColor="#fef2f3" />
          <stop offset="1" stopColor="#f6dee1" />
        </radialGradient>
        <linearGradient id={`${uid}-lip`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e98a96" />
          <stop offset="1" stopColor="#d96b7c" />
        </linearGradient>
        <clipPath id={`${uid}-mouth`}>
          <path d="M45 118 Q210 94 375 118 Q210 214 45 118 Z" />
        </clipPath>
      </defs>

      {/* soft skin / background wash */}
      <rect x="0" y="0" width="420" height="300" fill={`url(#${uid}-bg)`} />

      {/* lips */}
      <path d="M38 116 Q210 80 382 116 Q210 226 38 116 Z" fill={`url(#${uid}-lip)`} />
      <path
        d="M38 116 Q210 80 382 116"
        fill="none"
        stroke="#c95767"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* inner mouth */}
      <path d="M45 118 Q210 94 375 118 Q210 214 45 118 Z" fill="#451f29" />

      {/* teeth, trimmed into a smile by the mouth clip */}
      <g clipPath={`url(#${uid}-mouth)`}>
        {/* lower teeth hint */}
        <path d="M70 196 Q210 240 350 196 L350 214 Q210 252 70 214 Z" fill="#ead9c4" opacity="0.55" />
        {teeth}
      </g>
    </svg>
  );
}
