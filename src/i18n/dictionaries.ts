import type { Locale } from "./config";

/**
 * Dictionnaire de l'interface (chrome + landing + inscription).
 * Le français est la source de vérité ; `en` doit respecter la même forme.
 * Les pages légales ne passent pas par ce dictionnaire (JSX riche dédié par langue).
 */
const fr = {
  nav: {
    howItWorks: "Comment ça marche",
    blog: "Blog",
    login: "Se connecter",
    cta: "Suivre Seren",
    switchTo: "English",
    switchAria: "Passer en anglais",
  },
  hero: {
    titleLine1: "Vous venez de vivre",
    titleLine2: "un moment difficile.",
    titleLine3: "On s'occupe du reste.",
    subtitle:
      "Seren vous guide pas à pas dans toutes les démarches après la perte d'un proche, dans le bon ordre, avec les bons mots, sans vous laisser seul.",
    ctaPrimary: "Suivre Seren",
    ctaSecondary: "Voir comment ça marche",
    reassurance: "Sans inscription obligatoire · Données protégées · Humain avant tout",
    card1Title: "Acte de décès",
    card1Status: "Complété",
    card2Title: "Clôture bancaire",
    card2Status: "En cours",
    card3Label: "Prochaine étape :",
    card3Value: "Notifier la CAF",
    imageAlt: "Une boisson chaude tenue à la main dans la lumière du matin",
  },
  videoShowcase: {
    ariaLabel: "Vidéo de présentation : comment fonctionne Seren",
    playLabel: "Lancer la vidéo",
    pauseLabel: "Mettre la vidéo en pause",
  },
  problem: {
    kicker: "La réalité",
    title: "Après un décès, tout s'accumule.",
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
    imageAlt: "Un carnet ouvert, un stylo et des lunettes posés sur un bureau en bois",
  },
  solution: {
    kicker: "Notre approche",
    title: "Seren vous guide, étape par étape.",
    lead: "Pas de jargon, pas de surcharge. Juste ce qu'il faut faire, dans le bon ordre, avec des explications claires.",
    stepLabel: "Étape",
    imageAlt: "Une passerelle en bois qui traverse une forêt paisible",
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
        label: "en moyenne à effectuer dans les 6 premiers mois après un décès",
        source: "Ministère de la Justice, 2023",
      },
      {
        value: "30 jours",
        label: "pour changer d'avis, avec remboursement possible si Seren ne vous convient pas",
        source: "CGU Seren",
      },
      {
        value: "6 mois",
        label: "de délais légaux à respecter pour certaines démarches administratives",
        source: "Code civil français",
      },
    ],
  },
  cta: {
    title: "Vous n'avez pas à traverser ça seul.",
    lead: "Seren est là pour vous aider à avancer, une étape à la fois, avec clarté et bienveillance.",
    primary: "Suivre Seren",
    secondary: "Lire nos guides",
    reassurance: "Disponible 24h/24, 7j/7 · Sans engagement · Vos données restent privées",
    imageAlt: "Une vallée verdoyante et brumeuse, éclairée par un lever de soleil",
  },
  footer: {
    tagline:
      "Un copilote humain et apaisant pour vous guider dans les démarches après la perte d'un proche.",
    productTitle: "Produit",
    howItWorks: "Comment ça marche",
    blog: "Blog",
    getStarted: "Suivre Seren",
    legalTitle: "Légal",
    legalNotice: "Mentions légales",
    privacy: "Confidentialité",
    terms: "CGU",
    contactTitle: "Contact",
    contactLink: "Nous écrire",
    rights: "Tous droits réservés.",
  },
  legal: {
    home: "Accueil",
    lastUpdated: "Dernière mise à jour :",
    translationNotice: null as string | null,
  },
  inscription: {
    badge: "Restons en contact",
    title: "Gardez Seren en tête.",
    subtitle:
      "Vous n'avez pas besoin de Seren aujourd'hui, et c'est tant mieux. Laissez-nous votre email : on vous partage nos nouveautés, pour le jour où vous en aurez besoin.",
    firstName: "Prénom",
    firstNamePlaceholder: "Marie",
    email: "Email",
    emailPlaceholder: "marie@exemple.fr",
    emailError: "Veuillez renseigner votre adresse email.",
    errorGeneric: "Une erreur est survenue. Réessayez dans un instant.",
    submit: "Je m'inscris",
    sending: "Envoi…",
    disclaimer: "Pas de spam, promis. Juste des nouvelles de Seren de temps en temps.",
    successTitle: "Merci",
    successBody:
      "On garde le contact — vous recevrez nos nouveautés directement par email. À très vite.",
    backHome: "← Retour à l'accueil",
  },
  contact: {
    title: "Contactez-nous",
    subtitle:
      "Une question, une remarque ? Écrivez-nous, nous vous répondrons rapidement.",
    nameLabel: "Nom",
    namePlaceholder: "Marie Dupont",
    emailLabel: "Email",
    emailPlaceholder: "marie@exemple.fr",
    subjectLabel: "Sujet",
    subjectPlaceholder: "L'objet de votre message",
    messageLabel: "Message",
    messagePlaceholder: "Votre message…",
    submit: "Envoyer le message",
    sending: "Envoi…",
    errorRequired: "Merci de renseigner votre email et votre message.",
    errorGeneric: "Une erreur est survenue. Réessayez dans un instant.",
    successTitle: "Message envoyé",
    successBody:
      "Merci, nous avons bien reçu votre message. Nous vous répondrons au plus vite.",
    backHome: "← Retour à l'accueil",
  },
};

