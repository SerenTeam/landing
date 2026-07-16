import Link from "next/link";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Politique de confidentialité | Seren",
  description: "Comment Seren collecte, utilise et protège vos données personnelles.",
  alternates: {
    canonical: "/confidentialite",
    languages: { fr: "/confidentialite", en: "/en/confidentialite" },
  },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdated="13 mai 2026">
      <p>
        Chez Seren, la protection de vos données personnelles est une priorité absolue.
        Cette politique explique quelles données nous collectons, pourquoi et comment nous les
        utilisons, ainsi que vos droits en tant qu&apos;utilisateur.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement de vos données personnelles est <strong>Seren SAS</strong>,
        joignable via notre{" "}
        <Link href="/contact">formulaire de contact</Link>.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données nécessaires au fonctionnement du service :</p>
      <ul>
        <li>
          <strong>Données d&apos;inscription :</strong> adresse e-mail et, le cas échéant, prénom,
          fournis lors de la création de compte.
        </li>
        <li>
          <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées,
          durée de session, collectées via des outils d&apos;analyse anonymisés (Microsoft Clarity).
        </li>
        <li>
          <strong>Données liées à l&apos;utilisation du service :</strong> informations que vous
          saisissez lors de vos démarches (informations sur le défunt, liste de démarches à
          effectuer). Ces données ne sont jamais vendues ni partagées à des tiers à des fins
          commerciales.
        </li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Vous fournir le service Seren et vous accompagner dans vos démarches ;</li>
        <li>Améliorer l&apos;expérience utilisateur et la qualité du service ;</li>
        <li>Vous envoyer des communications liées à votre compte (si vous y avez consenti) ;</li>
        <li>Respecter nos obligations légales.</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Le traitement de vos données repose sur :
      </p>
      <ul>
        <li>L&apos;<strong>exécution du contrat</strong> (fourniture du service) pour les données nécessaires au fonctionnement de Seren ;</li>
        <li>Votre <strong>consentement</strong> pour les communications marketing ;</li>
        <li>Notre <strong>intérêt légitime</strong> pour l&apos;amélioration du service et la sécurité.</li>
      </ul>

      <h2>5. Conservation des données</h2>
      <p>
        Vos données sont conservées pendant la durée de votre utilisation du service, puis pendant
        3 ans à des fins de preuves légales, sauf demande de suppression de votre part. Les données
        d&apos;analyse sont anonymisées sous 13 mois.
      </p>

      <h2>6. Partage des données</h2>
      <p>
        Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement
        avec nos sous-traitants techniques (hébergement, outils d&apos;analyse), dans le cadre strict
        de leur mission et sous couvert d&apos;un contrat garantissant un niveau de protection adéquat.
      </p>
      <p>Sous-traitants principaux :</p>
      <ul>
        <li><strong>Netlify</strong> (hébergement) : États-Unis, couvert par les clauses contractuelles types de la Commission européenne.</li>
      </ul>

      <h2>7. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
        protéger vos données contre tout accès non autorisé, perte ou divulgation : chiffrement
        des communications (HTTPS), accès restreint aux données, mots de passe hachés.
      </p>

      <h2>8. Vos droits</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
        des droits suivants :
      </p>
      <ul>
        <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles ;</li>
        <li><strong>Droit de rectification :</strong> corriger des données inexactes ;</li>
        <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données ;</li>
        <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré ;</li>
        <li><strong>Droit d&apos;opposition :</strong> vous opposer à certains traitements ;</li>
        <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données.</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous via notre{" "}
        <Link href="/contact">formulaire de contact</Link>. Nous répondrons dans un délai
        maximum d&apos;un mois.
      </p>
      <p>
        Vous disposez également du droit d&apos;introduire une réclamation auprès de la{" "}
        <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Nous utilisons des cookies de mesure d&apos;audience anonymisés (Microsoft Clarity) pour
        améliorer le service. Ces cookies ne permettent pas de vous identifier personnellement.
        Vous pouvez refuser ces cookies via les paramètres de votre navigateur sans que cela
        affecte votre accès au service.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique. Toute modification significative
        vous sera notifiée par e-mail ou via une bannière sur le site.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative à la protection de vos données, écrivez-nous via notre{" "}
        <Link href="/contact">formulaire de contact</Link>.
      </p>
    </LegalLayout>
  );
}
