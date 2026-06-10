/**
 * Accent palette for service cards, doctor avatars, testimonials and gallery
 * cases. Returned as raw hex so components can build gradients via inline
 * styles, this sidesteps Tailwind's static class detection for dynamic keys.
 */

export type AccentKey =
  | "azure"
  | "teal"
  | "indigo"
  | "gold"
  | "sky"
  | "violet"
  | "ocean";

export interface Accent {
  from: string;
  to: string;
  /** Soft tinted surface for halos / icon chips. */
  soft: string;
  /** Mid tone for borders / rings. */
  ring: string;
  /** Readable text tone on light surfaces. */
  text: string;
}

export const accents: Record<AccentKey, Accent> = {
  azure: { from: "#3884ef", to: "#1c52b0", soft: "#eaf2fe", ring: "#bedcfd", text: "#1c52b0" },
  ocean: { from: "#2167d6", to: "#132646", soft: "#e9f0fc", ring: "#bcd3f6", text: "#1c478f" },
  teal: { from: "#22b8c4", to: "#0e7490", soft: "#e2f7f9", ring: "#b6e9ee", text: "#0e7490" },
  indigo: { from: "#6366f1", to: "#3730a3", soft: "#ecedfd", ring: "#c9caf8", text: "#4338ca" },
  violet: { from: "#a855f7", to: "#6d28d9", soft: "#f4ecfe", ring: "#e0c9fb", text: "#6d28d9" },
  sky: { from: "#38bdf8", to: "#0284c7", soft: "#e4f5fe", ring: "#bce6fb", text: "#0369a1" },
  gold: { from: "#d9bf7c", to: "#ad8c45", soft: "#f7f0dd", ring: "#ecdcae", text: "#8a6d2f" },
};

export const accentGradient = (key: AccentKey) => {
  const a = accents[key];
  return `linear-gradient(135deg, ${a.from}, ${a.to})`;
};

export const getAccent = (key: AccentKey) => accents[key];
