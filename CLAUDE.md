@AGENTS.md

# Projet Seren — Context permanent

## C'est quoi
Landing page + blog de Seren, assistant digital post-décès français.
Stack : Next.js 14 App Router, Tailwind CSS, TypeScript, MDX local.
Déployé sur Vercel : seren-landing.vercel.app

## Palette couleurs (non négociable)
- Primary : #2E7D80 (teal sage)
- Background : #F8FAF9
- Card : #EEF4F2
- Text : #1A2E35
- Muted : #6B8A85

## Ton de Seren (non négociable)
- Empathique, clair, sans jargon
- Jamais "décès" dans le hero → "perte d'un proche"
- Pas anxiogène, pas religieux, pas froid

## Structure du projet
- app/page.tsx → landing (/)
- app/blog/ → liste articles + article individuel
- app/admin/ → éditeur articles (protégé)
- app/login/ → page connexion admin
- content/blog/ → fichiers MDX des articles
- components/layout/ → Navbar, Footer
- components/ui/ → composants réutilisables

## Règles importantes
- Jamais de librairie auth externe (pas NextAuth, pas Clerk)
- Jamais de base de données
- Variables sensibles uniquement dans .env.local et Vercel env vars
- .env.local est dans .gitignore — ne jamais le committer

## État actuel
[Tu mets ici ce qui est fait / pas fait au fur et à mesure]
- [ ] Landing page
- [ ] Système auth admin
- [ ] Éditeur articles /admin
- [ ] Blog /blog
- [ ] Déploiement Vercel