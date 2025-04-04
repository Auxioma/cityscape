/**
 * Connexion sécurisée à MongoDB
 * Gestion des erreurs et reconnexion automatique en cas de perte de connexion.
 * @module db
 */

const mongoose = require('mongoose');  // Importation de Mongoose pour interagir avec MongoDB
const { MONGO_URI } = require('./env');  // Chargement de l'URI MongoDB à partir de la configuration de l'environnement

/**
 * Fonction de connexion à MongoDB avec gestion des erreurs et reconnexion automatique
 */
const connectDB = async () => {
  try {
    // Tentative de connexion à MongoDB avec les options de configuration
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,  // Utilisation de l'analyseur d'URL MongoDB moderne
      useUnifiedTopology: true,  // Activation du gestionnaire de connexion unifié
      serverSelectionTimeoutMS: 5000,  // Timeout de 5 secondes pour la connexion au serveur
      maxPoolSize: 10,  // Limite de 10 connexions simultanées à la base de données
    });

    console.log('MongoDB connecté avec succès');  // Message de confirmation de la connexion réussie
    
    // Gestion des erreurs pendant l'utilisation de la connexion après l'établissement de la connexion initiale
    mongoose.connection.on('error', (err) => {
      console.error('Erreur de connexion MongoDB:', err);  // Affichage de l'erreur dans la console
    });

    // Gestion de la reconnexion automatique en cas de perte de connexion
    mongoose.connection.on('disconnected', () => {
      console.log('Connexion MongoDB perdue. Tentative de reconnexion...');
      // Tentative de reconnexion avec un délai exponentiel pour éviter de surcharger le serveur
      setTimeout(() => connectDB(), 5000);
    });

  } catch (err) {
    // Si la connexion échoue initialement, log de l'erreur et arrêt de l'application
    console.error('Échec de connexion à MongoDB:', err);
    process.exit(1);  // Arrêt immédiat de l'application si la connexion échoue
  }
};

// Exportation de la fonction pour qu'elle soit accessible dans d'autres fichiers
module.exports = connectDB;
