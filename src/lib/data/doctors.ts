/**
 * Doctor profiles for the "Our Doctors" page and the homepage preview.
 *
 * NOTE: Bios and credentials below are professionally written placeholders for
 * the redesign. Replace the copy (and drop portrait photos into /public/doctors)
 * with the practice's verified details before launch.
 */

export interface Doctor {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  initials: string;
  /** Accent key drives the branded gradient avatar in the UI layer. */
  accent: "ocean" | "teal" | "indigo";
  specialties: string[];
  bio: string[];
  education: string[];
  funFact: string;
  yearsExperience: number;
  /** Optional portrait path — falls back to a branded monogram avatar if absent. */
  photo?: string;
}

export const doctors: Doctor[] = [
  {
    slug: "dr-kapil-mangla",
    name: "Dr. Kapil Mangla",
    credentials: "DDS",
    role: "Founder & Lead Dentist",
    initials: "KM",
    accent: "ocean",
    specialties: ["General Dentistry", "Dental Implants", "Full-Mouth Restoration"],
    bio: [
      "Dr. Kapil Mangla founded Texas City Dental with a simple belief: world-class dentistry should feel warm, personal, and completely unhurried. Over more than a decade in practice, he has helped thousands of Texas City families rediscover healthy, confident smiles.",
      "With advanced training in implant and restorative dentistry, Dr. Mangla is known for his meticulous, gentle technique and his gift for putting even the most anxious patients at ease. He leads the team's commitment to continuing education and modern, evidence-based care.",
    ],
    education: [
      "Doctor of Dental Surgery (DDS)",
      "Advanced training in Implant Dentistry",
      "Member, American Dental Association",
    ],
    funFact: "An avid cook who believes a great meal starts with a healthy smile.",
    yearsExperience: 14,
  },
  {
    slug: "dr-sushmita-rath",
    name: "Dr. Sushmita Rath",
    credentials: "DDS",
    role: "Cosmetic & Family Dentist",
    initials: "SR",
    accent: "teal",
    specialties: ["Cosmetic Dentistry", "Smile Design", "Family Dentistry"],
    bio: [
      "Dr. Sushmita Rath brings an artist's eye to everything she does. Specializing in cosmetic and family dentistry, she designs smiles that look effortlessly natural — beautifully balanced to each patient's face and personality.",
      "Patients love Dr. Rath's calm, attentive chairside manner and her talent for explaining every option clearly. From a child's first visit to a complete smile makeover, she treats every patient like family.",
    ],
    education: [
      "Doctor of Dental Surgery (DDS)",
      "Continuing education in Cosmetic & Aesthetic Dentistry",
      "Member, Academy of General Dentistry",
    ],
    funFact: "Sketches portraits in her free time — the same eye she brings to smile design.",
    yearsExperience: 11,
  },
  {
    slug: "dr-kamran-shaikh",
    name: "Dr. Kamran Shaikh",
    credentials: "DDS",
    role: "General & Surgical Dentist",
    initials: "KS",
    accent: "indigo",
    specialties: ["Oral Surgery", "General Dentistry", "Sedation Comfort"],
    bio: [
      "Dr. Kamran Shaikh combines surgical precision with a genuinely reassuring presence. He focuses on oral surgery and complex restorative care, guiding patients through everything from wisdom teeth to dental implants with comfort at the center.",
      "Known for his thorough explanations and steady hands, Dr. Shaikh believes informed patients are confident patients. He's passionate about making procedures that once felt intimidating feel completely manageable.",
    ],
    education: [
      "Doctor of Dental Surgery (DDS)",
      "Advanced training in Oral Surgery & Sedation",
      "Member, American Dental Association",
    ],
    funFact: "A weekend long-distance runner who brings the same endurance to patient care.",
    yearsExperience: 9,
  },
];

export const getDoctor = (slug: string) =>
  doctors.find((doctor) => doctor.slug === slug);
