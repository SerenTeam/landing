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
- `src/components/layout/` → Navbar, Footer, LegalLayout
- `src/components/sections/` → sections de la landing (Hero, Problem, Solution, Reassurance, CTA)

## Règles importantes
- Jamais de librairie auth externe (pas NextAuth, pas Clerk) → auth admin maison en HMAC (`src/lib/session.ts`)
- Jamais de base de données → le contenu blog vit dans des fichiers MDX committés sur GitHub, pas de CMS externe (une intégration Notion a existé puis a été retirée en 2026-07, ne pas la réintroduire sans décision explicite)
- Variables sensibles uniquement dans `.env.local` et les variables d'environnement Netlify
- `.env.local` est dans `.gitignore` — ne jamais le committer

## État actuel
- [x] Landing page
- [x] Système auth admin (HMAC maison)
- [x] Éditeur articles /admin (publication via commit GitHub)
- [x] Blog /blog (MDX statique)
- [x] Déploiement Netlify