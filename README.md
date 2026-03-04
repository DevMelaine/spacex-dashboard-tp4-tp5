# 🚀 SpaceX Dashboard

Application web développée avec React permettant d'explorer les lancements SpaceX via leur API publique.

Ce projet a été réalisé dans le cadre des TP4 & TP5 du module "Développement Web Client Riche".

---

## 📌 Objectifs du Projet

- Implémenter un système de routing avec React Router
- Consommer une API REST (SpaceX API)
- Gérer les états (loading, error)
- Implémenter le Lazy Loading
- Ajouter des tests unitaires avec Vitest
- Générer un build de production optimisé

---

## 🛠️ Technologies Utilisées

- React
- Vite
- React Router DOM
- Axios
- Vitest
- Testing Library

---

## 🏗️ Architecture du Projet

src/
│
├── pages/
│ ├── Home.jsx
│ └── MissionDetail.jsx
│
├── components/
│
├── tests/
│ └── Home.test.jsx
│
├── App.jsx
└── main.jsx


---

## ⚙️ Installation

Cloner le projet :

```bash
git clone https://github.com/DevMelaine/spacex-dashboard-tp4-tp5.git

git clone git@github.com:DevMelaine/spacex-dashboard-tp4-tp5.git
cd spacex-dashboard

Installer les dépendances :
npm install

Lancer le projet en développement:
npm run dev

# Lancer les tests:
npm run test

# Générer le build de production:
npm run build

# Prévisualiser le build :
npm run preview

# Fonctionnalités Implémentées

- Affichage des 10 derniers lancements SpaceX

- Navigation vers une page détail dynamique

- Gestion des états de chargement et d’erreur

- Lazy loading des pages

- Test unitaire sur la page Home

- Build optimisé pour production

# API Utilisée:
SpaceX REST API
https://api.spacexdata.com/v4/launches

#Auteur

Projet réalisé dans le cadre d’un travail académique par:
- TCHAKPI Pato Kibalo Mélaine (Lead technique)
- N'TCHA Darius (Developpeur de la page missionDetail)

# Licence

Projet académique – usage pédagogique.