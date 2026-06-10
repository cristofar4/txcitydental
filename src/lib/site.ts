/**
 * Single source of truth for the practice's core business information (NAP).
 * Keeping Name / Address / Phone consistent everywhere is critical for local SEO
 * and is reused by structured data, the header, footer, contact + booking pages.
 */

export const site = {
  name: "Texas City Dental",
  legalName: "Texas City Family Dental",
  tagline: "Luxury dentistry with a personal touch",
  description:
    "Texas City Dental delivers premium general, cosmetic, and family dentistry in Texas City, TX. Comfortable, modern care from Dr. Mangla, Dr. Rath, and Dr. Shaikh.",
  url: "https://txcitydental.com",
  phone: "(409) 419-2222",
  phoneHref: "tel:+14094192222",
  email: "hello@txcitydental.com",
  emailHref: "mailto:hello@txcitydental.com",
  address: {
    street: "3448 Palmer Hwy",
    city: "Texas City",
    state: "TX",
    zip: "77590",
    country: "United States",
    full: "3448 Palmer Hwy, Texas City, TX 77590",
  },
  geo: {
    // Approximate coordinates for 3448 Palmer Hwy, Texas City, TX
    lat: 29.3905,
    lng: -94.9555,
  },
  // Keyless Google Maps embed (renders client-side, no API key required).
  mapsEmbedSrc:
    "https://www.google.com/maps?q=3448+Palmer+Hwy,+Texas+City,+TX+77590&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=3448+Palmer+Hwy,+Texas+City,+TX+77590",
  // Background hero video. Drop a practice walkthrough at public/videos/hero.mp4
  // (or point this at any hosted .mp4). Until then the hero shows a cinematic,
  // slowly panning photo, so it always looks like motion footage.
  heroVideo: "/videos/hero.mp4",
  hours: [
    { day: "Monday", open: "9:00 AM", close: "5:00 PM", short: "9 AM to 5 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "6:00 PM", short: "10 AM to 6 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "5:00 PM", short: "9 AM to 5 PM" },
    { day: "Thursday", open: "10:00 AM", close: "6:00 PM", short: "10 AM to 6 PM" },
    { day: "Friday", open: "9:00 AM", close: "5:00 PM", short: "9 AM to 5 PM" },
    { day: "Saturday", open: "8:00 AM", close: "2:00 PM", short: "8 AM to 2 PM" },
    { day: "Sunday", open: null, close: null, short: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    google: "https://www.google.com/maps",
  },
  stats: {
    yearsServing: 15,
    patientsServed: "12,000+",
    rating: 4.9,
    reviewCount: 480,
  },
} as const;

export type Site = typeof site;

/** Primary site navigation, reused by the header, mobile nav, and footer. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
