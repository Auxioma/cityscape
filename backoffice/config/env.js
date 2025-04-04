/**
 * Configuration des variables d'environnement
 * Sécurité : Validation des variables requises
 * Format ES Module (ESM) utilisé pour l'importation des modules
 */

import dotenv from 'dotenv';  // Importation du module dotenv pour charger les variables d'environnement depuis un fichier .env
dotenv.config();  // Chargement des variables d'environnement depuis le fichier .env

/**
 * Liste des variables d'environnement requises pour l'application
 * Si l'une d'entre elles manque, une erreur sera levée
 */
const requiredVars = ['MONGO_URI', 'JWT_SECRET'];  // Liste des variables obligatoires (ajoute en fonction de ton projet)
const missingVars = requiredVars.filter(v => !process.env[v]);  // Filtre les variables manquantes

// Si des variables sont manquantes, lève une erreur avec un message explicite
if (missingVars.length) {
  throw new Error(`Variables d'environnement manquantes : ${missingVars.join(', ')}`);
}

// Exportation des variables d'environnement nécessaires pour l'application
// Ces variables sont accessibles dans toute l'application via leur nom

export const MONGO_URI = process.env.MONGO_URI;  // URI de connexion MongoDB (ex : mongodb://localhost:27017)
export const JWT_SECRET = process.env.JWT_SECRET;  // Clé secrète pour signer les tokens JWT
export const PORT = process.env.PORT || 5000;  // Port d'écoute du serveur, par défaut 5000 si non défini
export const NODE_ENV = process.env.NODE_ENV || 'development';  // Environnement d'exécution (par défaut 'development')

// Export par défaut des variables pour une utilisation centralisée et simplifiée
export default {
  MONGO_URI,
  JWT_SECRET,
  PORT,
  NODE_ENV
};
