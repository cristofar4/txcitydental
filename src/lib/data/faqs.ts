/**
 * Frequently asked questions, rendered as an accessible accordion and also
 * emitted as FAQPage structured data for rich results in search.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes! We're always happy to welcome new patients and families to Texas City Dental. You can request an appointment online in under a minute, or call us at (409) 419-2222 and we'll find a time that works for you.",
  },
  {
    question: "Do you take my dental insurance?",
    answer:
      "We work with most major PPO dental insurance plans and will gladly file your claims for you. If you're unsure about your coverage, give us a call, our team will verify your benefits and explain your options before any treatment begins.",
  },
  {
    question: "What if I don't have insurance?",
    answer:
      "No insurance, no problem. We offer transparent pricing and flexible, low monthly financing so quality care fits your budget. Ask us about our membership and payment plan options at your visit.",
  },
  {
    question: "Do you see children?",
    answer:
      "Absolutely. We're a family practice and love caring for patients of every age. Our team specializes in gentle, fun first pediatric visits, and we recommend a child's first appointment by their first birthday.",
  },
  {
    question: "I'm nervous about the dentist. How do you help?",
    answer:
      "You're in good company, and good hands. Our entire team is trained to keep you calm and comfortable, we never rush, and we offer sedation and comfort options for anxious patients. Many of our most nervous patients now say they actually look forward to visits.",
  },
  {
    question: "Do you offer emergency dental appointments?",
    answer:
      "Yes. Dental emergencies don't wait, and neither do we. Call us as early as possible and we'll do everything we can to see you the same day to relieve your pain and protect your smile.",
  },
  {
    question: "How often should I come in for a check up?",
    answer:
      "For most patients, a check up and professional cleaning every six months is ideal. These regular visits let us catch small issues before they become big ones, keeping your smile healthy and your treatment costs low.",
  },
  {
    question: "Where are you located and what are your hours?",
    answer:
      "We're at 3448 Palmer Hwy in Texas City, TX. We're open Monday through Friday with extended evening hours on Tuesday and Thursday, plus Saturday mornings from 8 AM to 2 PM. We're closed on Sundays.",
  },
];
