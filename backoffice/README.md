backoffice/
├── config/
│   ├── db.js          # Configuration MongoDB
│   ├── security.js    # Middlewares de sécurité
│   └── env.js         # Gestion des variables d'environnement
├── models/
│   ├── Amenity.js     # Modèle des aménités
│   ├── Property.js    # Modèle des propriétés
│   ├── User.js        # Modèle utilisateur
│   └── index.js       # Export des modèles
├── fixtures/
│   ├── amenities.js   # Données aménités
│   ├── properties.js  # Données propriétés
│   ├── users.js       # Données utilisateurs
│   └── index.js       # Chargement des fixtures
├── scripts/
│   └── seed.js        # Script d'initialisation
├── .env               # Variables d'environnement
├── .env.example       # Template des variables
├── package.json
└── README.md          # Documentation