const en: typeof fr = {
  nav: {
    howItWorks: "How it works",
    blog: "Blog",
    login: "Log in",
    cta: "Follow Seren",
    switchTo: "Français",
    switchAria: "Switch to French",
  },
  hero: {
    titleLine1: "You've just been through",
    titleLine2: "a difficult time.",
    titleLine3: "We'll handle the rest.",
    subtitle:
      "Seren guides you step by step through everything that follows the loss of someone close in the right order, with the right words, never leaving you on your own.",
    ctaPrimary: "Follow Seren",
    ctaSecondary: "See how it works",
    reassurance: "No sign-up required · Your data protected · Human first",
    card1Title: "Death certificate",
    card1Status: "Completed",
    card2Title: "Closing bank accounts",
    card2Status: "In progress",
    card3Label: "Next step:",
    card3Value: "Notify benefits office",
    imageAlt: "A warm drink held in hand in the morning light",
  },
  videoShowcase: {
    ariaLabel: "Product walkthrough video: how Seren works",
    playLabel: "Play video",
    pauseLabel: "Pause video",
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
    imageAlt: "An open notebook, a pen and glasses resting on a wooden desk",
  },
  solution: {
    kicker: "Our approach",
    title: "Seren guides you, step by step.",
    lead: "No jargon, no overload. Just what needs doing, in the right order, with clear explanations.",
    stepLabel: "Step",
    imageAlt: "A wooden footbridge crossing through a peaceful forest",
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
        value: "30 days",
        label: "to change your mind, with a refund available if Seren isn't the right fit",
        source: "Seren Terms of Service",
      },
      {
        value: "6 months",
        label: "of legal deadlines to meet for certain administrative procedures",
        source: "French Civil Code",
      },
    ],
  },
  cta: {
    title: "You don't have to go through this alone.",
    lead: "Seren is here to help you move forward, one step at a time, with clarity and care.",
    primary: "Follow Seren",
    secondary: "Read our guides",
    reassurance: "Available 24/7 · No commitment · Your data stays private",
    imageAlt: "A lush, misty valley lit by a rising sun",
  },
  footer: {
    tagline:
      "A human, reassuring copilot to guide you through everything that follows the loss of someone close.",
    productTitle: "Product",
    howItWorks: "How it works",
    blog: "Blog",
    getStarted: "Follow Seren",
    legalTitle: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
    contactTitle: "Contact",
    contactLink: "Contact us",
    rights: "All rights reserved.",
  },
  legal: {
    home: "Home",
    lastUpdated: "Last updated:",
    translationNotice:
      "This is a courtesy translation. In case of any discrepancy, the French version prevails.",
  },
  inscription: {
    badge: "Let's stay in touch",
    title: "Keep Seren in mind.",
    subtitle:
      "You don't need Seren today, and that's a good thing. Leave us your email: we'll share our news and new features, for the day you'll need us.",
    firstName: "First name",
    firstNamePlaceholder: "Marie",
    email: "Email",
    emailPlaceholder: "marie@example.com",
    emailError: "Please enter your email address.",
    errorGeneric: "Something went wrong. Please try again in a moment.",
    submit: "Subscribe",
    sending: "Sending…",
    disclaimer: "No spam, promise. Just news from Seren every now and then.",
    successTitle: "Thank you",
    successBody:
      "We'll stay in touch — you'll get our news straight to your inbox. See you soon.",
    backHome: "← Back to home",
  },
  contact: {
    title: "Contact us",
    subtitle:
      "A question, a remark? Write to us and we'll get back to you shortly.",
    nameLabel: "Name",
    namePlaceholder: "Marie Dupont",
    emailLabel: "Email",
    emailPlaceholder: "marie@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "What your message is about",
    messageLabel: "Message",
    messagePlaceholder: "Your message…",
    submit: "Send message",
    sending: "Sending…",
    errorRequired: "Please provide your email and your message.",
    errorGeneric: "Something went wrong. Please try again in a moment.",
    successTitle: "Message sent",
    successBody:
      "Thank you, we've received your message. We'll get back to you as soon as possible.",
    backHome: "← Back to home",
  },
};

const dictionaries = { fr, en } as const;

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
