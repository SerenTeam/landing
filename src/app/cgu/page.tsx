import Link from "next/link";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Conditions Générales d'Utilisation | Seren",
  description: "Conditions générales d'utilisation du service Seren.",
  alternates: {
    canonical: "/cgu",
    languages: { fr: "/cgu", en: "/en/cgu" },
  },
};

export default function CguPage() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation" lastUpdated="13 mai 2026">
      <p>
        Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
        du service Seren, accessible à l&apos;adresse <strong>seren.fr</strong>, édité par Seren SAS.
      </p>
      <p>
        En accédant au service, vous acceptez pleinement et sans réserve les présentes CGU.
        Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le service.
      </p>

      <h2>1. Description du service</h2>
      <p>
        Seren est un assistant numérique conçu pour accompagner les personnes qui traversent
        des démarches administratives après la perte d&apos;un proche. Le service fournit des
        informations, des guides et un suivi personnalisé des démarches à effectuer.
      </p>
      <p>
        Seren est un outil d&apos;aide et d&apos;information. Il ne constitue pas un conseil juridique,
        notarial, fiscal ou médical. Pour toute situation nécessitant un avis professionnel,
        nous vous invitons à consulter les professionnels compétents.
      </p>

      <h2>2. Accès au service</h2>
      <p>
        L&apos;accès au service est conditionné à la création d&apos;un compte utilisateur via la fourniture
        d&apos;une adresse e-mail valide. L&apos;utilisateur s&apos;engage à fournir des informations exactes et
        à maintenir ses informations à jour.
      </p>
      <p>
        L&apos;utilisateur est responsable de la confidentialité de ses identifiants de connexion.
        Toute utilisation du service depuis son compte est réputée faite par lui.
      </p>

      <h2>3. Utilisation acceptable</h2>
      <p>L&apos;utilisateur s&apos;engage à utiliser le service de manière licite et à ne pas :</p>
      <ul>
        <li>Utiliser le service à des fins frauduleuses ou illicites ;</li>
        <li>Tenter de contourner les mesures de sécurité du service ;</li>
        <li>Introduire des virus, logiciels malveillants ou tout autre code nuisible ;</li>
        <li>Collecter des données d&apos;autres utilisateurs sans leur consentement ;</li>
        <li>Reproduire, copier ou revendre tout ou partie du service sans autorisation.</li>
      </ul>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments constitutifs du service (interface, contenus, algorithmes,
        marques, logos) sont la propriété exclusive de Seren SAS ou de ses partenaires.
        Toute reproduction ou utilisation sans autorisation est interdite.
      </p>
      <p>
        Les contenus créés par l&apos;utilisateur dans le cadre de l&apos;utilisation du service (notes,
        listes de démarches personnalisées) restent sa propriété. L&apos;utilisateur accorde à
        Seren SAS une licence limitée pour les stocker et les traiter aux fins du service.
      </p>

      <h2>5. Disponibilité du service</h2>
      <p>
        Seren SAS s&apos;efforce de maintenir le service accessible 24h/24 et 7j/7. Toutefois,
        des interruptions pour maintenance, mises à jour ou raisons techniques indépendantes
        de notre volonté peuvent survenir. Seren SAS ne saurait être tenu responsable des
        conséquences d&apos;une indisponibilité temporaire.
      </p>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        Les informations fournies par Seren ont un caractère général et informatif. Elles ne
        sauraient se substituer à un conseil professionnel personnalisé. Seren SAS ne peut être
        tenu responsable des décisions prises par l&apos;utilisateur sur la base des informations
        fournies par le service.
      </p>
      <p>
        Dans les limites autorisées par la loi, la responsabilité de Seren SAS ne saurait
        dépasser les sommes effectivement versées par l&apos;utilisateur au titre du service au
        cours des 12 derniers mois.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est régi par notre{" "}
        <Link href="/confidentialite">Politique de confidentialité</Link>, qui fait partie intégrante
        des présentes CGU.
      </p>

      <h2>8. Résiliation</h2>
      <p>
        L&apos;utilisateur peut supprimer son compte à tout moment depuis les paramètres du service
        ou en contactant <a href="mailto:bonjour@seren.fr">bonjour@seren.fr</a>.
      </p>
      <p>
        Seren SAS se réserve le droit de suspendre ou de résilier l&apos;accès d&apos;un utilisateur
        en cas de violation des présentes CGU, sans préavis ni indemnité.
      </p>

      <h2>9. Modifications des CGU</h2>
      <p>
        Seren SAS se réserve le droit de modifier les présentes CGU à tout moment. Les
        utilisateurs seront informés de toute modification substantielle par e-mail au moins
        30 jours avant l&apos;entrée en vigueur des nouvelles conditions. La poursuite de l&apos;utilisation
        du service après cette période vaut acceptation des nouvelles CGU.
      </p>

      <h2>10. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de
        résolution amiable, les tribunaux compétents du ressort du siège social de Seren SAS
        seront seuls compétents.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU :{" "}
        <a href="mailto:bonjour@seren.fr">bonjour@seren.fr</a>.
      </p>
    </LegalLayout>
  );
}
