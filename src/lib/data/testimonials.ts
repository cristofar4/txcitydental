/**
 * Patient testimonials for the reviews carousel and the Reviews page.
 * Placeholder content representative of a 5-star local dental practice —
 * swap with real, attributed Google reviews before launch.
 */

export interface Testimonial {
  name: string;
  initials: string;
  location: string;
  rating: number;
  quote: string;
  /** Short label for what they came in for — adds credibility + context. */
  treatment: string;
  accent: "ocean" | "teal" | "indigo" | "gold";
}

export const testimonials: Testimonial[] = [
  {
    name: "Marisol G.",
    initials: "MG",
    location: "Texas City, TX",
    rating: 5,
    quote:
      "Hands down the best dental experience I've ever had. From the front desk to Dr. Mangla, everyone made me feel cared for. My veneers look completely natural — I can't stop smiling.",
    treatment: "Porcelain Veneers",
    accent: "ocean",
  },
  {
    name: "James R.",
    initials: "JR",
    location: "La Marque, TX",
    rating: 5,
    quote:
      "I used to dread the dentist. The team here changed that completely. They explained everything, never rushed me, and my deep cleaning was actually comfortable. Highly recommend.",
    treatment: "Deep Cleaning",
    accent: "teal",
  },
  {
    name: "Priya N.",
    initials: "PN",
    location: "Texas City, TX",
    rating: 5,
    quote:
      "We bring all three of our kids here and they genuinely look forward to it. Dr. Rath is so gentle and patient. The office is spotless and gorgeous — it feels like a spa, not a clinic.",
    treatment: "Family & Pediatric Care",
    accent: "indigo",
  },
  {
    name: "Anthony D.",
    initials: "AD",
    location: "Dickinson, TX",
    rating: 5,
    quote:
      "Got two implants with Dr. Shaikh and couldn't believe how smooth it was. Zero pain, clear instructions, and the result looks and feels like my own teeth. Worth every penny.",
    treatment: "Dental Implants",
    accent: "gold",
  },
  {
    name: "Latoya W.",
    initials: "LW",
    location: "Texas City, TX",
    rating: 5,
    quote:
      "My Invisalign results are incredible and the whole process was easier than I imagined. They mapped everything out in 3D so I knew exactly what to expect. Truly a five-star team.",
    treatment: "Clear Aligners",
    accent: "ocean",
  },
  {
    name: "Carlos M.",
    initials: "CM",
    location: "Santa Fe, TX",
    rating: 5,
    quote:
      "Called with a dental emergency on a Saturday and they got me in right away. Professional, kind, and they fixed the problem fast. This is now our family's dental home.",
    treatment: "Emergency Visit",
    accent: "teal",
  },
  {
    name: "Hannah B.",
    initials: "HB",
    location: "Texas City, TX",
    rating: 5,
    quote:
      "The whitening results blew me away and the office itself is stunning. Everyone is warm and genuinely happy to see you. I've already referred half my coworkers here.",
    treatment: "Teeth Whitening",
    accent: "indigo",
  },
];
