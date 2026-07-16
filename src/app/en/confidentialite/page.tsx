import Link from "next/link";
import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Seren",
  description: "How Seren collects, uses and protects your personal data.",
  alternates: {
    canonical: "/en/confidentialite",
    languages: { fr: "/confidentialite", en: "/en/confidentialite" },
  },
};

export default function ConfidentialitePageEn() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="13 May 2026" lang="en">
      <p>
        At Seren, protecting your personal data is an absolute priority. This policy explains
        what data we collect, why and how we use it, as well as your rights as a user.
      </p>

      <h2>1. Data controller</h2>
      <p>
        The controller of your personal data is <strong>Seren SAS</strong>, reachable through our{" "}
        <Link href="/en/contact">contact form</Link>.
      </p>

      <h2>2. Data collected</h2>
      <p>We only collect the data necessary for the operation of the service:</p>
      <ul>
        <li>
          <strong>Registration data:</strong> email address and, where applicable, first name,
          provided when creating an account.
        </li>
        <li>
          <strong>Browsing data:</strong> IP address, browser type, pages visited, session
          duration, collected via anonymised analytics tools (Microsoft Clarity).
        </li>
        <li>
          <strong>Service usage data:</strong> information you enter during your procedures
          (information about the deceased, list of steps to complete). This data is never sold
          or shared with third parties for commercial purposes.
        </li>
      </ul>

      <h2>3. Purposes of processing</h2>
      <p>Your data is used to:</p>
      <ul>
        <li>Provide you with the Seren service and support you through your procedures;</li>
        <li>Improve the user experience and the quality of the service;</li>
        <li>Send you communications related to your account (if you have consented);</li>
        <li>Comply with our legal obligations.</li>
      </ul>

      <h2>4. Legal basis</h2>
      <p>
        The processing of your data is based on:
      </p>
      <ul>
        <li>The <strong>performance of the contract</strong> (provision of the service) for data necessary to the operation of Seren;</li>
        <li>Your <strong>consent</strong> for marketing communications;</li>
        <li>Our <strong>legitimate interest</strong> for improving the service and security.</li>
      </ul>

      <h2>5. Data retention</h2>
      <p>
        Your data is kept for the duration of your use of the service, then for 3 years for
        legal evidence purposes, unless you request its deletion. Analytics data is anonymised
        within 13 months.
      </p>

      <h2>6. Data sharing</h2>
      <p>
        Your data is never sold to third parties. It may only be shared with our technical
        subcontractors (hosting, analytics tools), strictly within the scope of their mission
        and under a contract guaranteeing an adequate level of protection.
      </p>
      <p>Main subcontractors:</p>
      <ul>
        <li><strong>Netlify</strong> (hosting): United States, covered by the European Commission&apos;s standard contractual clauses.</li>
      </ul>

      <h2>7. Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect your data
        against any unauthorised access, loss or disclosure: encryption of communications
        (HTTPS), restricted access to data, hashed passwords.
      </p>

      <h2>8. Your rights</h2>
      <p>
        In accordance with the General Data Protection Regulation (GDPR), you have the following
        rights:
      </p>
      <ul>
        <li><strong>Right of access:</strong> obtain a copy of your personal data;</li>
        <li><strong>Right to rectification:</strong> correct inaccurate data;</li>
        <li><strong>Right to erasure:</strong> request the deletion of your data;</li>
        <li><strong>Right to portability:</strong> receive your data in a structured format;</li>
        <li><strong>Right to object:</strong> object to certain processing;</li>
        <li><strong>Right to restriction:</strong> restrict the processing of your data.</li>
      </ul>
      <p>
        To exercise these rights, contact us through our{" "}
        <Link href="/en/contact">contact form</Link>. We will respond within a maximum
        of one month.
      </p>
      <p>
        You also have the right to lodge a complaint with the{" "}
        <strong>CNIL</strong> (the French data protection authority):{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
      </p>

      <h2>9. Cookies</h2>
      <p>
        We use anonymised audience measurement cookies (Microsoft Clarity) to improve the
        service. These cookies do not allow you to be personally identified. You can refuse
        these cookies via your browser settings without affecting your access to the service.
      </p>

      <h2>10. Changes</h2>
      <p>
        We reserve the right to modify this policy. Any significant change will be notified to
        you by email or via a banner on the site.
      </p>

      <h2>Contact</h2>
      <p>
        For any question regarding the protection of your data, write to us through our{" "}
        <Link href="/en/contact">contact form</Link>.
      </p>
    </LegalLayout>
  );
}
