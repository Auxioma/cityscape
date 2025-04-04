/**
 * Modèle de propriété
 * - Validation géographique des coordonnées GPS
 * - Indexation optimisée pour les recherches
 * - Gestion des médias (images)
 * - Validation des champs de données (prix, surface, etc.)
 */

import mongoose from 'mongoose';
import validator from 'validator';  // Utilisation de validator pour valider les coordonnées GPS

// Définition du schéma de la propriété
const propertySchema = new mongoose.Schema({
  // Titre de la propriété
  title: {
    type: String,
    required: [true, 'Un titre est requis'],  // Validation: Le titre est obligatoire
    trim: true,  // Enlève les espaces avant et après le titre
    maxlength: [100, 'Le titre ne peut excéder 100 caractères']  // Longueur maximale
  },
  
  // Description de la propriété
  description: {
    type: String,
    required: [true, 'Une description est requise'],  // Validation: La description est obligatoire
    maxlength: [5000, 'La description ne peut excéder 5000 caractères']  // Longueur maximale
  },
  
  // Statut de la propriété (à louer ou à vendre)
  status: {
    type: String,
    required: true,
    enum: {
      values: ['for_rent', 'for_sale'],
      message: 'Le statut doit être "for_rent" ou "for_sale"'
    }
  },
  
  // Type de propriété (appartement, maison, terrain, etc.)
  type: {
    type: String,
    required: true,
    enum: {
      values: ['apartment', 'house', 'land', 'single_family'],
      message: 'Type de propriété invalide'
    }
  },
  
  // Prix de la propriété
  price: {
    type: Number,
    required: [true, 'Un prix est requis'],  // Validation: Le prix est obligatoire
    min: [0, 'Le prix ne peut être négatif']  // Validation: Le prix doit être positif
  },
  
  // Devise du prix (USD, EUR, GBP, etc.)
  priceCurrency: {
    type: String,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP']  // Devises acceptées
  },
  
  // Surface en mètres carrés
  area: {
    type: Number,
    required: true,
    min: [1, 'La surface doit être positive']  // La surface doit être positive
  },
  
  // Adresse de la propriété
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, default: 'France' },
    coordinates: {
      type: {
        type: String,
        default: 'Point',  // Le type de géométrie est un point
        enum: ['Point']
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: function(coords) {
            return validator.isLatLong(`${coords[1]},${coords[0]}`);  // Validation des coordonnées GPS
          },
          message: 'Coordonées GPS invalides'  // Message d'erreur si les coordonnées sont invalides
        }
      }
    }
  },
  
  // Liste des équipements associés à la propriété (référence à un autre modèle)
  amenities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Amenity'  // Référence à un modèle "Amenity" (équipement)
  }],
  
  // Images associées à la propriété
  images: [{
    path: { type: String, required: true },  // Chemin de l'image
    isFeatured: { type: Boolean, default: false },  // Image principale
    caption: String,  // Légende de l'image
    uploadedAt: { type: Date, default: Date.now }  // Date de téléchargement de l'image
  }],
  
  // ID de l'utilisateur ayant créé la propriété
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Statut de vérification de la propriété (vérifiée ou non)
  verified: {
    type: Boolean,
    default: false  // Par défaut, la propriété n'est pas vérifiée
  }
}, {
  timestamps: true,  // Ajout automatique des champs "createdAt" et "updatedAt"
  toJSON: { virtuals: true },  // Inclut les propriétés virtuelles dans les objets JSON retournés
  toObject: { virtuals: true }  // Inclut les propriétés virtuelles lors de la conversion en objets
});

// Indexation géospatial pour les recherches de proximité (coordonnées GPS)
propertySchema.index({ 'address.coordinates': '2dsphere' });  // Utilise un index géospatial "2dsphere"

// Indexation texte pour la recherche full-text sur le titre, la description et l'adresse
propertySchema.index({
  title: 'text',
  description: 'text',
  'address.street': 'text',
  'address.city': 'text'
});

// Indexation pour les filtres courants (par statut, type, prix, etc.)
propertySchema.index({ status: 1, type: 1, price: 1, bedrooms: 1 });

// Virtual pour calculer le prix par mètre carré
propertySchema.virtual('pricePerSqm').get(function() {
  return this.price / this.area;  // Retourne le prix divisé par la surface pour obtenir le prix au m²
});

// Exportation du modèle Property
export default mongoose.model('Property', propertySchema);
