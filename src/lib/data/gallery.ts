/**
 * Smile gallery cases. Because the redesign ships with a self-contained visual
 * system, each case describes a "before" and "after" smile that the SmileArt
 * SVG renders procedurally (shade, alignment, spacing, chips). To use real
 * clinical photography instead, set `beforeImg` / `afterImg` to image paths and
 * the BeforeAfter component will use them automatically.
 */

export interface SmileVariant {
  /** 0 = stained/yellow, 1 = bright white. */
  shade: number;
  /** 0 = crooked, 1 = perfectly aligned. */
  straightness: number;
  /** 0 = no gap, 1 = wide midline gap. */
  gap: number;
  /** Visible chips/wear on the edges. */
  chips: boolean;
}

export interface GalleryCase {
  id: string;
  title: string;
  treatment: string;
  description: string;
  doctor: string;
  accent: "ocean" | "teal" | "indigo" | "gold" | "violet";
  before: SmileVariant;
  after: SmileVariant;
  beforeImg?: string;
  afterImg?: string;
}

export const galleryCases: GalleryCase[] = [
  {
    id: "veneers-01",
    title: "Porcelain Veneers",
    treatment: "Cosmetic Dentistry",
    description:
      "A full smile makeover with hand-crafted porcelain veneers — closing gaps and brightening shade for a luminous, natural result.",
    doctor: "Dr. Sushmita Rath",
    accent: "gold",
    before: { shade: 0.35, straightness: 0.45, gap: 0.7, chips: true },
    after: { shade: 0.98, straightness: 1, gap: 0, chips: false },
  },
  {
    id: "whitening-01",
    title: "Professional Whitening",
    treatment: "Teeth Whitening",
    description:
      "Years of coffee and wine stains lifted in a single in-office whitening session for a noticeably brighter smile.",
    doctor: "Dr. Sushmita Rath",
    accent: "teal",
    before: { shade: 0.3, straightness: 0.9, gap: 0.1, chips: false },
    after: { shade: 0.97, straightness: 0.95, gap: 0.05, chips: false },
  },
  {
    id: "aligners-01",
    title: "Clear Aligner Therapy",
    treatment: "Orthodontics",
    description:
      "Crowded, overlapping front teeth gently guided into perfect alignment with a discreet clear-aligner plan.",
    doctor: "Dr. Kapil Mangla",
    accent: "ocean",
    before: { shade: 0.7, straightness: 0.2, gap: 0.15, chips: false },
    after: { shade: 0.9, straightness: 1, gap: 0, chips: false },
  },
  {
    id: "implant-01",
    title: "Single Tooth Implant",
    treatment: "Oral Surgery",
    description:
      "A missing front tooth restored with a natural-looking implant crown that blends seamlessly with the surrounding smile.",
    doctor: "Dr. Kamran Shaikh",
    accent: "indigo",
    before: { shade: 0.6, straightness: 0.85, gap: 0.85, chips: true },
    after: { shade: 0.92, straightness: 0.95, gap: 0, chips: false },
  },
  {
    id: "crowns-01",
    title: "Crowns & Bridge",
    treatment: "Crowns & Bridges",
    description:
      "Worn and damaged teeth rebuilt with lifelike porcelain crowns and a fixed bridge for renewed strength and beauty.",
    doctor: "Dr. Kapil Mangla",
    accent: "violet",
    before: { shade: 0.4, straightness: 0.5, gap: 0.4, chips: true },
    after: { shade: 0.95, straightness: 1, gap: 0, chips: false },
  },
  {
    id: "bonding-01",
    title: "Composite Bonding",
    treatment: "Cosmetic Dentistry",
    description:
      "A chipped front tooth and small gaps refined in a single visit with artful, tooth-colored composite bonding.",
    doctor: "Dr. Sushmita Rath",
    accent: "gold",
    before: { shade: 0.65, straightness: 0.7, gap: 0.5, chips: true },
    after: { shade: 0.94, straightness: 0.95, gap: 0.05, chips: false },
  },
];
