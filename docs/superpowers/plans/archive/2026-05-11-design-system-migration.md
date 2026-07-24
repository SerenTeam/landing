# Design System Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrer toute la landing page vers le nouveau design system extrait du Figma (Inter, border-radius 32px/pill, navbar frosted glass, typographie cohérente, espacement unifié).

**Architecture:** Mise à jour séquentielle fichier par fichier — globals.css → layout.tsx → composants partagés (Navbar, Footer) → sections (Hero, Problem, Solution, Reassurance, CTA). Aucune nouvelle dépendance sauf Inter via next/font/google.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS v4 (`@theme`), TypeScript

---

## Fichiers touchés

| Fichier | Changement |
|---|---|
| `src/app/globals.css` | Ajout tokens Inter, ajustement --font-sans |
| `src/app/layout.tsx` | Remplacer Geist → Inter + Inter_Display (Medium 500) |
| `src/components/layout/Navbar.tsx` | Frosted glass h-[82px], shadow multi-couche, bouton pill 42px |
| `src/components/layout/Footer.tsx` | Typographie Inter, espacements design system |
| `src/components/sections/Hero.tsx` | Titre 50.5px/Inter, bouton pill 51px, card border-radius 32px |
| `src/components/sections/ProblemSection.tsx` | Cards border-radius 32px, bg-white → bg-[#F8FAF9], typo ajustée |
| `src/components/sections/SolutionSection.tsx` | Spacing 96px, typo scale, bordures cohérentes |
| `src/components/sections/ReassuranceSection.tsx` | Cards 32px, testimonials redesign |
| `src/components/sections/CTASection.tsx` | Boutons pill 51px/42px, bg teal, typo |

---

## Task 1 : Tokens CSS + police Inter

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1 : Mettre à jour globals.css**

Remplacer le contenu entier par :

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  /* Seren palette */
  --color-primary:       #2E7D80;
  --color-primary-dark:  #245F62;
  --color-primary-light: #6BAE9A;
  --color-ink:           #1A2E35;
  --color-page-bg:       #F8FAF9;
  --color-card-bg:       #EEF4F2;
  --color-text:          #1A2E35;
  --color-text-muted:    #6B8A85;

  /* Fonts */
  --font-sans: var(--font-inter);
  --font-medium: var(--font-inter-medium);
}

body {
  background-color: #F8FAF9;
  color: #1A2E35;
  font-family: var(--font-inter), sans-serif;
}
```

- [ ] **Step 2 : Mettre à jour layout.tsx**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Seren — Votre guide pour les démarches après une perte",
  description:
    "Seren vous accompagne pas à pas dans toutes les démarches administratives après la perte d'un proche. Clair, humain, apaisant.",
  icons: {
    icon: "/logo-bubble.svg",
    shortcut: "/logo-bubble.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-page-bg text-text">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3 : Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "style: switch font to Inter, update CSS design tokens"
```

---

