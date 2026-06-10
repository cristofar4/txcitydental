import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { LegalContent, type LegalSection } from "@/components/sections/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} website and services.`,
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: (
      <p>
        By accessing or using the {site.name} website, you agree to these Terms of Service. If you do
        not agree, please do not use the site. We may update these terms from time to time, and your
        continued use means you accept the current version.
      </p>
    ),
  },
  {
    heading: "Not medical advice",
    body: (
      <p>
        The information on this website is provided for general educational purposes and does not
        replace professional dental or medical advice. Always consult a qualified dentist about your
        specific situation. Reading this site does not create a dentist and patient relationship.
      </p>
    ),
  },
  {
    heading: "Appointment requests",
    body: (
      <p>
        Booking through our website sends an appointment request. It is not a confirmed appointment
        until a member of our team contacts you to verify the details. We will always do our best to
        accommodate your preferred time.
      </p>
    ),
  },
  {
    heading: "Use of the website",
    body: (
      <>
        <p>You agree to use the website only for lawful purposes. You will not:</p>
        <ul>
          <li>Attempt to disrupt, damage, or gain unauthorized access to the site.</li>
          <li>Submit false information or impersonate another person.</li>
          <li>Use the site in any way that violates applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        All content on this website, including text, graphics, logos, and design, belongs to{" "}
        {site.legalName} or its licensors and is protected by law. You may not copy or reuse it
        without our written permission.
      </p>
    ),
  },
  {
    heading: "Third party links",
    body: (
      <p>
        Our site may link to other websites for your convenience. We do not control those sites and
        are not responsible for their content or practices. Visiting them is at your own discretion.
      </p>
    ),
  },
  {
    heading: "Disclaimers",
    body: (
      <p>
        The website is provided on an as is basis. While we work hard to keep information accurate
        and current, we make no guarantees that the site will always be available, error free, or
        completely up to date.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, {site.legalName} is not liable for any indirect or
        incidental damages arising from your use of this website. Your use of the site is at your own
        risk.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of Texas, without regard to conflict of law
        principles. Any dispute will be handled in the courts located in Texas.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        Questions about these terms? Call <a href={site.phoneHref}>{site.phone}</a>, email{" "}
        <a href={site.emailHref}>{site.email}</a>, or visit us at {site.address.full}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        breadcrumb="Terms"
        title={
          <>
            Clear terms, <span className="text-gradient-electric">no fine print games</span>
          </>
        }
        lead="The simple ground rules for using our website and requesting care, written in plain language."
      />
      <LegalContent
        updated="June 2026"
        intro={
          <p>
            These Terms of Service govern your use of the {site.name} website. Please read them
            carefully. They are designed to be fair, transparent, and easy to understand.
          </p>
        }
        sections={sections}
      />
      <CTASection title="Ready when you are" />
    </>
  );
}
