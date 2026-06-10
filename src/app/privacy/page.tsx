import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { LegalContent, type LegalSection } from "@/components/sections/LegalContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal and health information.`,
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: (
      <>
        <p>We collect information you choose to share with us, including:</p>
        <ul>
          <li>Contact details such as your name, phone number, and email address.</li>
          <li>Appointment details such as your preferred service, date, time, and dentist.</li>
          <li>Messages and questions you send through our forms.</li>
          <li>Basic technical data such as your browser type and pages visited, used to improve the site.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How we use your information",
    body: (
      <>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Schedule, confirm, and manage your appointments.</li>
          <li>Respond to your questions and requests.</li>
          <li>Verify insurance benefits and explain your options when you ask us to.</li>
          <li>Improve our website, services, and patient experience.</li>
        </ul>
        <p>We never sell your personal information to anyone.</p>
      </>
    ),
  },
  {
    heading: "Protected health information",
    body: (
      <p>
        As a dental practice, we are committed to safeguarding your health information in
        accordance with applicable law, including HIPAA. Any clinical information you share with
        our team is kept confidential and is used only to provide and coordinate your care.
      </p>
    ),
  },
  {
    heading: "How we share information",
    body: (
      <>
        <p>
          We share information only as needed to serve you, and only with trusted partners who help
          us operate, such as our scheduling and communication providers. These partners are
          required to protect your information. We may also disclose information when required by law.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        Our website may use cookies and basic analytics to understand how visitors use the site so
        we can make it better. You can control cookies through your browser settings at any time.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <>
        <p>You may, at any time:</p>
        <ul>
          <li>Ask us what information we hold about you.</li>
          <li>Ask us to correct or delete your information.</li>
          <li>Opt out of non essential messages.</li>
        </ul>
        <p>
          To make a request, simply call us at <a href={site.phoneHref}>{site.phone}</a> or email{" "}
          <a href={site.emailHref}>{site.email}</a>.
        </p>
      </>
    ),
  },
  {
    heading: "Data security",
    body: (
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect your
        information. No method of transmission over the internet is fully secure, so we encourage
        you to share sensitive details by phone or in person whenever possible.
      </p>
    ),
  },
  {
    heading: "Children",
    body: (
      <p>
        We care for patients of every age, and a parent or guardian provides information on behalf
        of minors. Our website is not directed at children to collect their information directly.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. When we do, we will revise the date at the top
        of this page. Please check back occasionally to stay informed.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        Questions about your privacy? We are happy to help. Call <a href={site.phoneHref}>{site.phone}</a>,
        email <a href={site.emailHref}>{site.email}</a>, or visit us at {site.address.full}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        breadcrumb="Privacy"
        title={
          <>
            Your privacy, <span className="text-gradient-electric">respected and protected</span>
          </>
        }
        lead="We treat your personal and health information with the same care we bring to your smile. Here is exactly how we handle it."
      />
      <LegalContent
        updated="June 2026"
        intro={
          <p>
            This Privacy Policy explains how {site.legalName} collects, uses, and protects the
            information you share with us through our website and our practice. By using our site or
            services, you agree to the practices described below.
          </p>
        }
        sections={sections}
      />
      <CTASection title="Have a question about your information?" />
    </>
  );
}
