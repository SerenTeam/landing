# Design System — Seren Landing

Extrait depuis Figma (node `19:21`, file `GgNVToRSKbBE1oagJeAGOm`) et adapté à la palette Seren.

---

## Couleurs

```
Primaire (CTA)   : #2E7D80   ← teal sage Seren (remplace #006bfa du Figma)
Fond page        : #F8FAF9
Fond card        : #EEF4F2
Texte principal  : #1A2E35   ← quasi-noir Seren (remplace #1d1d1d du Figma)
Texte muted      : #6B8A85
Texte blanc      : #FFFFFF   (hero sombre, boutons)
Texte blanc doux : rgba(255,255,255,0.8)  (disclaimers, sous-titres hero)
Navbar bg        : rgba(248,250,249,0.8)  ← F8FAF9 avec 80% opacité + blur
```

---

## Typographie

Police unique : **Inter** (Google Fonts)  
Variantes : `Inter` (Regular 400) + `Inter` (Medium 500)

| Élément             | Taille  | Poids   | Line-height |
|---------------------|---------|---------|-------------|
| H1 hero             | 50.5px  | 400     | 59.4px (118%) |
| H2 section          | 38px    | 500     | 46px        |
| H3 card             | 24px    | 500     | 32px        |
| Body / sous-titre   | 19.5px  | 500     | 32px (164%) |
| Body small          | 16px    | 400     | 24px        |
| Nav links           | 16px    | 400     | 20px        |
| Bouton large        | 18px    | 500     | 27px        |
| Bouton medium       | 16px    | 500     | 24px        |
| Disclaimer italic   | 16px    | 400 italic | 19.2px   |

---

## Border Radius

```
Cards / images / containers : 32px
Boutons (pill)              : 9999px  (128px dans Figma = effet pill)
Inputs                      : 12px
Badges / tags               : 9999px
```

---

## Boutons

### Primary Large
```
bg          : #2E7D80
text        : #FFFFFF
font        : Inter Medium 18px
height      : 51px
padding     : 12px 32px
border-radius: 9999px
```

### Primary Medium
```
bg          : #2E7D80
text        : #FFFFFF
font        : Inter Medium 16px
height      : 42px
padding     : 9px 24px
border-radius: 9999px
```

### Ghost / Texte
```
bg          : transparent
text        : #1A2E35
font        : Inter Regular 16px
height      : 42px
padding     : 9px 16px
```

### Hover states
```
Primary : bg #245F62 (teal + 15% plus sombre)
Ghost   : bg rgba(46,125,128,0.08)
```

---

## Navbar

```
height          : 82px
bg              : rgba(248,250,249,0.8)
backdrop-filter : blur(16px)
box-shadow      : 0 0.3px 0.3px -1.25px rgba(0,0,0,0.18),
                  0 1.14px 1.14px -2.5px rgba(0,0,0,0.16),
                  0 5px 5px -3.75px rgba(0,0,0,0.06)
position        : sticky top-0
z-index         : 50
```

---

## Hero Block

```
Layout          : image pleine largeur, border-radius 32px, margin 80px côtés
Image overlay   : gradient linéaire de gauche (rgba(0,0,0,0.75)) vers 55% (rgba(0,0,0,0.1))
Copy            : positionné à gauche, couleur blanche
Max-width copy  : ~46% de la largeur totale
Hauteur bloc    : 650px
```

---

## Espacement (échelle)

```
4   → 4px    (micro, séparateurs)
8   → 8px    (espace intra-composant)
12  → 12px
16  → 16px   (padding bouton, espace texte)
24  → 24px
32  → 32px   (margin latérale minimum, padding card)
48  → 48px
64  → 64px
80  → 80px   (margin hero)
96  → 96px   (padding section)
120 → 120px  (padding section large)
```

---

## Ombres

```
Card légère  : 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
Card medium  : 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04)
Navbar       : voir section Navbar ci-dessus
```

---

## Layout

```
Max-width canvas  : 1440px
Max-width contenu : 1280px
Padding latéral   : 80px (desktop), 32px (tablet), 16px (mobile)
Grille            : 12 colonnes, gap 24px
```

---

## Sections de page (ordre)

1. **Navbar** — sticky, frosted glass
2. **Hero** — photo pleine largeur + gradient + copy gauche + CTA pill
3. **Laurels / Social proof** — logos presse en bande horizontale
4. **Problem** — fond gris/card, texte centré
5. **Solution / Features** — alternance texte + image
6. **Security badges** — CCPA, certifications
7. **Testimonials** — grille de cards avec avatars
8. **Video / Demo** — embed centré
9. **CTA final** — fond teal, titre blanc + bouton
10. **Footer** — liens, app stores, réseaux sociaux

---

## Notes d'adaptation Seren

- Le bleu `#006bfa` du Figma est remplacé partout par `#2E7D80`
- Le fond blanc pur est remplacé par `#F8FAF9` (plus chaud, moins clinique)
- Le ton hero : éviter les images tech/laptop, préférer des visuels familiaux doux
- Jamais "décès" dans les textes visibles → "perte d'un proche"
