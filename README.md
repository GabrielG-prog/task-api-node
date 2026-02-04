# 📦 Node.js REST API - Gestion de Tâches

Une API REST construite avec **Node.js**, **Express** et **MySQL** pour gérer des tâches (CRUD), avec **authentification JWT**, **validation des données** et **tests automatisés**.  
Ce projet est structuré et modulaire, prêt à être utilisé comme base pour d’autres APIs. :contentReference[oaicite:0]{index=0}

---

## 🧠 Fonctionnalités

- ✔️ Gestion de tâches (GET / POST / PUT / PATCH / DELETE)  
- 🔐 Authentification avec JSON Web Token (JWT)  
- 📋 Validation des champs d’entrée (Joi / express-validator)  
- 🧪 Tests automatisés avec **Jest** et **Supertest**  
- 📊 Pagination et filtres pour la liste de tâches  
- ⚙️ Structure propre (routes/controllers/middleware/models)

---

## 🚀 Installation

### 📦 Prérequis

Tu dois avoir installé localement :

- **Node.js et npm**
- **MySQL**
- **Git**

---

### 🛠️ Mise en place locale

1. Clone le dépôt :

   ```bash
   git clone https://github.com/TON_UTILISATEUR/TON_REPO.git
   cd TON_REPO

2. Installe les dépendances :

   ```bash
   npm install

3. Crée un fichier .env à la racine et ajoute :

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=tasksdb
    PORT=3000
    JWT_SECRET=mysecret123


4. crée la base de donnée :

   CREATE DATABASE tasksdb;

5. Démarre l’API :

    npm run dev


📌 L’API sera disponible sur :

    http://localhost:3000

