@AGENTS.md

# Projet Seren — Context permanent

## C'est quoi
Landing page + blog de Seren, assistant digital post-décès français.
Stack : Next.js 16 App Router, Tailwind CSS v4, TypeScript, MDX local.
Déployé sur Netlify via @netlify/plugin-nextjs (netlify.toml à la racine du projet).

## Palette couleurs (non négociable)
Source de vérité : `src/app/globals.css` (`@theme`). Ne jamais coder une couleur en dur sans vérifier ce fichier d'abord.
- Primary : #006BFA (bleu) · hover #0057D0 · light #EAF3FE · border #B5D4F4
- Background page : #F8F8F8 · Surface : #FAFAFA
- Text : #1D1D1D · Heading : #333333 · Secondary : #42424A · Muted : #666676
- Border : #D9DBE0 · Border card : #F2F0FF

## Ton de Seren (non négociable)
- Empathique, clair, sans jargon
- Jamais "décès" dans le hero → "perte d'un proche"
- Pas anxiogène, pas religieux, pas froid
- Aucun contenu de test ne doit atterrir dans `content/blog/` (chaque `.mdx` du dossier est publié tel quel, il n'y a pas de statut brouillon)

## Structure du projet
- `src/app/page.tsx` → landing (/)
- `src/app/blog/` → liste + article individuel, lecture statique de `content/blog/*.mdx` via `src/lib/blog.ts`
- `src/app/admin/` → éditeur d'articles (protégé par modale de login, pas de route dédiée)
- `src/app/api/auth/` → login/logout/check (cookie de session HMAC, voir `src/lib/session.ts`)
- `src/app/api/admin/` → CRUD articles ; publie en committant sur GitHub via `src/lib/github.ts` (déclenche un rebuild Netlify), ne touche jamais le filesystem local
- `content/blog/` → fichiers MDX, source de vérité du contenu publié
- `src/components/layout/` → Navbar, Footer, LegalLayout, LanguageSwitcher
- `src/components/sections/` → sections de la landing (Hero, Problem, Solution, Reassurance, CTA)
- `src/i18n/` → `config.ts` (locales + helpers de chemin) et `dictionaries.ts` (textes UI FR/EN)
- `src/app/en/` → miroir anglais des pages traduisibles (landing, inscription, pages légales)
- `src/proxy.ts` → proxy unique (ex-`middleware.ts`) : auth des API admin **et** détection de langue à l'entrée

## i18n FR/EN (non négociable)
- Français à `/` (inchangé), anglais sous `/en`. Détection auto de la langue du device via `src/proxy.ts` ; le cookie `NEXT_LOCALE` (choix manuel du switcher) est prioritaire.
- Textes UI dans `src/i18n/dictionaries.ts` (fr = source de vérité) → toute nouvelle string traduisible s'ajoute dans **fr ET en**, jamais en dur dans un composant.
- Les composants partagés prennent une prop `lang: Locale` qui défaut à `"fr"` → les pages FR restent inchangées, seules les pages `/en` passent `lang="en"`.
- Blog = **FR uniquement** (pas de `/en/blog`) ; le switcher renvoie vers `/en` sur les pages non traduites.
- Pages légales EN = JSX dédié dans `src/app/en/*` (hors dictionnaire), avec mention « la version française prévaut ».

## Règles importantes
- Next 16 : la convention `middleware.ts` est renommée `proxy.ts` → toute la logique (auth admin + i18n) vit dans **`src/proxy.ts`**. Ne jamais recréer un `middleware.ts` (les deux fichiers coexistants cassent le routing → 401 sur `/`, `/cgu`…).
- Jamais de librairie auth externe (pas NextAuth, pas Clerk) → auth admin maison en HMAC (`src/lib/session.ts`), appliquée par `src/proxy.ts`
- Jamais de base de données → le contenu blog vit dans des fichiers MDX committés sur GitHub, pas de CMS externe (une intégration Notion a existé puis a été retirée en 2026-07, ne pas la réintroduire sans décision explicite)
- Variables sensibles uniquement dans `.env.local` et les variables d'environnement Netlify
- `.env.local` est dans `.gitignore` — ne jamais le committer

## État actuel
- [x] Landing page
- [x] Système auth admin (HMAC maison)
- [x] Éditeur articles /admin (publication via commit GitHub)
- [x] Blog /blog (MDX statique)
- [x] i18n FR/EN (switcher + détection auto du device via proxy)
- [x] Déploiement Netlify