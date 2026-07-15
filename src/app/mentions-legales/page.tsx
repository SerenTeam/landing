import LegalLayout from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Mentions légales | Seren",
  description: "Mentions légales de Seren, assistant numérique pour les démarches post-décès.",
  alternates: {
    canonical: "/mentions-legales",
    languages: { fr: "/mentions-legales", en: "/en/mentions-legales" },
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" lastUpdated="13 mai 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>seren.fr</strong> est édité par la société <strong>Seren SAS</strong>,
        société par actions simplifiée au capital de 1 000 €, dont le siège social est situé en France.
      </p>
      <ul>
        <li><strong>Dénomination sociale :</strong> Seren SAS</li>
        <li><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</li>
        <li><strong>Numéro SIREN :</strong> [en cours d&apos;immatriculation]</li>
        <li><strong>Adresse e-mail :</strong> <a href="mailto:contact@seren-app.fr">contact@seren-app.fr</a></li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>
        Le directeur de la publication est le représentant légal de Seren SAS.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Netlify, Inc.</strong>, dont le siège social est situé au
        512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.
        Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur le site seren.fr (textes, images, graphismes, logotypes,
        icônes, sons, logiciels…) sont la propriété exclusive de Seren SAS ou de ses partenaires,
        et sont protégés par les lois françaises et internationales relatives à la propriété
        intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation de tout ou
        partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite
        sans l&apos;autorisation écrite préalable de Seren SAS.
      </p>

      <h2>Liens hypertextes</h2>
      <p>
        Le site seren.fr peut contenir des liens vers des sites tiers. Seren SAS ne contrôle pas
        ces sites et décline toute responsabilité quant à leur contenu ou leur politique de
        confidentialité.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas de litige,
        les tribunaux français seront seuls compétents.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à :{" "}
        <a href="mailto:contact@seren-app.fr">contact@seren-app.fr</a>.
      </p>
    </LegalLayout>
  );
}
