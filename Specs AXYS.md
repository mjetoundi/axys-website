# GUIDE COMPLET DE CONCEPTION DU SITE AXYS

## Stratégie, Architecture, Contenu \& Design Détaillé

---

## PART 1 : PALETTES COULEURS \& IDENTITÉ VISUELLE

### Couleurs Principales

| Élément                               | Code Hexadécimal | Utilisation                                                    |
| :------------------------------------ | :--------------- | :------------------------------------------------------------- |
| **Couleur Primaire (Bleu Axys)**      | \#288CE2         | CTA, accents, headers, hover states, backgrounds sections clés |
| **Couleur Secondaire (Teal Moderne)** | \#1BA89A         | Éléments graphiques secondaires, décorations, accents subtils  |
| **Neutre Foncé (Noir Premium)**       | \#0F1419         | Titres H1-H2, texte principal, éléments de forte hiérarchie    |
| **Neutre Clair (Blanc Pur)**          | \#FFFFFF         | Fonds principaux, espaces blancs, contraste                    |
| **Gris Secondaire (Support)**         | \#6E7E91         | Textes secondaires, légendes, sous-titres                      |
| **Gris Clair (Arrière-plan)**         | \#F5F7FA         | Sections alternées, cards, dividers légers                     |

### Police de Caractères

**Font Globale : SATOSHI**

- **Satoshi Bold** (700) : Titres H1, H2, CTA buttons
- **Satoshi SemiBold** (600) : Sous-titres H3, card titles, labels
- **Satoshi Regular** (400) : Texte corps, descriptions
- **Satoshi Light** (300) : Textes secondaires, légendes, métadonnées

---

## PART 2 : ARCHITECTURE GLOBALE DU SITE

### Structure des Pages

```
axysaudit.com/
├── Accueil (/)
├── À propos (/a-propos)
├── Nos services (/services)
│   ├── Audit & Contrôle (/services/audit)
│   ├── Conseil & Optimisation (/services/conseil)
│   ├── Expertise Comptable (/services/expertise-comptable)
│   ├── Externalisation RH (/services/externalisation-rh)
│   └── Fiscalité & Advisory (/services/fiscalite)
├── Secteurs d'activité (/secteurs)
│   ├── PME & ETI (/secteurs/pme-eti)
│   ├── Startups & Croissance (/secteurs/startups)
│   ├── Grandes Entreprises (/secteurs/grandes-entreprises)
│   └── Associations & Organisations (/secteurs/organisations)
├── Ressources (/ressources)
│   ├── Blog (/ressources/blog)
│   ├── Livres Blancs (/ressources/livres-blancs)
│   ├── Actualités (/ressources/actualites)
│   └── Téléchargements (/ressources/telecharges)
├── Carrières (/carrieres)
├── Contact (/contact)
├── Espace Client Sécurisé (/espace-client)
└── Mentions légales & Politique (/legal)
```

---

## PART 3 : NAVIGATION \& BARRE DE NAVIGATION (NAVBAR)

### Desktop (1024px+)

**Structure :**

- Logo Axys (version large) | Menu horizontal | Espace Client + Contact CTA

**Éléments de Menu (Fixed Top, Z-index 1000):**

```
LOGO [Axys Audit]  |  Accueil  |  À propos  |  Services ▼  |  Secteurs ▼  |  Ressources ▼  |  Carrières  |  [ Contact ]
```

**Spécifications :**

- Hauteur : 80px
- Fond : \#FFFFFF avec ombre légère (0 2px 8px rgba(0,0,0,0.08))
- Logo : 40px hauteur, clickable vers /
- Font menu : Satoshi SemiBold 14px, \#0F1419
- Hover sur items menu : \#288CE2, transition 0.3s ease
- Bouton CTA "Contact" : \#288CE2 fond, \#FFFFFF texte, border-radius 8px, padding 12px 24px
- Sous-menus (Services, Secteurs, Ressources) : dropdown avec animation slide-down 0.2s

**Sous-menu Services :**

```
┌─────────────────────────┐
│ Audit & Contrôle        │  → /services/audit
│ Conseil & Optimisation  │  → /services/conseil
│ Expertise Comptable     │  → /services/expertise-comptable
│ Externalisation RH      │  → /services/externalisation-rh
│ Fiscalité & Advisory    │  → /services/fiscalite
└─────────────────────────┘
```

- Fond dropdown : \#F5F7FA
- Border-top : 3px solid \#288CE2
- Chaque item : 16px Satoshi Regular, padding 14px 20px
- Hover state : fond \#E8F2FB

---

### Tablet (768px - 1023px)

- Logo réduit (version minifiée + texte)
- Menu compressé : 3 premiers items visibles + "Plus ▼"
- Bouton hamburger (☰) remplace menu complet
- Espace Client : Icône utilisateur clickable

---

### Mobile (< 768px)

**Menu Burger Hamburger :**

