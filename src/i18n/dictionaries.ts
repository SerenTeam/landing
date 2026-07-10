import type { Locale } from "./config";

/**
 * Dictionnaire de l'interface (chrome + landing + inscription).
 * Le français est la source de vérité ; `en` doit respecter la même forme.
 * Les pages légales ne passent pas par ce dictionnaire (JSX riche dédié par langue).
 */
const fr = {
  nav: {
    howItWorks: "Comment ça marche",
    testimonials: "Témoignages",
    blog: "Blog",
    login: "Se connecter",
    cta: "Commencer gratuitement",
    switchTo: "English",
    switchAria: "Passer en anglais",
  },
  hero: {
    badge: "Disponible 24h/24, 7j/7",
    titleLine1: "Vous venez de vivre",
    titleLine2: "un moment difficile.",
    titleLine3: "On s'occupe du reste.",
    subtitle:
      "Seren vous guide pas à pas dans toutes les démarches après la perte d'un proche, dans le bon ordre, avec les bons mots, sans vous laisser seul.",
    ctaPrimary: "Commencer gratuitement",
    ctaSecondary: "Voir comment ça marche",
    reassurance: "Sans inscription obligatoire · Données protégées · Humain avant tout",
    card1Title: "Acte de décès",
    card1Status: "Complété",
    card2Title: "Clôture bancaire",
    card2Status: "En cours",
    card3Label: "Prochaine étape :",
    card3Value: "Notifier la CAF",
  },
  problem: {
    kicker: "La réalité",
    title: "Après une perte, tout s'accumule.",
    leadPrefix: "En France, une personne en deuil doit contacter en moyenne ",
    leadStrong: "22 organismes différents",
    leadSuffix:
      " dans les 6 premiers mois. Souvent sans savoir lesquels, dans quel ordre, ni comment.",
    items: [
      {
        title: "Des centaines d'heures perdues",
        description:
          "Entre les appels, les formulaires, les courriers et les délais administratifs, les proches épuisent un temps précieux au mauvais moment.",
      },
      {
        title: "Une complexité qui décourage",
        description:
          "Chaque organisme a ses propres règles, ses propres délais, son propre jargon. Sans guide, on ne sait pas par où commencer.",
      },
      {
        title: "Une solitude dans l'épreuve",
        description:
          "Notaires, banques, administrations... On se retrouve seul face à des institutions qui n'ont pas été conçues pour vous accompagner.",
      },
    ],
  },
  solution: {
    kicker: "Notre approche",
    title: "Seren vous guide, étape par étape.",
    lead: "Pas de jargon, pas de surcharge. Juste ce qu'il faut faire, dans le bon ordre, avec des explications claires.",
    stepLabel: "Étape",
    steps: [
      {
        title: "Dites-nous ce qui s'est passé",
        description:
          "En quelques questions simples, Seren comprend votre situation et identifie toutes les démarches qui vous concernent, et seulement celles-là.",
      },
      {
        title: "Suivez votre plan personnalisé",
        description:
          "Seren organise les démarches dans le bon ordre, avec les délais à respecter, les documents à rassembler et les contacts utiles pour chaque étape.",
      },
      {
        title: "Avancez à votre rythme",
        description:
          "Faites une pause quand vous en avez besoin. Seren mémorise votre progression et vous recontacte avec douceur pour chaque nouvelle étape.",
      },
    ],
  },
  reassurance: {
    statsKicker: "Chiffres clés",
    statsTitle: "Ce que vivent nos familles.",
    stats: [
      {
        value: "22 démarches",
        label: "en moyenne à effectuer dans les 6 premiers mois après une perte",
        source: "Ministère de la Justice, 2023",
      },
      {
        value: "94%",
        label: "de nos utilisateurs disent avoir été soulagés dès la première session",
        source: "Seren, enquête 2024",
      },
      {
        value: "6 mois",
        label: "de délais légaux à respecter pour certaines démarches administratives",
        source: "Code civil français",
      },
    ],
    testimonialsKicker: "Témoignages",
    testimonialsTitle: "Ce que nos membres disent de Seren.",
    testimonials: [
      {
        quote:
          "Je ne savais pas par où commencer. Seren m'a redonné le sentiment de contrôler quelque chose dans un moment où tout s'effondrait.",
        author: "Marie-Claire, 54 ans",
        context: "Après la perte de son mari",
      },
      {
        quote:
          "En 20 minutes, j'avais une liste claire de tout ce que j'avais à faire. Pour la première fois depuis des semaines, je me suis sentie moins seule.",
        author: "Thomas, 38 ans",
        context: "Après la perte de son père",
      },
    ],
  },
  cta: {
    title: "Vous n'avez pas à traverser ça seul.",
    lead: "Seren est là pour vous aider à avancer, une étape à la fois, avec clarté et bienveillance.",
    primary: "Commencer gratuitement",
    secondary: "Lire nos guides",
    reassurance: "Sans engagement · Vos données restent privées",
  },
  footer: {
    tagline:
      "Un copilote humain et apaisant pour vous guider dans les démarches après la perte d'un proche.",
    productTitle: "Produit",
    howItWorks: "Comment ça marche",
    blog: "Blog",
    getStarted: "Commencer",
    legalTitle: "Légal",
    legalNotice: "Mentions légales",
    privacy: "Confidentialité",
    terms: "CGU",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
  },
  legal: {
    home: "Accueil",
    lastUpdated: "Dernière mise à jour :",
    translationNotice: null as string | null,
  },
  inscription: {
    badge: "Bientôt disponible",
    title: "Seren arrive bientôt.",
    subtitle:
      "Nous préparons quelque chose pour vous aider à traverser les démarches après la perte d'un proche. Soyez parmi les premiers à en bénéficier.",
    firstName: "Prénom",
    firstNamePlaceholder: "Marie",
    email: "Email",
    emailPlaceholder: "marie@exemple.fr",
    situation: "Votre situation",
    situationOptional: "(optionnel)",
    situationPlaceholder: "Choisissez une situation",
    situationLoss: "J'ai récemment perdu un proche",
    situationAnticipate: "Je veux anticiper pour ma famille",
    situationPro: "Je suis professionnel (notaire, pompes funèbres…)",
    emailError: "Veuillez renseigner votre adresse email.",
    submit: "Me prévenir au lancement",
    disclaimer: "Aucun spam. Juste un email quand Seren est prêt.",
    successTitle: "Merci",
    successBody:
      "Vous serez parmi les premiers à découvrir Seren. On vous écrit dès que c'est prêt.",
    backHome: "← Retour à l'accueil",
  },
};

