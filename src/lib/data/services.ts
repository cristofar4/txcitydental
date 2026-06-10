/**
 * Service catalog, powers the interactive service cards, the Services page,
 * and per-service detail sections. Icons are referenced by key and mapped to
 * components in the UI layer so this stays a plain, serializable data module.
 */

export type ServiceIcon =
  | "tooth"
  | "sparkle"
  | "smile"
  | "scalpel"
  | "child"
  | "shield"
  | "crown";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: ServiceIcon;
  /** Accent key drives the card's gradient + halo so the grid feels rich but on-brand. */
  accent: "azure" | "teal" | "indigo" | "gold" | "sky" | "violet" | "ocean";
  highlights: string[];
  treatments: string[];
  /** Patient friendly note shown on the detail panel. */
  goodToKnow: string;
  /** Reassuring "starting from" framing, kept soft, no hard pricing claims. */
  priceNote: string;
}

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    short: "Comprehensive, preventive care for a lifetime of healthy smiles.",
    description:
      "From comprehensive oral exams to gentle restorations, our general dentistry keeps your whole family healthy with care built around prevention. We use digital imaging and a light touch approach so every visit feels calm and unhurried.",
    icon: "tooth",
    accent: "azure",
    highlights: [
      "Comprehensive oral exams & digital X rays",
      "Tooth colored fillings & restorations",
      "Gum health & periodontal therapy",
      "Same day emergency appointments",
    ],
    treatments: [
      "Comprehensive Oral Exams",
      "Digital X Rays",
      "Tooth Colored Fillings",
      "Root Canal Therapy",
      "Periodontal (Gum) Care",
      "Emergency Dentistry",
    ],
    goodToKnow:
      "We recommend a check up and professional cleaning every six months to catch issues early, when they're simplest and most affordable to treat.",
    priceNote: "New patient exams from $59",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    short: "Artistry driven smile design for a confident, natural glow.",
    description:
      "Whether you want a subtle refinement or a full smile makeover, our cosmetic dentistry blends science and artistry. We design every result around your facial features for a smile that looks luminous, and unmistakably yours.",
    icon: "sparkle",
    accent: "gold",
    highlights: [
      "Custom porcelain veneers",
      "Professional teeth whitening",
      "Composite bonding & reshaping",
      "Full digital smile design preview",
    ],
    treatments: [
      "Porcelain Veneers",
      "Professional Teeth Whitening",
      "Cosmetic Bonding",
      "Smile Makeovers",
      "Gum Contouring",
      "Tooth Colored Restorations",
    ],
    goodToKnow:
      "Your smile design starts with a digital preview, so you can see and refine your new look before any treatment begins.",
    priceNote: "Whitening from $299",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    short: "Clear, modern teeth straightening for adults and teens.",
    description:
      "Straighten your smile discreetly with clear aligners and modern orthodontics. We map your full treatment in 3D up front, so you know exactly how your smile will transform, and how long it will take.",
    icon: "smile",
    accent: "teal",
    highlights: [
      "Clear aligner therapy",
      "3D treatment planning & previews",
      "Discreet, removable appliances",
      "Options for teens & adults",
    ],
    treatments: [
      "Clear Aligners",
      "Traditional & Ceramic Braces",
      "Bite Correction",
      "Space Management",
      "Retainers",
      "Orthodontic Consultations",
    ],
    goodToKnow:
      "Most clear aligner cases complete in 6 to 18 months. We'll give you a precise timeline at your complimentary consultation.",
    priceNote: "Flexible monthly plans available",
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    short: "Precise, comfortable surgical care, right here in office.",
    description:
      "From wisdom teeth to dental implants, our team performs surgical care with precision and genuine comfort in mind. Sedation options and a calm, modern suite mean you're relaxed from start to finish.",
    icon: "scalpel",
    accent: "ocean",
    highlights: [
      "Dental implant placement",
      "Wisdom tooth removal",
      "Sedation & comfort options",
      "Bone grafting & site preservation",
    ],
    treatments: [
      "Dental Implants",
      "Wisdom Tooth Extraction",
      "Tooth Extractions",
      "Bone Grafting",
      "Sinus Lifts",
      "Sedation Dentistry",
    ],
    goodToKnow:
      "Dental implants look, feel, and function like natural teeth, and with proper care, they can last a lifetime.",
    priceNote: "Implant consultations complimentary",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Gentle, fun first dental care that kids actually look forward to.",
    description:
      "We make dentistry a positive experience from the very first visit. Our team specializes in gentle, kid friendly care that builds healthy habits and turns nervous little patients into confident smilers.",
    icon: "child",
    accent: "sky",
    highlights: [
      "Kid friendly, anxiety free visits",
      "Sealants & fluoride protection",
      "Early growth & bite monitoring",
      "Parent friendly education",
    ],
    treatments: [
      "Children's Cleanings & Exams",
      "Dental Sealants",
      "Fluoride Treatments",
      "Cavity Care",
      "Habit Counseling",
      "Mouthguards",
    ],
    goodToKnow:
      "We recommend a child's first dental visit by their first birthday, early visits build lifelong comfort and confidence.",
    priceNote: "Welcoming new young patients",
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    short: "Refreshing professional cleanings that protect and polish.",
    description:
      "A professional cleaning does more than brighten your smile, it protects your long term health. Our hygienists gently remove plaque and tartar, then polish for that just left the dentist freshness.",
    icon: "shield",
    accent: "indigo",
    highlights: [
      "Gentle plaque & tartar removal",
      "Polishing & stain reduction",
      "Personalized home care coaching",
      "Deep cleaning options when needed",
    ],
    treatments: [
      "Routine Cleanings",
      "Deep Cleanings (Scaling)",
      "Tartar & Plaque Removal",
      "Stain Polishing",
      "Gum Health Assessment",
      "Oral Cancer Screening",
    ],
    goodToKnow:
      "Pairing cleanings with your six month exam is the single most effective way to prevent cavities and gum disease.",
    priceNote: "Cleanings from $89",
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    short: "Natural looking restorations that rebuild strength and beauty.",
    description:
      "Restore damaged or missing teeth with crowns and bridges crafted to match your natural smile. We use durable, lifelike porcelain so your restoration blends in seamlessly and stands up to everyday life.",
    icon: "crown",
    accent: "violet",
    highlights: [
      "Lifelike porcelain crowns",
      "Fixed bridges for missing teeth",
      "Precision digital impressions",
      "Durable, long lasting materials",
    ],
    treatments: [
      "Porcelain Crowns",
      "Dental Bridges",
      "Implant-Supported Crowns",
      "Inlays & Onlays",
      "Digital Impressions",
      "Restoration Repairs",
    ],
    goodToKnow:
      "Modern digital impressions mean no goopy molds, just a quick, comfortable scan for a precise, great fitting result.",
    priceNote: "Financing options available",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
