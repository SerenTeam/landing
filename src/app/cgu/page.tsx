import Link from "next/link";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Conditions Générales d'Utilisation et de Vente | Seren",
  description: "Conditions générales d'utilisation et de vente du service Seren.",
  alternates: {
    canonical: "/cgu",
    languages: { fr: "/cgu", en: "/en/cgu" },
  },
};

export default function CguPage() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation et de Vente" lastUpdated="31 août 2026">
      <p>
        Les présentes Conditions Générales d&apos;Utilisation et de Vente (CGU) régissent l&apos;accès et
        l&apos;utilisation du service Seren, accessible à l&apos;adresse <strong>seren-app.fr</strong>, édité
        par Seren SAS, ainsi que les conditions de vente du forfait payant décrit ci-dessous.
      </p>
      <p>
        En accédant au service, vous acceptez pleinement et sans réserve les présentes CGU.
        Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le service.
      </p>

      <h2>1. Description du service</h2>
      <p>
        Seren est un assistant numérique conçu pour accompagner les personnes qui traversent
        des démarches administratives après la perte d&apos;un proche. Le service propose un
        questionnaire suivi d&apos;une feuille de route personnalisée, puis, dans le cadre du
        forfait payant décrit à l&apos;article 3, la préparation et l&apos;envoi de courriers pour le
        compte de l&apos;utilisateur ainsi que le suivi des réponses reçues.
      </p>
      <p>
        Seren est un outil d&apos;aide et d&apos;information. Il ne constitue pas un conseil juridique,
        notarial, fiscal ou médical, et le contenu proposé ne garantit pas l&apos;exactitude ou
        l&apos;exhaustivité de chaque situation individuelle. Pour toute situation nécessitant un
        avis professionnel, nous vous invitons à consulter les professionnels compétents.
      </p>

      <h2>2. Accès au service</h2>
      <p>
        L&apos;accès au service, y compris au questionnaire et à la feuille de route personnalisée,
        est proposé sous la forme du forfait unique payant décrit à l&apos;article 3. L&apos;accès au
        service est conditionné à la création d&apos;un compte utilisateur via la fourniture d&apos;une
        adresse e-mail valide. L&apos;utilisateur s&apos;engage à fournir des informations exactes et à
        maintenir ses informations à jour.
      </p>
      <p>
        L&apos;utilisateur est responsable de la confidentialité de ses identifiants de connexion.
        Toute utilisation du service depuis son compte est réputée faite par lui.
      </p>

      <h2>3. Offre, prix et paiement</h2>
      <p>
        Le forfait Seren est proposé au prix unique de <strong>199 € TTC</strong>, réglé en une
        seule fois (sans engagement ni reconduction automatique). Il donne accès, pendant 12 mois
        à compter de l&apos;achat, à la feuille de route personnalisée et au contenu détaillé des
        démarches, à la préparation de courriers pré-remplis, au coffre documents, au suivi de
        chaque démarche avec relances automatiques, ainsi qu&apos;à l&apos;envoi de <strong>10 courriers
        inclus, dont 5 lettres recommandées avec accusé de réception</strong>.
      </p>
      <p>
        Au-delà de ce quota, chaque envoi supplémentaire est facturé <strong>9 €</strong> pour une
        lettre recommandée avec accusé de réception et <strong>3 €</strong> pour un courrier simple.
        Aucun envoi supplémentaire n&apos;est effectué sans l&apos;accord explicite préalable de
        l&apos;utilisateur.
      </p>
      <p>
        Le paiement s&apos;effectue en ligne par carte bancaire, via un prestataire de paiement
        sécurisé tiers. Seren SAS ne stocke aucune donnée bancaire de l&apos;utilisateur. Une facture
        est mise à disposition de l&apos;utilisateur après paiement.
      </p>

      <h2>4. Droit de rétractation</h2>
      <p>
        Conformément aux dispositions du Code de la consommation, l&apos;utilisateur consommateur
        dispose en principe d&apos;un délai de 14 jours pour exercer son droit de rétractation sur
        toute commande passée à distance.
      </p>
      <p>
        Toutefois, le service Seren (préparation et envoi de courriers) commence à s&apos;exécuter
        dès la validation de la commande. En validant sa commande, l&apos;utilisateur demande
        expressément l&apos;exécution immédiate du service avant l&apos;expiration du délai de
        rétractation, et reconnaît qu&apos;il ne pourra plus exercer son droit de rétractation une
        fois le service pleinement exécuté (courriers effectivement envoyés), conformément à
        l&apos;article L221-28 13° du Code de la consommation.
      </p>
      <p>
        Tant que le service n&apos;a pas été exécuté, l&apos;utilisateur peut exercer son droit de
        rétractation en utilisant notre <Link href="/contact">formulaire de contact</Link>.
      </p>

      <h2>5. Garantie et remboursement</h2>
      <p>
        En complément du droit de rétractation décrit à l&apos;article 4, Seren SAS propose la
        garantie suivante : tant qu&apos;aucun courrier n&apos;a été envoyé pour le compte de
        l&apos;utilisateur, celui-ci peut demander le remboursement intégral de son forfait. Une fois
        l&apos;envoi des courriers commencé, l&apos;utilisateur peut demander, dans un délai de 30 jours à
        compter de l&apos;achat, le remboursement du forfait déduction faite du coût des envois
        réellement effectués.
      </p>
      <p>
        Toute demande de remboursement s&apos;effectue via notre{" "}
        <Link href="/contact">formulaire de contact</Link>.
      </p>

      <h2>6. Exécution du service d&apos;envoi de courriers</h2>
      <p>
        Sur la base des informations et documents fournis par l&apos;utilisateur (notamment l&apos;acte
        de décès et les justificatifs versés dans son espace personnel), Seren prépare les
        courriers nécessaires aux démarches identifiées. Chaque courrier est présenté à
        l&apos;utilisateur pour relecture et validation avant envoi ; l&apos;utilisateur reste seul
        responsable de l&apos;exactitude des informations et des adresses qu&apos;il fournit.
      </p>
      <p>
        Seren SAS assure l&apos;envoi des courriers via des prestataires postaux tiers, mais ne
        garantit ni leur réception, ni leur traitement, ni la réponse des organismes
        destinataires, qui échappent à son contrôle.
      </p>
      <p>
        En cas d&apos;échec d&apos;acheminement (adresse erronée, destinataire inconnu à l&apos;adresse
        indiquée…), l&apos;utilisateur en est informé et peut être invité à fournir une adresse
        corrigée ; des frais de réexpédition peuvent alors s&apos;appliquer.
      </p>

      <h2>7. Utilisation acceptable</h2>
      <p>L&apos;utilisateur s&apos;engage à utiliser le service de manière licite et à ne pas :</p>
      <ul>
        <li>Utiliser le service à des fins frauduleuses ou illicites ;</li>
        <li>Fournir des informations ou adresses inexactes en vue de l&apos;envoi de courriers ;</li>
        <li>Tenter de contourner les mesures de sécurité du service ;</li>
        <li>Introduire des virus, logiciels malveillants ou tout autre code nuisible ;</li>
        <li>Collecter des données d&apos;autres utilisateurs sans leur consentement ;</li>
        <li>Reproduire, copier ou revendre tout ou partie du service sans autorisation.</li>
      </ul>

      <h2>8. Propriété intellectuelle</h2>
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

      <h2>9. Disponibilité du service</h2>
      <p>
        Seren SAS s&apos;efforce de maintenir le service accessible 24h/24 et 7j/7. Toutefois,
        des interruptions pour maintenance, mises à jour ou raisons techniques indépendantes
        de notre volonté peuvent survenir. Seren SAS ne saurait être tenu responsable des
        conséquences d&apos;une indisponibilité temporaire.
      </p>

      <h2>10. Limitation de responsabilité</h2>
      <p>
        Les informations fournies par Seren ont un caractère général et informatif. Elles ne
        sauraient se substituer à un conseil professionnel personnalisé. Seren SAS ne peut être
        tenu responsable des décisions prises par l&apos;utilisateur sur la base des informations
        fournies par le service, ni des délais de traitement ou de réponse des organismes
        destinataires des courriers envoyés.
      </p>
      <p>
        Dans les limites autorisées par la loi, la responsabilité de Seren SAS au titre de
        l&apos;exécution du service ne saurait dépasser le montant effectivement payé par
        l&apos;utilisateur au titre du forfait concerné.
      </p>

      <h2>11. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est régi par notre{" "}
        <Link href="/confidentialite">Politique de confidentialité</Link>, qui fait partie intégrante
        des présentes CGU.
      </p>

      <h2>12. Résiliation</h2>
      <p>
        L&apos;utilisateur peut supprimer son compte à tout moment depuis les paramètres du service
        ou en utilisant notre <Link href="/contact">formulaire de contact</Link>.
      </p>
      <p>
        Seren SAS se réserve le droit de suspendre ou de résilier l&apos;accès d&apos;un utilisateur
        en cas de violation des présentes CGU, sans préavis ni indemnité.
      </p>

      <h2>13. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L616-1 et suivants du Code de la consommation, tout
        consommateur a le droit de recourir gratuitement à un médiateur de la consommation en
        vue de la résolution amiable d&apos;un litige, après démarche écrite préalable auprès de
        Seren SAS via notre <Link href="/contact">formulaire de contact</Link>.
      </p>
      <p>Médiateur compétent : [en cours de désignation].</p>

      <h2>14. Modifications des CGU</h2>
      <p>
        Seren SAS se réserve le droit de modifier les présentes CGU à tout moment. Les
        utilisateurs seront informés de toute modification substantielle par e-mail au moins
        30 jours avant l&apos;entrée en vigueur des nouvelles conditions. La poursuite de l&apos;utilisation
        du service après cette période vaut acceptation des nouvelles CGU.
      </p>

      <h2>15. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de
        résolution amiable, les tribunaux compétents du ressort du siège social de Seren SAS
        seront seuls compétents.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU, utilisez notre{" "}
        <Link href="/contact">formulaire de contact</Link>.
      </p>
    </LegalLayout>
  );
}