const en: typeof fr = {
  nav: {
    howItWorks: "How it works",
    testimonials: "Testimonials",
    blog: "Blog",
    login: "Log in",
    cta: "Get started for free",
    switchTo: "Français",
    switchAria: "Switch to French",
  },
  hero: {
    badge: "Available 24/7",
    titleLine1: "You've just been through",
    titleLine2: "a difficult time.",
    titleLine3: "We'll handle the rest.",
    subtitle:
      "Seren guides you step by step through everything that follows the loss of someone close in the right order, with the right words, never leaving you on your own.",
    ctaPrimary: "Get started for free",
    ctaSecondary: "See how it works",
    reassurance: "No sign-up required · Your data protected · Human first",
    card1Title: "Death certificate",
    card1Status: "Completed",
    card2Title: "Closing bank accounts",
    card2Status: "In progress",
    card3Label: "Next step:",
    card3Value: "Notify benefits office",
  },
  problem: {
    kicker: "The reality",
    title: "After a loss, everything piles up.",
    leadPrefix: "In France, a grieving person has to contact on average ",
    leadStrong: "22 different organisations",
    leadSuffix:
      " within the first 6 months often without knowing which ones, in what order, or how.",
    items: [
      {
        title: "Hundreds of hours lost",
        description:
          "Between phone calls, forms, letters and administrative deadlines, families burn through precious time at the worst possible moment.",
      },
      {
        title: "Discouraging complexity",
        description:
          "Every organisation has its own rules, its own deadlines, its own jargon. Without guidance, you don't know where to begin.",
      },
      {
        title: "Facing it alone",
        description:
          "Notaries, banks, government offices... You find yourself alone against institutions that were never designed to support you.",
      },
    ],
  },
  solution: {
    kicker: "Our approach",
    title: "Seren guides you, step by step.",
    lead: "No jargon, no overload. Just what needs doing, in the right order, with clear explanations.",
    stepLabel: "Step",
    steps: [
      {
        title: "Tell us what happened",
        description:
          "With a few simple questions, Seren understands your situation and identifies every step that applies to you and only those.",
      },
      {
        title: "Follow your personalised plan",
        description:
          "Seren organises everything in the right order, with the deadlines to meet, the documents to gather and the right contacts for each step.",
      },
      {
        title: "Move at your own pace",
        description:
          "Pause whenever you need to. Seren remembers your progress and gently reaches out to you for each new step.",
      },
    ],
  },
  reassurance: {
    statsKicker: "Key figures",
    statsTitle: "What our families go through.",
    stats: [
      {
        value: "22 procedures",
        label: "on average to complete within the first 6 months after a loss",
        source: "French Ministry of Justice, 2023",
      },
      {
        value: "94%",
        label: "of our users say they felt relieved from the very first session",
        source: "Seren, 2024 survey",
      },
      {
        value: "6 months",
        label: "of legal deadlines to meet for certain administrative procedures",
        source: "French Civil Code",
      },
    ],
    testimonialsKicker: "Testimonials",
    testimonialsTitle: "What our members say about Seren.",
    testimonials: [
      {
        quote:
          "I didn't know where to start. Seren gave me back the feeling of being in control of something at a time when everything was falling apart.",
        author: "Marie-Claire, 54",
        context: "After losing her husband",
      },
      {
        quote:
          "In 20 minutes, I had a clear list of everything I had to do. For the first time in weeks, I felt less alone.",
        author: "Thomas, 38",
        context: "After losing his father",
      },
    ],
  },
  cta: {
    title: "You don't have to go through this alone.",
    lead: "Seren is here to help you move forward, one step at a time, with clarity and care.",
    primary: "Get started for free",
    secondary: "Read our guides",
    reassurance: "No commitment · Your data stays private",
  },
  footer: {
    tagline:
      "A human, reassuring copilot to guide you through everything that follows the loss of someone close.",
    productTitle: "Product",
    howItWorks: "How it works",
    blog: "Blog",
    getStarted: "Get started",
    legalTitle: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
  legal: {
    home: "Home",
    lastUpdated: "Last updated:",
    translationNotice:
      "This is a courtesy translation. In case of any discrepancy, the French version prevails.",
  },
  inscription: {
    badge: "Coming soon",
    title: "Seren is coming soon.",
    subtitle:
      "We're building something to help you through everything that follows the loss of someone close. Be among the first to benefit from it.",
    firstName: "First name",
    firstNamePlaceholder: "Marie",
    email: "Email",
    emailPlaceholder: "marie@example.com",
    situation: "Your situation",
    situationOptional: "(optional)",
    situationPlaceholder: "Choose a situation",
    situationLoss: "I recently lost someone close",
    situationAnticipate: "I want to plan ahead for my family",
    situationPro: "I'm a professional (notary, funeral director…)",
    emailError: "Please enter your email address.",
    submit: "Notify me at launch",
    disclaimer: "No spam. Just one email when Seren is ready.",
    successTitle: "Thank you",
    successBody:
      "You'll be among the first to discover Seren. We'll write to you as soon as it's ready.",
    backHome: "← Back to home",
  },
};

const dictionaries = { fr, en } as const;

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
