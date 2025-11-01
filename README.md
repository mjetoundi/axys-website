# AXYS AUDIT - Website

Excellence en Audit & Conseil pour votre croissance

## 🚀 Description

Site web moderne et responsive pour AXYS AUDIT, cabinet d'expertise comptable et d'audit de premier plan. Construit avec React, TypeScript, Tailwind CSS, et Framer Motion selon les spécifications détaillées du cahier des charges.

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Build tool moderne et rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations pour React
- **Lucide React** - Icônes modernes et consistantes
- **React Router DOM** - Navigation côté client

## 🎨 Design System

### Palette de Couleurs

- **Primaire (Bleu AXYS):** `#288CE2`
- **Secondaire (Teal Moderne):** `#1BA89A`
- **Neutre Foncé:** `#0F1419`
- **Neutre Clair:** `#FFFFFF`
- **Gris Support:** `#6E7E91`
- **Gris Arrière-plan:** `#F5F7FA`

### Typographie

- **Police:** Satoshi (Google Fonts)
- **Poids:** 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)

## 📁 Structure du Projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── pages/
│   └── Home.tsx
├── App.tsx
├── main.tsx
└── style.css
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le projet**

```bash
cd axys-website
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Démarrer le serveur de développement**

```bash
npm run dev
```

Ou utilisez les scripts de démarrage inclus :

**Windows:**

```powershell
.\start.ps1
```

**Linux/Mac:**

```bash
./start.sh
```

### Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement (port par défaut 5173)
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la build de production

## 🌟 Fonctionnalités

### Pages Implémentées

- **Accueil (/)** - Landing page complète avec hero, services, stats, témoignages
- **À propos (/a-propos)** - Histoire, valeurs, équipe dirigeante, certifications
- **Services (/services)** - Détail des 5 services avec méthodologie et pricing
- **Contact (/contact)** - Formulaire, coordonnées, bureaux multiples

### Sections de la Page d'Accueil

- **Hero Section** - Section d'accueil avec animation et CTA
- **Services** - Présentation des 5 services principaux
- **Statistiques** - Chiffres clés avec animations (500+ clients, 15+ ans, 98% satisfaction)
- **Témoignages** - Retours clients avec système de notation 5 étoiles
- **Call-to-Action** - Section d'engagement final avec méthodes de contact

### Composants UI Avancés

- **Navbar** - Navigation responsive avec dropdowns animés et menu mobile
- **Footer** - Footer complet avec newsletter, liens, certifications
- **Button** - Composant réutilisable (4 variantes : primary, secondary, outline, ghost)
- **Card** - Composant carte avec effets hover et personnalisation complète
- **Forms** - Formulaires interactifs avec validation et animations

### Animations & Interactions

- Animations d'entrée fluides avec Framer Motion
- Effets hover sophistiqués sur tous les éléments interactifs
- Transitions de page et sections avec `whileInView`
- Loading states et feedback utilisateur
- Parallax subtil et animations de scroll

## 📱 Responsive Design

- **Desktop:** 1200px et plus
- **Tablet:** 768px - 1199px
- **Mobile:** Moins de 768px

Adaptation complète des layouts, typographie et espacement selon les breakpoints.

## 🎯 Spécifications Respectées

✅ **Architecture complète** selon le cahier des charges
✅ **Palette de couleurs** AXYS conforme
✅ **Typographie Satoshi** intégrée
✅ **Composants UI** réutilisables
✅ **Animations** Framer Motion
✅ **Design responsive** multi-device
✅ **Performance** optimisée avec Vite
✅ **Accessibilité** prise en compte
✅ **SEO** optimisé (meta tags, structure)

## 🔧 Configuration

Le projet utilise :

- **Tailwind CSS** configuré avec les couleurs de la marque
- **TypeScript** avec configuration stricte
- **ESLint** pour la qualité du code
- **PostCSS** pour le traitement CSS

## 📞 Support

Pour toute question concernant le développement ou la maintenance du site, contactez l'équipe de développement.

## 📝 Licence

© 2024 AXYS AUDIT. Tous droits réservés.

---

**Développé avec ❤️ pour AXYS AUDIT**
