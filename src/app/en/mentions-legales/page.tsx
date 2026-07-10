import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Legal Notice | Seren",
  description: "Legal notice for Seren, the digital assistant for post-loss procedures.",
  alternates: {
    canonical: "/en/mentions-legales",
    languages: { fr: "/mentions-legales", en: "/en/mentions-legales" },
  },
};

export default function MentionsLegalesPageEn() {
  return (
    <LegalLayout title="Legal Notice" lastUpdated="13 May 2026" lang="en">
      <h2>Site publisher</h2>
      <p>
        The site <strong>seren.fr</strong> is published by <strong>Seren SAS</strong>, a
        simplified joint-stock company with share capital of €1,000, whose registered office is
        located in France.
      </p>
      <ul>
        <li><strong>Company name:</strong> Seren SAS</li>
        <li><strong>Legal form:</strong> Simplified joint-stock company (SAS)</li>
        <li><strong>SIREN number:</strong> [registration in progress]</li>
        <li><strong>Email address:</strong> <a href="mailto:bonjour@seren.fr">bonjour@seren.fr</a></li>
      </ul>

      <h2>Publication director</h2>
      <p>
        The publication director is the legal representative of Seren SAS.
      </p>

      <h2>Hosting</h2>
      <p>
        The site is hosted by <strong>Netlify, Inc.</strong>, whose registered office is located
        at 512 2nd Street, Suite 200, San Francisco, CA 94107, United States.
        Website: <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on the seren.fr site (text, images, graphics, logos, icons, sounds,
        software, etc.) is the exclusive property of Seren SAS or its partners, and is protected
        by French and international laws relating to intellectual property.
      </p>
      <p>
        Any reproduction, representation, modification, publication or adaptation of all or part
        of the elements of the site, by whatever means or process, is prohibited without the
        prior written authorisation of Seren SAS.
      </p>

      <h2>Hyperlinks</h2>
      <p>
        The seren.fr site may contain links to third-party sites. Seren SAS does not control
        these sites and declines any responsibility for their content or their privacy policy.
      </p>

      <h2>Governing law</h2>
      <p>
        This legal notice is governed by French law. In the event of a dispute, the French
        courts shall have sole jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        For any question regarding this legal notice, you can contact us at:{" "}
        <a href="mailto:bonjour@seren.fr">bonjour@seren.fr</a>.
      </p>
    </LegalLayout>
  );
}
