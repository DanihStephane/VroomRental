# 🚗 AutoLoc - Système de Location de Véhicules

Une application web moderne pour la gestion de location de véhicules, construite avec React, TypeScript et Tailwind CSS.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Fonctionnalités

### 🌟 Interface Client
- Catalogue de véhicules avec filtres et recherche
- Système de réservation en ligne
- Visualisation détaillée des véhicules
- Interface responsive et animations fluides

### 👑 Interface Administration
- Gestion complète des véhicules (CRUD)
- Gestion des réservations
- Tableau de bord avec statistiques
- Paramètres système

## 🛠 Technologies Utilisées

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations)
  - React Router v6
  - Lucide React (icônes)

## 🚀 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/autoloc.git
```

2. Installez les dépendances :
```bash
cd autoloc
npm install
```

3. Lancez l'application :
```bash
npm run dev
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── admin/          # Composants de l'interface admin
│   └── ui/             # Composants UI réutilisables
├── types/              # Types TypeScript
├── styles/             # Styles globaux
└── utils/              # Fonctions utilitaires
```

## 🎯 Points Clés du Projet

### 💫 Animations
- Utilisation de Framer Motion pour des transitions fluides
- Animations sur les cartes de véhicules
- Transitions de page
- Effets de hover et de clic

### 🎨 Design
- Interface moderne et épurée
- Système de design cohérent
- Palette de couleurs professionnelle
- Composants réactifs

### 🔒 Sécurité
- Authentification utilisateur
- Protection des routes admin
- Validation des données
- Gestion sécurisée des sessions

## 📱 Pages Principales

### 🏠 Page d'Accueil
- Hero section avec appel à l'action
- Liste des véhicules disponibles
- Filtres de recherche
- Section promotionnelle

### 👔 Interface Admin
1. **Gestion des Véhicules**
   - Liste complète des véhicules
   - Ajout/Modification/Suppression
   - Gestion des disponibilités
   - Upload d'images

2. **Gestion des Réservations**
   - Vue d'ensemble des réservations
   - Statuts (En attente, Confirmée, Annulée)
   - Filtres et recherche
   - Actions rapides

3. **Paramètres**
   - Configuration système
   - Gestion des utilisateurs
   - Préférences de notification
   - Paramètres régionaux

## 🔧 Configuration

### Variables d'Environnement
```env
VITE_API_URL=votre_url_api
VITE_STORAGE_URL=votre_url_stockage
```

### Configuration Tailwind
Le fichier `tailwind.config.js` contient la configuration personnalisée pour :
- Thème de couleurs
- Polices
- Points de rupture responsive
- Extensions personnalisées

## 📈 Performances

- Build optimisé avec Vite
- Lazy loading des composants
- Optimisation des images
- Mise en cache intelligente

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 📧 Contact

Votre Nom - [@votretwitter](https://twitter.com/votretwitter)

Lien du projet: [https://github.com/votre-username/autoloc](https://github.com/votre-username/autoloc)