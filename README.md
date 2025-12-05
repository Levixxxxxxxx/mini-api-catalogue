# 🚗 Mini API Catalogue

Cette API permet de gérer des **marques de voitures** et des **modèles de voitures**.  
Elle utilise Node.js + Express et stocke les données dans des fichiers JSON simples.


## Prérequis

Avant de lancer l’API, assurez-vous d’avoir installé :

- **Node.js (>= 16)**
- **npm** (inclus avec Node.js)
- **Git** (optionnel, si vous clonez un dépôt)
- **Python** 

## Cloner le projet

Pour cloner le projet il vous suffit de vous rendre dans le fichier de votre choix, ouvrir le terminal de commande et coller cela : 

```
git clone https://github.com/Levixxxxxxxx/mini-api-catalogue.git
```

## Structure du projet
```
mini-api-catalogue/
│
├── data/
│   ├── brands.json
│   └── carModels.json
│
├── routes/
│   ├── brands.js
│   └── carModels.js
│
├── server.js
├── package.json
└── README.md
```

## 🚀 Installation & Lancement

### 1. Installer les dépendances

```npm install```

### 2. Lancer le serveur

```node server.js```

### API disponible sur :
👉 http://localhost:3000


## Endpoints

### Marques (`/brands`)

| Méthode | Endpoint        | Description                      |
|---------|------------------|---------------------------------|
| GET     | /brands          | Liste toutes les marques        |
| GET     | /brands/:id      | Récupère une marque par ID      |
| POST    | /brands          | Ajoute une nouvelle marque      |
| PUT     | /brands/:id      | Modifier une marque             |
| DELETE  | /brands/:id      | Supprime une marque par ID      |


### Modèles (`/models`)

| Méthode | Endpoint         | Description                          |
|---------|-------------------|-------------------------------------|
| GET     | /models           | Liste tous les modèles              |
| GET     | /models/:id       | Récupère un modèle par ID           |
| POST    | /models           | Ajoute un nouveau modèle            |
| PUT     | /models/:id       | Modifier un  modèle                 |
| DELETE  | /models/:id       | Supprime un modèle par ID           |

## 📚 Lancer les tests

### 1. Création d’un environnement virtuel

```
python3 -m venv python
```

### 2. Activation de l’environnement virtuel

macOS / Linux

```source python/bin/activate```

Windows (PowerShell)

```source python/bin/activate```

Windows (CMD)

```source python/bin/activate```

### 3. Exécuter les tests

Les tests se trouvent dans :

```mini-api-catalogue/tests/test.py```


Pour les exécuter (environnement activé) :

```python tests/test.py```


