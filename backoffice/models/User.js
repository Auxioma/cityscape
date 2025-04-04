/**
 * Modèle utilisateur
 * - Validation des données
 * - Hachage sécurisé des mots de passe
 * - Gestion des rôles (admin, agent, etc.)
 * - Protection contre les attaques par force brute (tentatives de connexion)
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';  // Utilisation de bcryptjs pour un hachage sécurisé des mots de passe
import validator from 'validator';  // Utilisation de validator pour valider les emails et les numéros de téléphone

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
  // Nom d'utilisateur
  username: {
    type: String,
    required: [true, 'Un nom d\'utilisateur est requis'],
    unique: true,  // Le nom d'utilisateur doit être unique dans la base de données
    trim: true,  // Supprime les espaces avant et après
    minlength: [3, 'Le nom d\'utilisateur doit contenir au moins 3 caractères'],
    maxlength: [30, 'Le nom d\'utilisateur ne peut excéder 30 caractères']
  },
  // Email de l'utilisateur
  email: {
    type: String,
    required: [true, 'Un email est requis'],
    unique: true,  // L'email doit être unique
    lowercase: true,  // Convertit l'email en minuscule
    validate: [validator.isEmail, 'Veuillez fournir un email valide']  // Validation de l'email avec validator
  },
  // Mot de passe (haché)
  passwordHash: {
    type: String,
    required: [true, 'Un mot de passe est requis'],
    select: false  // Ne pas retourner le mot de passe haché dans les requêtes par défaut
  },
  // Prénom
  firstName: {
    type: String,
    trim: true,  // Supprime les espaces avant et après
    maxlength: [50, 'Le prénom ne peut excéder 50 caractères']
  },
  // Nom de famille
  lastName: {
    type: String,
    trim: true,  // Supprime les espaces avant et après
    maxlength: [50, 'Le nom ne peut excéder 50 caractères']
  },
  // Numéro de téléphone
  phone: {
    type: String,
    validate: [validator.isMobilePhone, 'Veuillez fournir un numéro valide']  // Validation du numéro de téléphone avec validator
  },
  // Rôle "agent"
  isAgent: {
    type: Boolean,
    default: false  // Par défaut, l'utilisateur n'est pas un agent
  },
  // Rôle "admin"
  isAdmin: {
    type: Boolean,
    default: false  // Par défaut, l'utilisateur n'est pas un admin
  },
  // Dernière connexion
  lastLogin: Date,
  // Tentatives de connexion (pour gestion des attaques par force brute)
  loginAttempts: {
    type: Number,
    default: 0  // Nombre de tentatives de connexion échouées
  },
  // Moment du verrouillage après trop de tentatives échouées
  lockUntil: Date
}, {
  timestamps: true  // Ajoute les champs createdAt et updatedAt automatiquement
});

// Middleware de hachage avant sauvegarde du mot de passe
userSchema.pre('save', async function(next) {
  if (!this.isModified('passwordHash')) return next();  // Si le mot de passe n'est pas modifié, on passe au suivant
  
  try {
    // Hachage du mot de passe avec bcryptjs (coût adaptatif de 10 tours)
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
    next();
  } catch (err) {
    next(err);  // Si erreur, on passe l'erreur au gestionnaire d'erreurs
  }
});

// Méthode pour vérifier si le mot de passe donné correspond au mot de passe haché
userSchema.methods.verifyPassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.passwordHash);  // Comparaison du mot de passe haché
};

// Méthode pour protéger contre les attaques par force brute (tentatives de connexion échouées)
userSchema.methods.incrementLoginAttempts = function() {
  if (this.lockUntil && this.lockUntil > Date.now()) return;  // Si l'utilisateur est actuellement verrouillé, on ne compte pas la tentative
  
  this.loginAttempts += 1;  // Augmente le nombre de tentatives de connexion
  if (this.loginAttempts >= 5) {  // Si plus de 5 tentatives échouées
    this.lockUntil = Date.now() + 30 * 60 * 1000;  // Verrouille le compte pendant 30 minutes
  }
};

// Exportation du modèle utilisateur
export default mongoose.model('User', userSchema);
