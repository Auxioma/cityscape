/**
 * Modèle des équipements (Amenities)
 * - Représente un équipement ou une caractéristique d'une propriété (ex: piscine, garage, etc.)
 * - Permet de stocker des informations sur l'équipement, comme son nom, son affichage, et son icône
 */

import mongoose from 'mongoose';  // Importation de mongoose pour définir les schémas de données

// Définition du schéma pour un équipement (Amenity)
const amenitySchema = new mongoose.Schema({
  // Nom unique de l'équipement (ex: piscine, garage, etc.)
  name: {
    type: String,
    required: true,  // Le nom est obligatoire
    unique: true     // Le nom doit être unique dans la collection (pas de doublon)
  },

  // Nom d'affichage pour l'équipement (ex: "Piscine", "Garage")
  displayName: {
    type: String,
    default: function() { 
      return this.name.charAt(0).toUpperCase() + this.name.slice(1); 
    }  // Par défaut, utilise le nom avec une première lettre en majuscule
  },

  // Classe CSS pour l'icône associée à l'équipement (ex: 'fa fa-swimming-pool' pour une piscine)
  iconClass: {
    type: String,
    default: ''  // Par défaut, aucune icône n'est associée
  }
});

// Création du modèle "Amenities" basé sur le schéma défini
const Amenities = mongoose.model('Amenities', amenitySchema);

// Exportation du modèle pour l'utiliser ailleurs dans l'application
export default Amenities;
