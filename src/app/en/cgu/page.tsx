import Link from "next/link";
import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use and Sale | Seren",
  description: "Terms of use and sale for the Seren service.",
  alternates: {
    canonical: "/en/cgu",
    languages: { fr: "/cgu", en: "/en/cgu" },
  },
};

export default function CguPageEn() {
  return (
    <LegalLayout title="Terms of Use and Sale" lastUpdated="31 August 2026" lang="en">
      <p>
        These Terms of Use and Sale (&quot;Terms&quot;) govern access to and use of the Seren service,
        available at <strong>seren-app.fr</strong>, published by Seren SAS, as well as the sale
        conditions of the paid package described below.
      </p>
      <p>
        By accessing the service, you fully and unreservedly accept these Terms.
        If you do not accept these terms, please do not use the service.
      </p>

      <h2>1. Description of the service</h2>
      <p>
        Seren is a digital assistant designed to support people going through administrative
        procedures after the loss of someone close. The service provides a questionnaire
        followed by a personalised roadmap, then, as part of the paid package described in
        section 3, the preparation and sending of letters on the user&apos;s behalf, together with
        tracking of the responses received.
      </p>
      <p>
        Seren is a tool for help and information. It does not constitute legal, notarial, tax
        or medical advice, and the content provided does not guarantee accuracy or
        completeness for every individual situation. For any situation requiring professional
        advice, we invite you to consult the relevant professionals.
      </p>

      <h2>2. Access to the service</h2>
      <p>
        Access to the service, including the questionnaire and the personalised roadmap, is
        provided as part of the paid package described in section 3. Access to the service is
        conditional on creating a user account by providing a valid email address. The user
        undertakes to provide accurate information and to keep their information up to date.
      </p>
      <p>
        The user is responsible for the confidentiality of their login credentials. Any use of
        the service from their account is deemed to have been made by them.
      </p>

      <h2>3. Offer, price and payment</h2>
      <p>
        The Seren package is offered at a single price of <strong>€199 including tax</strong>,
        billed as a single one-time payment (no subscription or automatic renewal). It gives
        access, for 12 months from the date of purchase, to the personalised roadmap and
        detailed content for each procedure, to pre-filled letters, to the document vault, to
        tracking of each procedure with automatic follow-up reminders, and to the sending of{" "}
        <strong>10 included letters, including 5 registered letters with acknowledgement of
        receipt</strong>.
      </p>
      <p>
        Beyond this quota, each additional letter is billed at <strong>€9</strong> for a
        registered letter with acknowledgement of receipt and <strong>€3</strong> for a standard
        letter. No additional letter is sent without the user&apos;s prior explicit consent.
      </p>
      <p>
        Payment is made online by credit card, through a secure third-party payment provider.
        Seren SAS does not store any of the user&apos;s banking data. An invoice is made available
        to the user after payment.
      </p>

      <h2>4. Right of withdrawal</h2>
      <p>
        Under French consumer law, consumers are in principle entitled to a 14-day withdrawal
        period for any order placed remotely.
      </p>
      <p>
        However, the Seren service (preparation and sending of letters) begins to be performed
        as soon as the order is confirmed. By confirming their order, the user expressly
        requests immediate performance of the service before the end of the withdrawal period,
        and acknowledges that they will no longer be able to exercise their right of
        withdrawal once the service has been fully performed (letters actually sent), in
        accordance with French consumer law (Code de la consommation, art. L221-28 13°).
      </p>
      <p>
        As long as the service has not been performed, the user may exercise their right of
        withdrawal using our <Link href="/en/contact">contact form</Link>.
      </p>

      <h2>5. Guarantee and refunds</h2>
      <p>
        In addition to the right of withdrawal described in section 4, Seren SAS offers the
        following guarantee: as long as no letter has been sent on the user&apos;s behalf, the user
        may request a full refund of their package. Once the sending of letters has begun, the
        user may request, within 30 days of purchase, a refund of the package less the cost of
        the letters actually sent.
      </p>
      <p>
        Any refund request must be made via our <Link href="/en/contact">contact form</Link>.
      </p>

      <h2>6. Performance of the letter-sending service</h2>
      <p>
        Based on the information and documents provided by the user (including the death
        certificate and supporting documents uploaded to their personal space), Seren prepares
        the letters required for the identified procedures. Each letter is presented to the
        user for review and approval before it is sent; the user remains solely responsible
        for the accuracy of the information and addresses they provide.
      </p>
      <p>
        Seren SAS arranges for the letters to be sent through third-party postal providers, but
        does not guarantee their receipt, processing, or any response from the recipient
        organisations, which are beyond its control.
      </p>
      <p>
        In the event of a delivery failure (incorrect address, recipient unknown at the address
        provided…), the user is notified and may be asked to provide a corrected address;
        re-mailing fees may then apply.
      </p>

      <h2>7. Acceptable use</h2>
      <p>The user undertakes to use the service lawfully and not to:</p>
      <ul>
        <li>Use the service for fraudulent or unlawful purposes;</li>
        <li>Provide inaccurate information or addresses for the purpose of sending letters;</li>
        <li>Attempt to circumvent the security measures of the service;</li>
        <li>Introduce viruses, malware or any other harmful code;</li>
        <li>Collect data from other users without their consent;</li>
        <li>Reproduce, copy or resell all or part of the service without authorisation.</li>
      </ul>

      <h2>8. Intellectual property</h2>
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

      <h2>9. Availability of the service</h2>
      <p>
        Seren SAS strives to keep the service accessible 24/7. However, interruptions for
        maintenance, updates or technical reasons beyond our control may occur. Seren SAS
        cannot be held responsible for the consequences of a temporary unavailability.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        The information provided by Seren is general and informative in nature. It cannot
        replace personalised professional advice. Seren SAS cannot be held responsible for
        decisions made by the user on the basis of the information provided by the service,
        nor for the processing or response times of the organisations receiving the letters
        sent.
      </p>
      <p>
        To the extent permitted by law, the liability of Seren SAS for the performance of the
        service shall not exceed the amount actually paid by the user for the package
        concerned.
      </p>

      <h2>11. Personal data</h2>
      <p>
        The processing of personal data is governed by our{" "}
        <Link href="/en/confidentialite">Privacy Policy</Link>, which forms an integral part of
        these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        The user may delete their account at any time from the service settings or through our{" "}
        <Link href="/en/contact">contact form</Link>.
      </p>
      <p>
        Seren SAS reserves the right to suspend or terminate a user&apos;s access in the event of a
        breach of these Terms, without notice or compensation.
      </p>

      <h2>13. Consumer mediation</h2>
      <p>
        Under French consumer law (Code de la consommation, art. L616-1 et seq.), any
        consumer resident in France is entitled to refer a dispute free of charge to a
        consumer mediator with a view to an amicable resolution, after first raising the
        matter in writing with Seren SAS via our <Link href="/en/contact">contact form</Link>.
      </p>
      <p>Competent mediator: [to be designated].</p>

      <h2>14. Changes to the Terms</h2>
      <p>
        Seren SAS reserves the right to modify these Terms at any time. Users will be
        informed of any substantial change by email at least 30 days before the new terms take
        effect. Continued use of the service after this period constitutes acceptance of the
        new Terms.
      </p>

      <h2>15. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by French law. In the event of a dispute, and failing
        an amicable resolution, the competent courts of the jurisdiction of Seren SAS&apos;s
        registered office shall have sole jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        For any question regarding these Terms, please use our{" "}
        <Link href="/en/contact">contact form</Link>.
      </p>
    </LegalLayout>
  );
}
