/**
 * Accent palette for service cards, doctor avatars, testimonials and gallery
 * cases. Returned as raw hex so components can build gradients via inline
 * styles, this sidesteps Tailwind's static class detection for dynamic keys.
 *
 * Themed in the emerald / teal / jade / champagne family so the whole UI stays
 * cohesive and premium (no stray blues or purples).
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
  azure: { from: "#10b981", to: "#047857", soft: "#e7f8f0", ring: "#a7f3d0", text: "#047857" },
  ocean: { from: "#0d9488", to: "#064e3b", soft: "#e3f5f0", ring: "#99e7d8", text: "#0f766e" },
  teal: { from: "#14b8a6", to: "#0f766e", soft: "#e0f7f3", ring: "#99eede", text: "#0f766e" },
  indigo: { from: "#34a884", to: "#115e45", soft: "#e6f6ee", ring: "#a7e8cf", text: "#15643f" },
  violet: { from: "#2bb3a3", to: "#0f5e57", soft: "#e2f5f2", ring: "#a3e8df", text: "#0f766e" },
  sky: { from: "#5eead4", to: "#14b8a6", soft: "#e0fbf4", ring: "#b6f0e4", text: "#0f766e" },
  gold: { from: "#d9bf7c", to: "#ad8c45", soft: "#f7f0dd", ring: "#ecdcae", text: "#8a6d2f" },
};

export const accentGradient = (key: AccentKey) => {
  const a = accents[key];
  return `linear-gradient(135deg, ${a.from}, ${a.to})`;
};

export const getAccent = (key: AccentKey) => accents[key];
