import Link from "next/link";
import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use | Seren",
  description: "Terms of use for the Seren service.",
  alternates: {
    canonical: "/en/cgu",
    languages: { fr: "/cgu", en: "/en/cgu" },
  },
};

export default function CguPageEn() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="13 May 2026" lang="en">
      <p>
        These Terms of Use govern access to and use of the Seren service, available at{" "}
        <strong>seren-app.fr</strong>, published by Seren SAS.
      </p>
      <p>
        By accessing the service, you fully and unreservedly accept these Terms of Use.
        If you do not accept these terms, please do not use the service.
      </p>

      <h2>1. Description of the service</h2>
      <p>
        Seren is a digital assistant designed to support people going through administrative
        procedures after the loss of someone close. The service provides information, guides
        and personalised tracking of the steps to be completed.
      </p>
      <p>
        Seren is a tool for help and information. It does not constitute legal, notarial, tax
        or medical advice. For any situation requiring professional advice, we invite you to
        consult the relevant professionals.
      </p>

      <h2>2. Access to the service</h2>
      <p>
        Access to the service is conditional on creating a user account by providing a valid
        email address. The user undertakes to provide accurate information and to keep their
        information up to date.
      </p>
      <p>
        The user is responsible for the confidentiality of their login credentials. Any use of
        the service from their account is deemed to have been made by them.
      </p>

      <h2>3. Acceptable use</h2>
      <p>The user undertakes to use the service lawfully and not to:</p>
      <ul>
        <li>Use the service for fraudulent or unlawful purposes;</li>
        <li>Attempt to circumvent the security measures of the service;</li>
        <li>Introduce viruses, malware or any other harmful code;</li>
        <li>Collect data from other users without their consent;</li>
        <li>Reproduce, copy or resell all or part of the service without authorisation.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        All the elements making up the service (interface, content, algorithms, trademarks,
        logos) are the exclusive property of Seren SAS or its partners. Any reproduction or
        use without authorisation is prohibited.
      </p>
      <p>
        Content created by the user as part of using the service (notes, personalised task
        lists) remains their property. The user grants Seren SAS a limited licence to store
        and process it for the purposes of the service.
      </p>

      <h2>5. Availability of the service</h2>
      <p>
        Seren SAS strives to keep the service accessible 24/7. However, interruptions for
        maintenance, updates or technical reasons beyond our control may occur. Seren SAS
        cannot be held responsible for the consequences of a temporary unavailability.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        The information provided by Seren is general and informative in nature. It cannot
        replace personalised professional advice. Seren SAS cannot be held responsible for
        decisions made by the user on the basis of the information provided by the service.
      </p>
      <p>
        To the extent permitted by law, the liability of Seren SAS shall not exceed the amounts
        actually paid by the user for the service over the last 12 months.
      </p>

      <h2>7. Personal data</h2>
      <p>
        The processing of personal data is governed by our{" "}
        <Link href="/en/confidentialite">Privacy Policy</Link>, which forms an integral part of
        these Terms of Use.
      </p>

      <h2>8. Termination</h2>
      <p>
        The user may delete their account at any time from the service settings or through our{" "}
        <Link href="/en/contact">contact form</Link>.
      </p>
      <p>
        Seren SAS reserves the right to suspend or terminate a user&apos;s access in the event of a
        breach of these Terms of Use, without notice or compensation.
      </p>

      <h2>9. Changes to the Terms</h2>
      <p>
        Seren SAS reserves the right to modify these Terms of Use at any time. Users will be
        informed of any substantial change by email at least 30 days before the new terms take
        effect. Continued use of the service after this period constitutes acceptance of the
        new Terms.
      </p>

      <h2>10. Governing law and jurisdiction</h2>
      <p>
        These Terms of Use are governed by French law. In the event of a dispute, and failing
        an amicable resolution, the competent courts of the jurisdiction of Seren SAS&apos;s
        registered office shall have sole jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        For any question regarding these Terms of Use, please use our{" "}
        <Link href="/en/contact">contact form</Link>.
      </p>
    </LegalLayout>
  );
}