- Position : Top-left coin, icône ☰ (\#0F1419)
- Animation : Icône devient X lors de l'expansion
- Menu expandable : overlay full-screen \#FFFFFF
- Z-index : 999

**Menu Mobile Développé :**

```
✕ [Fermer]

Accueil                     →
À propos                    →
Services                    ⋯
  ├─ Audit & Contrôle       →
  ├─ Conseil & Optimisation →
  ├─ Expertise Comptable    →
  ├─ Externalisation RH     →
  └─ Fiscalité & Advisory   →
Secteurs                    ⋯
  ├─ PME & ETI              →
  ├─ Startups & Croissance  →
  ├─ Grandes Entreprises    →
  └─ Associations           →
Ressources                  ⋯
  ├─ Blog                   →
  ├─ Livres Blancs          →
  ├─ Actualités             →
  └─ Téléchargements        →
Carrières                   →
─────────────────────────────
[Espace Client]             (bleu)
[Contact]                   (bleu)
```

- Font : Satoshi Regular 16px
- Padding : 20px
- Separator : 1px solid \#E1E8ED
- CTA buttons : full-width à la fin

---

## PART 4 : PAGE D'ACCUEIL (HOME)

### Section 1 : Hero Principal (100vh - 500px min)

**Disposition :**

```
[Fond dégradé: gradient subtle #FFFFFF → #F5F7FA]

┌────────────────────────────────────────────────────────┐
│                                                        │
│    Titre Principal (H1)                    [Image]     │
│    "Transformez vos défis en opportunités"            │
│                                                        │
│    Sous-titre (18px Satoshi Regular #6E7E91)          │
│    "Cabinet de conseil, audit et expertise comptable  │
│    pour accompagner la croissance de votre entreprise"│
│                                                        │
│    [CTA Primaire]  [En savoir plus]                   │
│                                                        │
│    Animation: Image slide-in-right (1000ms)          │
│    Titre: fade-in + slide-down (800ms)               │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Contenu Exact :**

**H1 (Satoshi Bold 52px \#0F1419):**

```
Transformez vos défis
en opportunités
```

**Sous-titre (18px Satoshi Regular \#6E7E91):**

```
Cabinet de conseil, audit et expertise comptable pour
accompagner la croissance de votre entreprise. Nos experts
vous guident à chaque étape de votre développement.
```

**CTA Principal (Bouton 1):**

- Texte : "Demander un devis"
- Couleur : \#288CE2 fond, \#FFFFFF texte
- Padding : 16px 40px
- Border-radius : 8px
- Font : Satoshi SemiBold 16px
- Hover : Fond \#1D6DB8, box-shadow 0 4px 16px rgba(40,140,226,0.3)
- Action : Smooth scroll vers section Contact (/contact)

**CTA Secondaire (Bouton 2):**

- Texte : "Découvrir nos services"
- Couleur : Border \#288CE2 2px, texte \#288CE2, fond transparent
- Padding : 16px 40px
- Hover : Fond \#F0F7FF, transition 0.3s
- Action : Scroll vers section "Nos services"

**Image Hero (Côté droit desktop, avant titre mobile):**

- Contexte : Équipe de professionnels en réunion, ambiance confiance \& expertise
- Dimensions : 50% largeur desktop, full-width mobile (responsive)
- Border-radius : 12px
- Box-shadow : 0 8px 32px rgba(0,0,0,0.12)
- Animation : fade-in-right 1000ms ease-out
- Alt text : "Équipe d'experts Axys en session de consultation stratégique"

---

### Section 2 : Chiffres Clés (Stats Section)

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 80px 40px                                │
│                                                     │
│  [Icône]  [Icône]  [Icône]  [Icône]               │
│   15+      500+     4      50+                     │
│   Années   Clients Secteurs Experts                │
│   d'expérience d'accompagnement d'activité d'équipe │
│                                                     │
│  Animation: Compteurs roll-up (count-up) au scroll │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Contenu Exact :**

| Icône                | Chiffre | Libellé                         |
| :------------------- | :------ | :------------------------------ |
| 📊 (Vector \#288CE2) | 15+     | Années d'expérience accumulée   |
| 👥 (Vector \#288CE2) | 500+    | Clients accompagnés avec succès |
| 🏢 (Vector \#288CE2) | 4       | Secteurs d'activité couverts    |
| 👨‍💼 (Vector \#288CE2) | 50+     | Experts pluridisciplinaires     |

- Chiffres : Satoshi Bold 48px \#288CE2
- Libellés : Satoshi Regular 14px \#6E7E91
- Icônes : 48x48px, couleur \#288CE2, SVG
- Espacement : Grid 4 colonnes, gap 60px
- Responsive : 2 colonnes tablet, 1 colonne mobile
- Animation : Parallax subtil au scroll

---

### Section 3 : Services Principal (4 Services en Highlight)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Titre H2 : "Nos Domaines d'Expertise"                │
│                                                         │
│  Sous-titre: "Une approche pluridisciplinaire adapté │
│  à votre entreprise et ses enjeux spécifiques"       │
│                                                         │
│  [Service Card 1] [Service Card 2]                     │
│  [Service Card 3] [Service Card 4]                     │
│                                                         │
│  [CTA Voir tous les services →]                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Nos Domaines d'Expertise
```

**Sous-titre (18px Satoshi Regular \#6E7E91):**

```
Une approche pluridisciplinaire adaptée à votre entreprise
et ses enjeux spécifiques. Nous accompagnons la transformation
de vos défis en opportunités de croissance.
```

**Service Card Structure (2x2 grid):**

```
┌────────────────────────────────┐
│ [Icône Service]                │
│                                │
│ Titre Service                  │
│ "Audit & Contrôle"             │
│                                │
│ Description (3 lignes max):    │
│ "Diagnostiquer les             │
│ dysfonctionnements dans vos    │
│ procédures et contrôler la     │
│ fiabilité de votre information │
│ financière"                    │
│                                │
│ [Lien] En savoir plus →        │
│                                │
│ Animation: hover lift-up       │
│ Box-shadow increase            │
│ Color underline: #288CE2       │
│                                │
└────────────────────────────────┘
```

**Card Spécifications :**

- Fond : \#FFFFFF
- Border : 1px solid \#E1E8ED
- Padding : 40px 32px
- Border-radius : 12px
- Box-shadow : 0 2px 8px rgba(0,0,0,0.08)
- Hover shadow : 0 12px 32px rgba(0,0,0,0.12)
- Transition : 0.3s ease

**Services Affichés :**

1. **Audit \& Contrôle**
   - Icône : Loupe/Checkmark (\#288CE2)
   - Description : "Diagnostiquer les dysfonctionnements dans vos procédures, contrôler la fiabilité de votre information financière et mesurer vos risques légaux et réglementaires."
   - Lien : /services/audit
2. **Conseil \& Optimisation**
   - Icône : Ampoule/Graphique (\#1BA89A)
   - Description : "Recommandations d'amélioration et de réajustements au regard des dispositions réglementaires et des impératifs de performance opérationnelle."
   - Lien : /services/conseil
3. **Expertise Comptable**
   - Icône : Feuille/Calcul (\#288CE2)
   - Description : "Assistance comptable complète et gestion de toutes vos obligations comptables, fiscales et réglementaires."
   - Lien : /services/expertise-comptable
4. **Externalisation RH \& Fiscalité**
   - Icône : Personnes/Équipe (\#1BA89A)
   - Description : "Optimisation complète de votre gestion RH et fiscale avec une approche intégrée associant expertise humaine et conformité."
   - Lien : /services/externalisation-rh

**Lien "En savoir plus":**

- Font : Satoshi SemiBold 14px
- Couleur : \#288CE2
- Hover : \#1BA89A, underline apparaît
- Arrow icon : → (animé vers droite)

**CTA Section :**

- Texte : "Voir tous nos services"
- Lien : /services
- Font : Satoshi SemiBold 16px
- Couleur : \#288CE2
- Alignment : Centré, margin-top 50px
- Hover : Couleur \#1BA89A

---

### Section 4 : Pourquoi Choisir Axys (Value Proposition)

```
┌─────────────────────────────────────────────────────┐
│ Fond : Gradient #288CE2 (10% opacity) → #FFFFFF    │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Pourquoi Choisir Axys"                       │
│                                                     │
│  Texte accroche:                                    │
│  "Professionnels de l'audit et du conseil à votre  │
│  écoute, prêts à s'investir pour le développement │
│  de vos activités."                                │
│                                                     │
│  [Feature 1]  [Feature 2]                          │
│  [Feature 3]  [Feature 4]                          │
│                                                     │
│  [Feature 5]  [Feature 6]                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Pourquoi Choisir Axys
```

**Features (6 items, 3 colonnes responsive):**

| Icône         | Titre                            | Description                                                                 |
| :------------ | :------------------------------- | :-------------------------------------------------------------------------- |
| ✓ (\#288CE2)  | **Expertise Pluridisciplinaire** | Équipe de spécialistes en audit, conseil, comptabilité et fiscalité         |
| 🎯 (\#1BA89A) | **Approche Personnalisée**       | Solutions adaptées à votre secteur, taille et enjeux spécifiques            |
| 📈 (\#288CE2) | **Partenaire de Croissance**     | Nous vous accompagnons à tous les stades de développement de votre activité |
| 🔒 (\#1BA89A) | **Conformité Garantie**          | Respect stricte des normes réglementaires et législatives applicables       |
| 💡 (\#288CE2) | **Innovation Méthodologique**    | Approches modernes et outils technologiques avancés                         |
| 🤝 (\#1BA89A) | **Disponibilité \& Écoute**      | Interlocuteurs dédiés, réactifs et mobilisés                                |

- Layout : 3 colonnes desktop, 2 colonnes tablet, 1 colonne mobile
- Chaque feature : Icône 32x32px + Titre H4 + Description 2 lignes
- Espacement : gap 40px
- Feature cards : pas de border, simple spacing

---

### Section 5 : Témoignages Clients (Slider)

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Nos Clients Nous Font Confiance"            │
│                                                     │
│  [← Slider Témoignage →]                           │
│                                                     │
│  "Citation du client..."                           │
│  – Nom, Fonction, Entreprise                       │
│  ★★★★★ (5 stars)                                  │
│                                                     │
│  [Dot navigation] ● ◯ ◯                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Nos Clients Nous Font Confiance
```

**Slider Testimonials :**

- 3 témoignages minimum
- Chaque slide : citation + auteur + stars
- Auto-play : 5 secondes, avec pause au hover
- Navigation : Points cliquables (dots) + flèches prev/next
- Transition : Fade 0.5s ease

**Exemple Testimonial 1 :**

Quote (Satoshi Regular 18px \#0F1419):

```
"Axys a transformé notre processus comptable.
L'expertise de son équipe et sa disponibilité
ont permis d'optimiser notre gestion administrative
et libérer des ressources critiques pour notre développement."
```

Author (Satoshi SemiBold 16px \#0F1419): Sarah Dupont
Title (Satoshi Regular 14px \#6E7E91): Directrice Générale, Tech Innovations France
Rating: ★★★★★ (couleur \#288CE2)

---

### Section 6 : Appel à l'Action (CTA Section Finale)

```
┌─────────────────────────────────────────────────────┐
│ Fond : #288CE2                                      │
│ Padding : 80px 40px                                │
│ Texte: #FFFFFF                                     │
│                                                     │
│  H2: "Prêt à Transformer Vos Défis?"              │
│                                                     │
│  Sous-titre:                                        │
│  "Nos experts sont à votre écoute pour comprendre │
│  vos enjeux et définir la meilleure stratégie."   │
│                                                     │
│  [CTA Primaire] [CTA Secondaire]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#FFFFFF):**

```
Prêt à Transformer Vos Défis ?
```

**Sous-titre (18px Satoshi Regular \#E8F2FB):**

```
Nos experts sont à votre écoute pour comprendre vos enjeux
et définir la meilleure stratégie d'accompagnement.
```

**CTA 1 : "Demander un devis"**

- Fond : \#FFFFFF
- Texte : \#288CE2
- Padding : 16px 40px
- Hover : Fond \#E8F2FB
- Action : /contact

**CTA 2 : "Nous contacter"**

- Fond : transparent
- Border : 2px solid \#FFFFFF
- Texte : \#FFFFFF
- Hover : Fond rgba(255,255,255,0.1)
- Action : /contact

---

### Section 7 : Footer

```
┌─────────────────────────────────────────────────────┐
│ Fond : #0F1419                                      │
│ Texte : #FFFFFF                                    │
│ Padding : 80px 40px                               │
│                                                     │
│ [Col 1]          [Col 2]          [Col 3]         │
│ À Propos         Nos Services     Ressources       │
│ Logo + Tagline   - Audit          - Blog           │
│ Description      - Conseil        - Livres Blancs  │
│ Valeurs          - Expertise      - Actualités    │
│                  - RH & Fiscal    - Téléchargements│
│                  - Secteurs                        │
│                                                     │
│ [Col 4]          [Col 5]                          │
│ Entreprise       Contact & Légal                   │
│ - Carrières      - Contact Direct                  │
│ - Mentions       - Mentions légales               │
│ - Politique      - Politique confidentialité      │
│                  - CGU                            │
│                                                     │
│  Réseaux Sociaux : [LinkedIn] [Twitter] [Facebook]│
│                                                     │
│  Copyright © 2025 Axys. Tous droits réservés.    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Footer Content:**

**Colonne 1 - À Propos (25%)**

- Logo Axys (version blanche) 40px
- Tagline (Satoshi Regular 14px \#A8B5C3): "Professionnels de l'audit et du conseil à votre écoute"
- Description courte (2 lignes) (Satoshi Regular 13px \#8A92A3)
- Valeurs : Expertise - Confiance - Innovation

**Colonne 2 - Services (20%)**

- Titre : "Nos Services" (Satoshi SemiBold 16px \#FFFFFF)
- Links (Satoshi Regular 14px \#A8B5C3, hover \#288CE2):
  - Audit \& Contrôle
  - Conseil \& Optimisation
  - Expertise Comptable
  - Externalisation RH
  - Fiscalité \& Advisory

**Colonne 3 - Ressources (20%)**

- Titre : "Ressources" (Satoshi SemiBold 16px \#FFFFFF)
- Links (Satoshi Regular 14px \#A8B5C3, hover \#288CE2):
  - Blog \& Actualités
  - Livres Blancs
  - Téléchargements
  - Secteurs d'Activité

**Colonne 4 - Entreprise (15%)**

- Titre : "Entreprise" (Satoshi SemiBold 16px \#FFFFFF)
- Links (Satoshi Regular 14px \#A8B5C3, hover \#288CE2):
  - Qui sommes-nous
  - Carrières
  - Nos Experts

**Colonne 5 - Contact (20%)**

- Titre : "Contact \& Légal" (Satoshi SemiBold 16px \#FFFFFF)
- Links (Satoshi Regular 14px \#A8B5C3, hover \#288CE2):
  - Nous Contacter
  - Mentions Légales
  - Politique de Confidentialité
  - Conditions d'Utilisation

**Réseaux Sociaux :**

- Icônes 24x24px : LinkedIn | Twitter | Facebook
- Couleur : \#288CE2
- Hover : \#1BA89A
- Links vers profils sociaux

**Bottom Bar :**

- Text (Satoshi Regular 12px \#8A92A3): "© 2025 Axys - Tous droits réservés. | Politique de confidentialité | CGU"
- Réactif : Stack verticalement sur mobile

---

## PART 5 : PAGE "À PROPOS / LE CABINET"

### Section 1 : Hero avec Image

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Hauteur : 400px                                     │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "À Propos d'Axys"                            │
│  Sous-titre: "Votre partenaire de confiance       │
│  depuis plus de 15 ans"                           │
│                                                     │
│  [Image d'équipe - parallax effect]               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H1 (Satoshi Bold 52px \#0F1419):**

```
À Propos d'Axys
```

**Sous-titre (20px Satoshi Regular \#6E7E91):**

```
Votre partenaire de confiance depuis plus de 15 ans
dans l'accompagnement stratégique et opérationnel
de votre entreprise
```

**Image :**

- Contexte : Équipe Axys en environnement moderne et professionnel
- Dimensions : 100% largeur, max 800px, border-radius 12px
- Shadow : 0 12px 32px rgba(0,0,0,0.15)
- Animation : Parallax subtil au scroll

---

### Section 2 : Notre Histoire

```
┌─────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                │
│ Fond : #FFFFFF                                     │
│                                                     │
│  H2: "Notre Histoire"                             │
│                                                     │
│  [Timeline Visuelle]                              │
│                                                     │
│  2010: Création d'Axys                            │
│  2015: Expansion géographique                     │
│  2020: Diversification services                   │
│  2025: Leader régional reconnu                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Notre Histoire
```

**Contenu (Satoshi Regular 16px \#0F1419):**

```
Fondée en 2010, Axys est née d'une conviction :
les entreprises ont besoin de partenaires réels,
non d'exécutants administratifs.

Avec une équipe de plus de 50 experts en audit, conseil,
comptabilité et fiscalité, nous avons accompagné plus de 500
entreprises dans leur transformation et leur croissance.

Notre approche pluridisciplinaire et notre engagement envers
l'excellence nous permettent de transformer les défis
opérationnels en opportunités stratégiques.

Aujourd'hui, Axys est reconnue comme un leader régional,
mais nous conservons les valeurs de proximité et d'écoute
qui nous définissent.
```

**Timeline Interactive :**

- Design : Ligne verticale centrale avec milestones alternées
- Chaque jalon : Année | Événement | Icône (\#288CE2)
- Hover : Fond milestone light (\#E8F2FB), popup détail
- Animation : Fade-in au scroll

---

### Section 3 : Nos Valeurs

```
┌─────────────────────────────────────────────────────┐
│ Fond : Gradient subtil #F5F7FA → #FFFFFF          │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Nos Valeurs Fondamentales"                  │
│                                                     │
│  [Value Card 1] [Value Card 2] [Value Card 3]     │
│  [Value Card 4]                                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Nos Valeurs Fondamentales
```

**Value Cards (4 items, 2x2 grid):**

| Icône         | Titre                          | Description                                                                                       |
| :------------ | :----------------------------- | :------------------------------------------------------------------------------------------------ |
| 🎯 (\#288CE2) | **Excellence Professionnelle** | Qualité irréprochable dans chaque mission, respect des normes et bonnes pratiques internationales |
| 🤝 (\#1BA89A) | **Confiance \& Transparence**  | Relation honnête et transparente avec nos clients, confidentialité garantie                       |
| 💡 (\#288CE2) | **Innovation Continue**        | Investissement permanent en formation et technologie pour servir mieux                            |
| 🌱 (\#1BA89A) | **Croissance Partagée**        | Succès de nos clients = notre succès, partenariat durable                                         |

---

### Section 4 : Méthodologie

```
┌─────────────────────────────────────────────────────┐
│ Fond : #0F1419 (texte blanc)                       │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Notre Méthodologie"                         │
│  Sous-titre: "Processus structuré et éprouvé"    │
│                                                     │
│  [Étape 1] → [Étape 2] → [Étape 3] → [Étape 4]  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#FFFFFF):**

```
Notre Méthodologie
```

**Sous-titre (18px Satoshi Regular \#A8B5C3):**

```
Processus structuré et éprouvé pour garantir l'efficacité
et la pertinence de nos accompagnements.
```

**4 Étapes de Méthodologie (Horizontal Flow):**

```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ Étape 1      │      │ Étape 2      │      │ Étape 3      │      │ Étape 4      │
│ Diagnostic   │  →   │ Analyse      │  →   │ Recommanda.  │  →   │ Accomp.      │
│              │      │              │      │              │      │              │
│ • Écoute     │      │ • Étude      │      │ • Proposit.  │      │ • Mise en    │
│ • Compréhens.│      │ • Évaluation │      │ • Optimisat. │      │   place      │
│ • Enjeux     │      │ • Benchmarking│     │ • Planning   │      │ • Suivi      │
│              │      │              │      │              │      │              │
└──────────────┘      └──────────────┘      └──────────────┘      └──────────────┘
```

- Chaque étape : Icône 48x48px (\#288CE2) + Titre + 3 bullet points
- Flèches : \#288CE2 color, animated stroke
- Animation : Révélation progressive au scroll
- Mobile : Stack verticale avec flèches verticales

---

### Section 5 : Équipe Dirigeante

```
┌─────────────────────────────────────────────────────┐
│ Fond : #FFFFFF                                      │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Notre Équipe Dirigeante"                    │
│                                                     │
│  Sous-titre: "Des experts passionnés et engagés"  │
│                                                     │
│  [Team Member 1] [Team Member 2]                   │
│  [Team Member 3] [Team Member 4]                   │
│                                                     │
│  [Team Member 5] [Team Member 6]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Notre Équipe Dirigeante
```

**Sous-titre (18px Satoshi Regular \#6E7E91):**

```
Des experts passionnés et engagés dans le succès
de nos clients et de nos collaborateurs.
```

**Team Member Card Template:**

```
┌────────────────────────────┐
│                            │
│     [Photo 200x200px]      │
│                            │
│  Nom Prénom                │
│  (Satoshi SemiBold 18px)   │
│                            │
│  Titre Professionnel       │
│  (Satoshi Regular 14px)    │
│                            │
│  Courte Bio (2-3 lignes)  │
│  (Satoshi Regular 13px)    │
│                            │
│  [LinkedIn Icon]           │
│                            │
│  Hover: Overlay semi-opaque│
│  avec icônes réseaux       │
│                            │
└────────────────────────────┘
```

**Exemple - Team Member:**

**Titre :** Directeur Général
**Nom :** Marc Lepont
**Photo :** Portrait professionnel, headshot qualité, fond neutre
**Bio :** "Marc a fondé Axys en 2010 avec la vision de créer un cabinet d'audit vraiment différent. Comptable expertise-comptable, il apporte 25 ans d'expérience dans le secteur."

**Team Layout :**

- 3 colonnes desktop, 2 colonnes tablet, 1 colonne mobile
- Espacement : 40px gaps
- Max 6 membres affichés (scrollable ou load-more)

---

## PART 6 : PAGE SERVICES (VUE GLOBALE)

### Section 1 : Hero Services

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "Nos Services"                               │
│  Sous-titre: "Solutions adaptées à tous les stades│
│  de développement de votre entreprise"             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Section 2 : Services Grid (5 Services Détaillés)

```
┌──────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                 │
│                                                      │
│  [Service Card 1] [Service Card 2] [Service Card 3] │
│  [Service Card 4] [Service Card 5]                  │
│                                                      │
│  Grid: 3 colonnes desktop, responsive              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Service Card Complète :**

```
┌──────────────────────────────────┐
│ [Icône Service 64x64px]          │
│                                  │
│ Titre Service                    │
│ "Audit & Contrôle"               │
│                                  │
│ Description (4-5 lignes)        │
│ "Diagnostiquer les               │
│ dysfonctionnements dans les       │
│ procédures de gestion,           │
│ d'organisation ou dans les       │
│ méthodes de travail..."          │
│                                  │
│ Sous-éléments:                  │
│ • Élément 1                      │
│ • Élément 2                      │
│ • Élément 3                      │
│                                  │
│ [En savoir plus →]               │
│                                  │
│ Hover: Lift + shadow augmente   │
│                                  │
└──────────────────────────────────┘
```

---

### 5 Services Détaillés

#### 1. AUDIT \& CONTRÔLE

**Lien :** /services/audit
**Icône :** Loupe/Checkmark (\#288CE2)

**Contenu Court :**

```
Audit et Contrôle

Diagnostiquer les dysfonctionnements dans les procédures
de gestion, d'organisation ou dans les méthodes de travail.
Nos missions couvrent le contrôle de la fiabilité de
l'information financière, la qualité des processus, et
la mesure des risques légaux et réglementaires.

• Audit financier et contrôle interne
• Audit opérationnel et processus
• Conformité légale et réglementaire
```

---

#### 2. CONSEIL \& OPTIMISATION

**Lien :** /services/conseil
**Icône :** Ampoule/Graphique (\#1BA89A)

**Contenu Court :**

```
Conseil & Optimisation

Faire des recommandations en matière d'amélioration ou de
réajustements au regard des dispositions réglementaires
ou des impératifs de performances. Nous transformons
vos défis en opportunités d'amélioration continue.

• Stratégie opérationnelle
• Optimisation des processus
• Accompagnement transformation digitale
```

---

#### 3. EXPERTISE COMPTABLE

**Lien :** /services/expertise-comptable
**Icône :** Feuille/Calcul (\#288CE2)

**Contenu Court :**

```
Expertise Comptable

Au-delà de la mission principale d'assistance comptable,
accompagner les entreprises à tous les stades de leur
existence et dans de multiples domaines : création
d'entreprise, reprise d'entreprise ou développement
de l'activité.

• Tenue comptable complète
• Élaboration bilans et états financiers
• Accompagnement création/reprise
```

---

#### 4. EXTERNALISATION RH \& SOCIAL

**Lien :** /services/externalisation-rh
**Icône :** Personnes/Équipe (\#1BA89A)

**Contenu Court :**

```
Externalisation RH & Social

L'externalisation totale ou partielle des problématiques
sociales ou RH permet d'en faciliter la gestion. Notre
expertise vous permet d'optimiser votre gestion des
ressources humaines. Audit social de votre structure.

• Gestion administrative RH
• Paie et conformité sociale
• Audit social et reporting
```

---

#### 5. FISCALITÉ \& ADVISORY

**Lien :** /services/fiscalite
**Icône :** Document/Briefcase (\#288CE2)

**Contenu Court :**

```
Fiscalité & Advisory

Gestion efficace de l'entreprise implique d'intégrer la
dimension fiscale dans tout processus de décision. Approche
pluridisciplinaire combinant fiscalité des entreprises et
fiscalité des personnes.

• Optimisation fiscale
• Planification fiscale
• Conseil fiscal stratégique
```

---

## PART 7 : PAGE SERVICE DÉTAILLÉE (Exemple: Audit \& Contrôle)

### Section 1 : Hero Service

```
┌─────────────────────────────────────────────────────┐
│ Fond : Gradient #288CE2 (20%) → #FFFFFF            │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "Audit & Contrôle"                           │
│  Sous-titre: "Diagnostiquer, maîtriser, optimiser"│
│                                                     │
│  Breadcrumb: Home / Services / Audit & Contrôle  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Section 2 : Présentation Détaillée du Service

```
┌─────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                │
│ 2 colonnes: Texte (60%) | Image (40%)             │
│                                                     │
│  H2: "Qu'est-ce que l'Audit & Contrôle ?"        │
│                                                     │
│  Paragraphe 1: Définition générale               │
│  Paragraphe 2: Bénéfices directs                 │
│  Paragraphe 3: Approche Axys                     │
│                                                     │
│  [Image contexte audit]                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Contenu Texte :**

**H2 (Satoshi Bold 42px \#0F1419):**

```
Qu'est-ce que l'Audit & Contrôle ?
```

**Paragraphe 1 (Satoshi Regular 16px \#0F1419):**

```
L'audit & contrôle est un processus complet et structuré
de diagnostic des dysfonctionnements au sein de vos
procédures, de votre organisation et vos méthodes de travail.
Cette mission critique vous permet d'identifier les risques
et d'assurer la fiabilité complète de votre information
financière.
```

**Paragraphe 2 (Satoshi Regular 16px \#0F1419):**

```
Nos missions d'audit couvrent trois axes majeurs:
```

- **Contrôle de la fiabilité financière** : Vérification complète des données comptables et états financiers
- **Qualité des processus opérationnels** : Audit des procédures internes et conformité des workflow
- **Mesure des risques légaux et réglementaires** : Évaluation complète de la conformité légale

**Paragraphe 3 (Satoshi Regular 16px \#0F1419):**

```
Chez Axys, nous appliquons une méthodologie rigoureuse et
modernes basée sur des normes internationales. Nos experts
utilisent des outils technologiques avancés pour une analyse
précise et un reporting transparent.
```

**Image :** Photo équipe en audit/réunion, professional, format portrait 40%

---

### Section 3 : Nos Interventions en Audit

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 80px 40px                                │
│                                                     │
│  H3: "Nos Domaines d'Intervention"               │
│                                                     │
│  [Intervention Tab 1] [Intervention Tab 2] ...    │
│                                                     │
│  Contenu dynamique par tab                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Tabs :**

1. **Audit Financier**
   - Audit des comptes annuels
   - Vérification états financiers consolidés
   - Contrôle interne comptable
   - Audit spécifique par secteur
2. **Audit Opérationnel**
   - Diagnostic processus métier
   - Analyse efficacité opérationnelle
   - Optimisation procédures
   - Gouvernance et organisation
3. **Conformité \& Risques**
   - Audit de conformité légale/réglementaire
   - Évaluation risques juridiques
   - Conformité normes sectorielles
   - Reporting réglementaire

---

### Section 4 : Cas d'Usage / Études de Cas

```
┌─────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                │
│                                                     │
│  H3: "Nos Succès"                                 │
│                                                     │
│  [Case Study Card 1] [Case Study Card 2]          │
│  [Case Study Card 3]                              │
│                                                     │
│  3 colonnes desktop, responsive                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Case Study Card Template :**

```
┌─────────────────────────────────────┐
│ [Petit logo/icône client]           │
│ Entreprise: "TechCorp France"       │
│ Secteur: "Technologie SaaS"         │
│ Taille: "50-100 collaborateurs"     │
│                                     │
│ Challenge:                          │
│ "Audit complet avant levée de       │
│  fonds, conformité fiabilité        │
│  données financières"               │
│                                     │
│ Solution:                           │
│ "Audit financier spécifique         │
│  PME tech + reporting investisseurs"│
│                                     │
│ Résultat:                           │
│ "Levée de fonds réussie +           │
│  Optimisation comptable + 30%"      │
│                                     │
│ [Lire le cas complet →]            │
│                                     │
└─────────────────────────────────────┘
```

---

### Section 5 : Processus \& Étapes

```
┌─────────────────────────────────────────────────────┐
│ Fond : #0F1419 (blanc texte)                       │
│ Padding : 80px 40px                                │
│                                                     │
│  H3: "Notre Processus d'Audit"                   │
│                                                     │
│  [Étape 1] → [Étape 2] → [Étape 3] → [Étape 4] │
│  → [Étape 5]                                       │
│                                                     │
│  Timeline verticale mobile                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**5 Étapes du Processus :**

1. **Phase 1 : Compréhension \& Planning**
   - Rencontre exploratoire avec stakeholders
   - Définition scope d'audit
   - Planification détaillée
2. **Phase 2 : Collecte d'Informations**
   - Audit sur site et documentaire
   - Interviews processus clés
   - Analyse données financières
3. **Phase 3 : Analyse \& Diagnostic**
   - Identification dysfonctionnements
   - Évaluation risques
   - Synthèse findings
4. **Phase 4 : Recommandations**
   - Rapport d'audit détaillé
   - Propositions d'amélioration
   - Plan action priorisé
5. **Phase 5 : Suivi \& Implémentation**
   - Accompagnement mise en place
   - Suivi des recommandations
   - Reporting de progression

---

### Section 6 : Tarification \& Devis

```
┌─────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                │
│                                                     │
│  H3: "Tarification Transparente"                  │
│                                                     │
│  Sous-titre: "Coûts adaptés à votre taille et    │
│  complexité"                                       │
│                                                     │
│  [Pricing Card Small] [Pricing Card Mid]          │
│  [Pricing Card Enterprise]                        │
│                                                     │
│  [CTA Demander Devis]                             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Pricing Card :**

```
┌────────────────────────────────┐
│ PME & Startups                 │
│ À partir de 5 000 €            │
│                                │
│ ✓ Audit financier 1-2j         │
│ ✓ Rapport détaillé             │
│ ✓ Recommandations              │
│ ✓ Suivi 3 mois                 │
│                                │
│ [Demander Devis]               │
│                                │
└────────────────────────────────┘
```

---

### Section 7 : CTA Finale

```
┌─────────────────────────────────────────────────────┐
│ Fond : #288CE2                                      │
│ Texte : #FFFFFF                                    │
│ Padding : 60px 40px                                │
│                                                     │
│  H2: "Prêt à Sécuriser votre Audit?"             │
│                                                     │
│  [CTA Primaire] [CTA Secondaire]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## PART 8 : PAGE SECTEURS D'ACTIVITÉ

### Section 1 : Hero Secteurs

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "Secteurs d'Activité"                        │
│  Sous-titre: "Expertise sectorialisée reconnue"  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Section 2 : Grille Secteurs

```
┌──────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                 │
│                                                      │
│  [Secteur Card 1] [Secteur Card 2] [Secteur Card 3] │
│  [Secteur Card 4]                                   │
│                                                      │
│  2 colonnes desktop, 1 mobile                       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Secteur Card Template :**

```
┌────────────────────────────────────┐
│ [Image secteur 100% cover]         │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ Nom Secteur                    │ │
│ │ "PME & ETI"                    │ │
│ │                                │ │
│ │ Description (2-3 lignes)       │ │
│ │ "Accompagnement global des PME │ │
│ │ et ETI en croissance..."       │ │
│ │                                │ │
│ │ [Expertise clés]               │ │
│ │ • Audit adapté PME             │ │
│ │ • Développement croissance     │ │
│ │ • Optimisation administrative │ │
│ │                                │ │
│ │ [En savoir plus →]             │ │
│ └────────────────────────────────┘ │
│                                    │
│ Hover: Overlay semi-dark avec      │
│ icons réseaux + CTA en évidence   │
│                                    │
└────────────────────────────────────┘
```

---

### 4 Secteurs Détaillés

#### 1. PME \& ETI

**Lien :** /secteurs/pme-eti
**Image :** Bureau moderne, équipe collaborative

**Description :**

```
PME & ETI

Accompagnement global des entreprises de taille moyenne
en croissance. Nous maîtrisons les spécificités des PME
et ETI et leurs enjeux d'accélération.

Expertises clés:
• Audit financier adapté taille PME
• Accompagnement levée de fonds
• Optimisation administrative & fiscale
• Gouvernance d'entreprise
```

---

#### 2. STARTUPS \& CROISSANCE

**Lien :** /secteurs/startups
**Image :** Équipe dynamique startup, innovation

**Description :**

```
Startups & Croissance

Spécialisation dans l'accompagnement des startups
en phase de démarrage et de croissance accélérée.

Expertises clés:
• Due diligence financière
• Gestion trésorerie startup
• Optimisation fiscale startup
• Reporting investisseurs/board
```

---

#### 3. GRANDES ENTREPRISES

**Lien :** /secteurs/grandes-entreprises
**Image :** Immeuble/siège corporate

**Description :**

```
Grandes Entreprises

Expertise complète des défis spécifiques aux
grands groupes et organisations complexes.

Expertises clés:
• Audit consolidé international
• Risk management & compliance
• Restructuration & transformation
• Reporting réglementaire avancé
```

---

#### 4. ASSOCIATIONS \& ORGANISATIONS

**Lien :** /secteurs/organisations
**Image :** Espace communautaire/collaboration

**Description :**

```
Associations & Organisations

Accompagnement spécialisé des associations,
fondations et organisations sans but lucratif.

Expertises clés:
• Gestion financière associative
• Audit légal & reporting
• Gouvernance associative
• Subventions & financements
```

---

## PART 9 : PAGE RESSOURCES / BLOG

### Section 1 : Hero Ressources

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "Ressources & Insights"                      │
│  Sous-titre: "Découvrez nos dernières analyses   │
│  et publications"                                  │
│                                                     │
│  [Barre de recherche]                             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Barre de Recherche :**

- Placeholder : "Rechercher articles, livres blancs..."
- Icône loupe : \#288CE2
- Border-bottom animation au focus : \#288CE2
- Submit comportement : filtre articles dynamique

---

### Section 2 : Filtres \& Catégories

```
┌─────────────────────────────────────────────────────┐
│ Padding : 40px                                      │
│                                                     │
│  [Tous] [Blog] [Livres Blancs] [Actualités]       │
│  [Vidéos] [Téléchargements]                        │
│                                                     │
│  Active: #288CE2, Inactive: #6E7E91               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Section 3 : Contenu Ressources (Masonry Layout)

```
┌───────────────────────────────────────────────────┐
│ Padding : 80px 40px                               │
│                                                   │
│  [Article Card] [Livre Blanc Card] [Article]     │
│  [Article Card] [Article Card] [Livre Blanc]     │
│  [Vidéo Card] [Article Card] [Article Card]      │
│                                                   │
│  Masonry grid, 3 colonnes desktop, responsive    │
│                                                   │
│  [Charger plus]                                  │
│                                                   │
└───────────────────────────────────────────────────┘
```

**Article Card :**

```
┌──────────────────────────────────────┐
│ [Miniature/Image Article]            │
│                                      │
│ Catégorie Tag: "Blog"                │
│ (Satoshi SemiBold 12px #288CE2)      │
│                                      │
│ Titre Article (Satoshi Bold 18px)   │
│ "Guide complet de l'audit financier" │
│                                      │
│ Auteur: "Par [Nom Expert]"          │
│ Date: "15 oct. 2025"                │
│ Temps lecture: "5 min lecture"       │
│                                      │
│ Description (2 lignes)               │
│ "Découvrez comment l'audit...     │
│ fonctionne et quand y recourir..."  │
│                                      │
│ [Lire l'article →]                  │
│ Hover: underline, color #1BA89A     │
│                                      │
└──────────────────────────────────────┘
```

**Livre Blanc Card :**

```
┌──────────────────────────────────────┐
│ [Couverture Livre Blanc avec icône]  │
│ 📄 (Document icon #288CE2)           │
│                                      │
│ Catégorie Tag: "Livre Blanc"         │
│                                      │
│ Titre (Satoshi Bold 18px)            │
│ "Optimisation fiscale pour PME"      │
│                                      │
│ Description (2 lignes)               │
│ "Stratégies fiscales optimales...  │
│  pour réduire votre charge..."     │
│                                      │
│ Pages: "24 pages"                    │
│ Format: "PDF"                        │
│                                      │
│ [Télécharger le livre blanc]        │
│ Bouton action: formulaire lead       │
│                                      │
└──────────────────────────────────────┘
```

**Bouton "Charger plus":**

- Text : "Charger plus d'articles"
- Hover : Animation pulse
- Action : Charge 6 articles supplémentaires

---

## PART 10 : PAGE CARRIÈRES

### Section 1 : Hero Carrières

```
┌─────────────────────────────────────────────────────┐
│ Fond : Gradient #288CE2 (30%) → #1BA89A           │
│ Padding : 80px 40px                                │
│ Texte : #FFFFFF                                    │
│                                                     │
│  H1: "Rejoignez l'Équipe Axys"                   │
│  Sous-titre: "Grandissez, Appartenez, Impactez"   │
│                                                     │
│  [Sous-images équipe] (5-6 photos carrées)        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H1 (Satoshi Bold 52px \#FFFFFF):**

```
Rejoignez l'Équipe Axys
```

**Tagline (Satoshi Regular 24px \#E8F2FB):**

```
Grandissez • Appartenez • Impactez
```

**Sous-titre (18px Satoshi Regular \#E8F2FB):**

```
Nous cherchons des talents passionnés pour rejoindre
une équipe dynamique et collaborative.
```

**Photo Collage:**

- 6 images carrées (200x200px) disposées en masonry
- Équipe en action, ambiance positive, diversité
- Hover effect: Scale 1.05, overlay avec texte

---

### Section 2 : Culture Entreprise

```
┌─────────────────────────────────────────────────────┐
│ Fond : #FFFFFF                                      │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Culture Axys"                               │
│                                                     │
│  [Value 1] [Value 2] [Value 3]                    │
│                                                     │
│  3 colonnes, large description                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**H2 (Satoshi Bold 42px \#0F1419):**

```
Qui Sommes-Nous en tant qu'Employeur ?
```

**3 Valeurs Culturelles :**

1. **Croissance Continue**
   - Icône : 📈 \#288CE2
   - Description : "Investissement dans la formation et le développement professionnel. Budget formation annuel par collaborateur."
2. **Collaboration \& Inclusion**
   - Icône : 🤝 \#1BA89A
   - Description : "Environnement inclusif où chaque voix compte. Équipes pluridisciplinaires et diversité valorisée."
3. **Impact Significatif**
   - Icône : 💡 \#288CE2
   - Description : "Travail qui compte. Nos solutions transforment vraiment les entreprises et leurs résultats."

---

### Section 3 : Offres d'Emploi

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Offres en Cours"                            │
│                                                     │
│  [Filtre par type]                                │
│  [Filtre par département]                         │
│                                                     │
│  [Job Card 1]                                     │
│  [Job Card 2]                                     │
│  [Job Card 3]                                     │
│                                                     │
│  [Candidature spontanée]                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Job Listing Card :**

```
┌──────────────────────────────────────┐
│ Titre Poste (Satoshi Bold 18px)      │
│ "Auditeur Senior - Contrats"         │
│                                      │
│ Métadonnées:                         │
│ 💼 Département: Audit                │
│ 📍 Localisation: Paris               │
│ 🕐 Type: CDI Full-time               │
│                                      │
│ Description courte (2-3 lignes)      │
│ "Nous recherchons un auditeur       │
│  expérimenté pour renforcer...     │
│  notre équipe..."                  │
│                                      │
│ Compétences clés:                    │
│ • Audit financier                    │
│ • Gestion équipe                     │
│ • Normes IFRS                        │
│                                      │
│ [Candidater →]                       │
│                                      │
└──────────────────────────────────────┘
```

**Candidature Spontanée Section :**

- Texte accroche : "Nous accueillons les candidatures spontanées de talents motivés"
- CTA : "Envoyer votre CV"
- Formulaire : Nom | Email | Poste ciblé | CV upload

---

### Section 4 : Témoignages Employés

```
┌─────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                │
│                                                     │
│  H2: "Ils Ont Rejoint Axys"                       │
│                                                     │
│  [Testimonial Slider]                             │
│  (3+ témoignages employés)                        │
│                                                     │
│  Auto-play, navigation dots                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Employee Testimonial :**

```
"Chez Axys, j'ai trouvé bien plus qu'un emploi.
L'environnement collaboratif et l'investissement
dans mon développement m'ont permis de progresser
rapidement et de contribuer à des projets vrais."

— Alice Marchand, Auditrice Senior
### Photo profil: 60x60px, border-radius 50%
```

---

## PART 11 : PAGE CONTACT \& DEVIS

### Section 1 : Hero Contact

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "Contactez-Nous"                             │
│  Sous-titre: "Nous répondons à toutes vos questions│
│  dans un délai de 24h"                            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Section 2 : Informations de Contact + Formulaire

```
┌──────────────────────────────────────────────────────┐
│ Padding : 80px 40px                                 │
│ 2 colonnes: Infos (30%) | Formulaire (70%)         │
│                                                      │
│ [Infos Contact]            [Formulaire Devis]       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Colonne 1 : Infos Contact**

```
Nos Coordonnées

📍 Adresse
123 Avenue des Champs-Élysées
75008 Paris, France

📞 Téléphone
+33 (0) 1 23 45 67 89

✉️ Email
contact@axysaudit.com

🕐 Heures d'ouverture
Lundi-Vendredi: 9h00-18h00
Samedi-Dimanche: Fermé

[Carte Google Maps intégrée]
```

**Colonne 2 : Formulaire Devis**

```
┌────────────────────────────────────────┐
│ Demander un Devis                      │
│                                        │
│ [Nom complet *]                       │
│ [Email *]                             │
│ [Téléphone]                           │
│ [Entreprise]                          │
│                                        │
│ [Service intéressé *]                 │
│ (Dropdown: Audit / Conseil / ...)    │
│                                        │
│ [Secteur d'activité]                  │
│ (Dropdown)                            │
│                                        │
│ [Nombre collaborateurs]               │
│ (Dropdown)                            │
│                                        │
│ [Message]                             │
│ (Textarea 4 lignes)                   │
│ "Décrivez votre besoin..."           │
│                                        │
│ [J'accepte la politique de ...]      │
│                                        │
│ [Envoyer la demande]                  │
│ Couleur : #288CE2, hover #1D6DB8     │
│                                        │
│ Message envoi:                         │
│ "Merci! Nous reviendrons vous         │
│  contacter sous 24h."                 │
│                                        │
└────────────────────────────────────────┘
```

**Spécifications Formulaire:**

- Font : Satoshi Regular 14px
- Padding champs : 12px 16px
- Border : 1px solid \#E1E8ED
- Border-radius : 6px
- Focus : Border \#288CE2, box-shadow 0 0 0 3px rgba(40,140,226,0.1)
- Placeholder color : \#A8B5C3
- Labels : Satoshi SemiBold 14px \#0F1419

---

## PART 12 : ESPACE CLIENT SÉCURISÉ

### Section 1 : Page d'Accès

```
┌─────────────────────────────────────────────────────┐
│ Fond : #F5F7FA                                      │
│ Padding : 60px 40px                                │
│                                                     │
│  H1: "Espace Client Sécurisé"                     │
│  Sous-titre: "Accédez à vos documents et rapports"│
│                                                     │
│  [Authentification]                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Section 2 : Formulaire Authentification

```
┌────────────────────────────────────────┐
│ Connexion                              │
│                                        │
│ [Email/Identifiant]                   │
│ [Mot de passe]                        │
│                                        │
│ [☐ Se souvenir de moi]                │
│                                        │
│ [Se connecter]                        │
│                                        │
│ [Mot de passe oublié?]                │
│ [Créer un compte]                     │
│                                        │
└────────────────────────────────────────┘
```

---

### Section 3 : Dashboard Client (Après connexion)

```
┌──────────────────────────────────────────────────────┐
│ Sidebar Nav                    Main Dashboard        │
│                                                      │
│ [Accueil]                      ┌──────────────────┐ │
│ [Mes Documents]                │ Bienvenue        │ │
│ [Mes Rapports]                 │ [Nom Client]     │ │
│ [Mes Dossiers]                 │                  │ │
│ [Demandes Actives]             │ Derniers uploads │ │
│ [Paramètres]                   │ • Doc1           │ │
│ [Déconnexion]                  │ • Doc2           │ │
│                                │                  │ │
│                                │ Dossiers récents │ │
│                                │ [Dossier 2024]   │ │
│                                │ [Dossier 2025]   │ │
│                                │                  │ │
│                                └──────────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Features Espace Client:**

- Authentification sécurisée SSL
- Liste documents triables par date, type, statut
- Recherche documents full-text
- Notifications nouvelles uploads
- Téléchargements individuels ou zip
- Système de gestion de versions
- Formulaires de demande intégrés

---

## PART 13 : ANIMATIONS \& MICRO-INTERACTIONS

### Animations Globales

| Élément          | Animation                      | Durée         | Trigger        |
| :--------------- | :----------------------------- | :------------ | :------------- |
| CTA Buttons      | Hover: Scale 1.05 + Box-shadow | 0.3s ease     | Mouse over     |
| Links            | Underline color transition     | 0.2s ease     | Hover          |
| Cards            | Lift effect (translateY -4px)  | 0.3s ease     | Hover          |
| Scroll-triggered | Fade-in + Slide-up             | 0.6s ease-out | Scroll         |
| Images           | Parallax subtil                | N/A           | Scroll         |
| Counters         | Count-up animation             | 2s ease-out   | Scroll to view |
| Hamburger Menu   | Rotate 90° (X icon)            | 0.3s          | Click          |
| Dropdowns        | Slide-down + Fade              | 0.2s ease     | Hover          |

---

## PART 14 : SPÉCIFICATIONS RESPONSIVE

### Breakpoints

- **Desktop :** 1200px+
- **Tablet :** 768px - 1199px
- **Mobile :** < 768px

### Adaptations Clés

| Élément         | Desktop            | Tablet        | Mobile             |
| :-------------- | :----------------- | :------------ | :----------------- |
| Navbar          | Fixed, menu horiz. | Fixed, burger | Fixed, burger full |
| Hero H1         | 52px               | 42px          | 32px               |
| Section Padding | 80px 40px          | 60px 30px     | 40px 20px          |
| Grilles         | 3-4 colonnes       | 2 colonnes    | 1 colonne          |
| Images          | 50-60%             | 70%           | 100%               |
| Font Body       | 16px               | 15px          | 14px               |

---

## RÉSUMÉ FINAL DE LA PALETTE \& SPÉCIFICATIONS

### Couleurs Finales

| Élément      | Hex Code | Usage                            |
| :----------- | :------- | :------------------------------- |
| Primaire     | \#288CE2 | CTA, accents, hover states       |
| Secondaire   | \#1BA89A | Éléments décoratifs, alternative |
| Neutre Foncé | \#0F1419 | Titres, texte principal          |
| Neutre Clair | \#FFFFFF | Fonds, espacements               |
| Gris Support | \#6E7E91 | Textes secondaires               |
| Gris BG      | \#F5F7FA | Sections alternées               |

### Font Stack

**SATOSHI** (Global)

- Bold (700) : H1, H2, CTA
- SemiBold (600) : H3, Labels, Tags
- Regular (400) : Body text
- Light (300) : Métadonnées, captions

---

# FIN DU GUIDE COMPLET AXYS WEBSITE

Ce document offre une architecture complète, détaillée et prête à l'implémentation pour le nouveau site Axys. Chaque section précise le contenu exact, les couleurs, les animations, les dispositions et les comportements interactifs, inspirés des meilleures pratiques de Forvis Mazars.