## Task 2 : Navbar — frosted glass + specs design system

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1 : Réécrire Navbar.tsx**

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleSectionClick(e: React.MouseEvent, sectionId: string) {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-[16px]"
      style={{
        backgroundColor: "rgba(248,250,249,0.8)",
        boxShadow:
          "0 0.3px 0.3px -1.25px rgba(0,0,0,0.18), 0 1.14px 1.14px -2.5px rgba(0,0,0,0.16), 0 5px 5px -3.75px rgba(0,0,0,0.06)",
      }}
    >
      <nav className="mx-auto max-w-[1280px] px-[80px] flex items-center justify-between h-[82px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo-full.svg" alt="Seren" width={104} height={40} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-normal text-[16px] text-text">
          <li>
            <a
              href="/#comment-ca-marche"
              onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
              className="hover:text-primary transition-colors cursor-pointer leading-[20px]"
            >
              Comment ça marche
            </a>
          </li>
          <li>
            <a
              href="/#temoignages"
              onClick={(e) => handleSectionClick(e, "temoignages")}
              className="hover:text-primary transition-colors cursor-pointer leading-[20px]"
            >
              Témoignages
            </a>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors leading-[20px]">
              Blog
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://buy.stripe.com/test_cNi6oGdwX6dtfXQ4FW87K02"
            className="h-[42px] px-6 rounded-full bg-primary text-[16px] font-medium text-white hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
          >
            Commencer
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-card-bg px-6 py-4 flex flex-col gap-4 text-[16px] font-normal" style={{ backgroundColor: "rgba(248,250,249,0.97)" }}>
          <a
            href="/#comment-ca-marche"
            onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
            className="text-text hover:text-primary cursor-pointer"
          >
            Comment ça marche
          </a>
          <a
            href="/#temoignages"
            onClick={(e) => handleSectionClick(e, "temoignages")}
            className="text-text hover:text-primary cursor-pointer"
          >
            Témoignages
          </a>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-text hover:text-primary">
            Blog
          </Link>
          <a
            href="https://buy.stripe.com/test_cNi6oGdwX6dtfXQ4FW87K02"
            onClick={() => setOpen(false)}
            className="h-[42px] rounded-full bg-primary flex items-center justify-center text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Commencer
          </a>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "style: navbar frosted glass, h-82px, Inter 16px, pill button 42px"
```

---

## Task 3 : Footer — Inter + design system

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1 : Réécrire Footer.tsx**

```tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 text-[16px]">
      <div className="mx-auto max-w-[1280px] px-[80px] py-[96px] flex flex-col md:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} className="brightness-0 invert" />
          <p className="text-white/50 text-[16px] leading-[24px]">
            Un copilote humain et apaisant pour vous guider dans les démarches
            après la perte d'un proche.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-white/40 uppercase text-xs tracking-wider font-medium">Produit</span>
            <Link href="#comment-ca-marche" className="hover:text-white transition-colors leading-[24px]">
              Comment ça marche
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors leading-[24px]">
              Blog
            </Link>
            <a href="https://buy.stripe.com/test_cNi6oGdwX6dtfXQ4FW87K02" className="hover:text-white transition-colors leading-[24px]">
              Commencer
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-white/40 uppercase text-xs tracking-wider font-medium">Légal</span>
            <Link href="/mentions-legales" className="hover:text-white transition-colors leading-[24px]">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors leading-[24px]">
              Confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-white transition-colors leading-[24px]">
              CGU
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-white/40 uppercase text-xs tracking-wider font-medium">Contact</span>
            <a href="mailto:contact@seren-app.fr" className="hover:text-white transition-colors leading-[24px]">
              contact@seren-app.fr
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Seren. Tous droits réservés.
      </div>
    </footer>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "style: footer Inter, px-80px, py-96px spacing, logo invert"
```

---

## Task 4 : Hero — typographie 50.5px, boutons pill 51px/42px, cards 32px

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1 : Réécrire Hero.tsx**

```tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-page-bg">
      <div className="mx-auto max-w-[1280px] px-[80px] py-[96px] md:py-[120px] flex flex-col md:flex-row items-center gap-16">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-card-bg px-4 py-1.5 text-xs font-medium text-primary w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-light inline-block" />
            Disponible 24h/24, 7j/7
          </div>

          <h1
            className="font-normal leading-[1.18] tracking-tight text-text"
            style={{ fontSize: "50.5px", lineHeight: "59.4px" }}
          >
            Vous venez de vivre
            <br />
            <span className="text-primary font-medium">un moment difficile.</span>
            <br />
            On s'occupe du reste.
          </h1>

          <p className="text-text-muted leading-[32px]" style={{ fontSize: "19.5px" }}>
            Seren vous guide pas à pas dans toutes les démarches après la perte
            d'un proche — dans le bon ordre, avec les bons mots, sans vous laisser seul.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://buy.stripe.com/test_cNi6oGdwX6dtfXQ4FW87K02"
              className="h-[51px] px-8 rounded-full bg-primary text-[18px] font-medium text-white hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
            >
              Commencer gratuitement
            </a>
            <Link
              href="#comment-ca-marche"
              className="h-[42px] px-6 rounded-full border border-primary/30 text-[16px] font-medium text-primary hover:bg-card-bg transition-colors inline-flex items-center justify-center"
            >
              Voir comment ça marche
            </Link>
          </div>

          <p className="text-[16px] leading-[19.2px] italic text-text-muted/60">
            Sans inscription obligatoire · Données protégées · Humain avant tout
          </p>
        </div>

        {/* Right: visual */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            {/* Background */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary-light/30 via-card-bg to-primary/20" />

            {/* Card 1 */}
            <div className="absolute top-8 left-8 bg-white rounded-[32px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.04)] p-5 w-52">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</div>
                <span className="text-xs font-medium text-text">Acte de décès</span>
              </div>
              <div className="h-1.5 rounded-full bg-card-bg overflow-hidden">
                <div className="h-full w-full rounded-full bg-primary" />
              </div>
              <p className="text-xs text-text-muted mt-1.5">Complété</p>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-12 right-6 bg-white rounded-[32px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.04)] p-5 w-52">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary-light/20 flex items-center justify-center text-primary text-sm">→</div>
                <span className="text-xs font-medium text-text">Clôture bancaire</span>
              </div>
              <div className="h-1.5 rounded-full bg-card-bg overflow-hidden">
                <div className="h-full w-3/5 rounded-full bg-primary-light" />
              </div>
              <p className="text-xs text-text-muted mt-1.5">En cours</p>
            </div>

            {/* Card 3 */}
            <div className="absolute bottom-4 left-10 bg-primary rounded-[24px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] p-4 w-40">
              <p className="text-white text-xs font-medium">Prochaine étape :</p>
              <p className="text-white/80 text-xs mt-0.5">Notifier la CAF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "style: hero Inter 50.5px, pill buttons 51/42px, cards rounded-32px"
```

---

## Task 5 : ProblemSection — cards 32px, bg cohérent, typo

**Files:**
- Modify: `src/components/sections/ProblemSection.tsx`

- [ ] **Step 1 : Réécrire ProblemSection.tsx**

```tsx
const problems = [
  {
    icon: "⏳",
    title: "Des centaines d'heures perdues",
    description:
      "Entre les appels, les formulaires, les courriers et les délais administratifs, les proches épuisent un temps précieux au mauvais moment.",
  },
  {
    icon: "🗂️",
    title: "Une complexité qui décourage",
    description:
      "Chaque organisme a ses propres règles, ses propres délais, son propre jargon. Sans guide, on ne sait pas par où commencer.",
  },
  {
    icon: "🫂",
    title: "Une solitude dans l'épreuve",
    description:
      "Notaires, banques, administrations... On se retrouve seul face à des institutions qui n'ont pas été conçues pour vous accompagner.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-page-bg py-[96px]">
      <div className="mx-auto max-w-[1280px] px-[80px]">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium text-[16px] mb-3 leading-[24px]">La réalité</p>
          <h2 className="font-medium text-text leading-tight mb-4" style={{ fontSize: "38px", lineHeight: "46px" }}>
            Après une perte, tout s'accumule.
          </h2>
          <p className="text-text-muted leading-[32px]" style={{ fontSize: "19.5px" }}>
            En France, une personne en deuil doit contacter en moyenne{" "}
            <strong className="text-text font-medium">22 organismes différents</strong> dans les
            6 premiers mois. Souvent sans savoir lesquels, dans quel ordre, ni comment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-[32px] bg-card-bg p-8 flex flex-col gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-medium text-text leading-[32px]" style={{ fontSize: "24px" }}>{p.title}</h3>
              <p className="text-text-muted text-[16px] leading-[24px]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/sections/ProblemSection.tsx
git commit -m "style: problem cards rounded-32px, Inter type scale, py-96px"
```

---

## Task 6 : SolutionSection — espacement, typo, cohérence

**Files:**
- Modify: `src/components/sections/SolutionSection.tsx`

- [ ] **Step 1 : Réécrire SolutionSection.tsx**

```tsx
const steps = [
  {
    number: "01",
    title: "Dites-nous ce qui s'est passé",
    description:
      "En quelques questions simples, Seren comprend votre situation et identifie toutes les démarches qui vous concernent — et seulement celles-là.",
  },
  {
    number: "02",
    title: "Suivez votre plan personnalisé",
    description:
      "Seren organise les démarches dans le bon ordre, avec les délais à respecter, les documents à rassembler et les contacts utiles pour chaque étape.",
  },
  {
    number: "03",
    title: "Avancez à votre rythme",
    description:
      "Faites une pause quand vous en avez besoin. Seren mémorise votre progression et vous recontacte avec douceur pour chaque nouvelle étape.",
  },
];

export default function SolutionSection() {
  return (
    <section id="comment-ca-marche" className="py-[96px] bg-white">
      <div className="mx-auto max-w-[1280px] px-[80px]">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium text-[16px] mb-3 leading-[24px]">Notre approche</p>
          <h2 className="font-medium text-text leading-tight mb-4" style={{ fontSize: "38px", lineHeight: "46px" }}>
            Seren vous guide, étape par étape.
          </h2>
          <p className="text-text-muted leading-[32px]" style={{ fontSize: "19.5px" }}>
            Pas de jargon, pas de surcharge. Juste ce qu'il faut faire,
            dans le bon ordre, avec des explications claires.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-card-bg last:border-0"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-16">
                <span className="font-bold text-primary/15 leading-none" style={{ fontSize: "50.5px" }}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 max-w-xl">
                <h3 className="font-medium text-text leading-[32px]" style={{ fontSize: "24px" }}>{step.title}</h3>
                <p className="text-text-muted text-[16px] leading-[24px]">{step.description}</p>
              </div>

              {/* Step indicator */}
              <div className="hidden md:flex flex-1 justify-end items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-[16px]"
                  style={{
                    backgroundColor: i === 0 ? "#2E7D80" : i === 1 ? "#6BAE9A" : "#1A2E35",
                  }}
                >
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/sections/SolutionSection.tsx
git commit -m "style: solution section Inter type scale, py-96px, h3 24px"
```

---

## Task 7 : ReassuranceSection — stats + testimonials design system

**Files:**
- Modify: `src/components/sections/ReassuranceSection.tsx`

- [ ] **Step 1 : Réécrire ReassuranceSection.tsx**

```tsx
const stats = [
  { value: "22", label: "démarches en moyenne à effectuer après une perte" },
  { value: "6 mois", label: "de délais légaux à respecter pour certaines démarches" },
  { value: "94%", label: "de nos utilisateurs disent avoir été soulagés dès la première session" },
];

const testimonials = [
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
];

export default function ReassuranceSection() {
  return (
    <section id="temoignages" className="py-[96px] bg-page-bg">
      <div className="mx-auto max-w-[1280px] px-[80px]">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((s) => (
            <div key={s.value} className="text-center flex flex-col gap-2">
              <span className="font-bold text-primary" style={{ fontSize: "50.5px", lineHeight: "59.4px" }}>{s.value}</span>
              <p className="text-text-muted text-[16px] leading-[24px] max-w-xs mx-auto">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-[32px] bg-card-bg p-8 flex flex-col gap-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <blockquote className="text-text leading-[32px] italic" style={{ fontSize: "19.5px" }}>
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-medium text-text text-[16px] leading-[24px]">{t.author}</p>
                <p className="text-text-muted text-[16px] leading-[24px] mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/sections/ReassuranceSection.tsx
git commit -m "style: stats 50.5px, testimonials rounded-32px, Inter type scale"
```

---

## Task 8 : CTASection — boutons pill specs, bg ink, typo

**Files:**
- Modify: `src/components/sections/CTASection.tsx`

- [ ] **Step 1 : Réécrire CTASection.tsx**

```tsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-[96px] bg-ink">
      <div className="mx-auto max-w-[1280px] px-[80px] text-center flex flex-col items-center gap-8">
        <h2
          className="font-medium text-white leading-tight max-w-2xl"
          style={{ fontSize: "38px", lineHeight: "46px" }}
        >
          Vous n'avez pas à traverser ça seul.
        </h2>
        <p className="text-white/70 leading-[32px] max-w-xl" style={{ fontSize: "19.5px" }}>
          Seren est là pour vous aider à avancer, une étape à la fois,
          avec clarté et bienveillance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="https://buy.stripe.com/test_cNi6oGdwX6dtfXQ4FW87K02"
            className="h-[51px] px-8 rounded-full bg-primary text-[18px] font-medium text-white hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
          >
            Commencer gratuitement
          </a>
          <Link
            href="/blog"
            className="h-[42px] px-6 rounded-full border border-white/20 text-[16px] font-medium text-white/80 hover:border-white/40 hover:text-white transition-colors inline-flex items-center justify-center"
          >
            Lire nos guides
          </Link>
        </div>
        <p className="text-white/30 text-[16px] leading-[19.2px] italic">
          Aucun engagement · Vos données restent privées
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/sections/CTASection.tsx
git commit -m "style: CTA pill buttons 51/42px, bg-ink, Inter type scale"
```

---

## Checklist de couverture

- [x] Fonte Inter avec 400/500/600/700
- [x] Tokens CSS (primary, ink, page-bg, card-bg, text-muted)
- [x] Navbar frosted glass h-82px, shadow, Inter 16px, pill 42px
- [x] Footer Inter, px-80px, py-96px
- [x] Hero H1 50.5px/59.4px, bouton large 51px, secondary 42px, cards 32px
- [x] Problem cards rounded-32px, H2 38px/46px, body 19.5px/32px
- [x] Solution H2 38px, H3 24px, body 16px, py-96px
- [x] Reassurance stats 50.5px, testimonials rounded-32px, body 19.5px
- [x] CTA H2 38px, primary 51px, ghost 42px, bg-ink
- [x] Padding latéral 80px desktop, max-width 1280px
