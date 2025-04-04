/**
 * Fixtures pour les aménités immobilières
 * - Données réalistes pour une application immobilière
 * - Catégorisation des aménités
 * - Icônes Font Awesome correspondantes
 * 
 * Chaque objet représente une aménité disponible pour une propriété.
 * Ces aménités sont utilisées pour décrire les équipements et services associés aux propriétés.
 * Exemple d'aménités : Climatisation, Wi-Fi, Piscine, Parking, etc.
 * 
 * Catégorisation des aménités pour faciliter la recherche et l'organisation :
 * - confort, luxe, pratique, accessibilité, extérieur, sécurité, services, wellness
 */

export const amenities = [
  {
    // Nom technique unique de l'aménité
    name: 'air_conditioning', 
    // Nom lisible de l'aménité affiché à l'utilisateur
    displayName: 'Climatisation', 
    // Icône FontAwesome associée
    iconClass: 'fas fa-snowflake', 
    // Catégorie de l'aménité
    category: 'confort'
  },
  {
    name: 'wifi',
    displayName: 'Wi-Fi Haut Débit',
    iconClass: 'fas fa-wifi',
    category: 'confort'
  },
  {
    name: 'swimming_pool',
    displayName: 'Piscine',
    iconClass: 'fas fa-swimming-pool',
    category: 'luxe'
  },
  {
    name: 'parking',
    displayName: 'Parking Privé',
    iconClass: 'fas fa-parking',
    category: 'pratique'
  },
  {
    name: 'elevator',
    displayName: 'Ascenseur',
    iconClass: 'fas fa-elevator',
    category: 'accessibilite'
  },
  {
    name: 'garden',
    displayName: 'Jardin',
    iconClass: 'fas fa-tree',
    category: 'exterieur'
  },
  {
    name: 'terrace',
    displayName: 'Terrasse',
    iconClass: 'fas fa-umbrella-beach',
    category: 'exterieur'
  },
  {
    name: 'security',
    displayName: 'Système de Sécurité',
    iconClass: 'fas fa-shield-alt',
    category: 'securite'
  },
  {
    name: 'concierge',
    displayName: 'Service de Conciergerie',
    iconClass: 'fas fa-bell-concierge',
    category: 'services'
  },
  {
    name: 'gym',
    displayName: 'Salle de Sport',
    iconClass: 'fas fa-dumbbell',
    category: 'wellness'
  },
  {
    name: 'disabled_access',
    displayName: 'Accès Handicapé',
    iconClass: 'fas fa-wheelchair',
    category: 'accessibilite'
  },
  {
    name: 'fireplace',
    displayName: 'Cheminée',
    iconClass: 'fas fa-fire',
    category: 'confort'
  },
  {
    name: 'alarm',
    displayName: 'Alarme',
    iconClass: 'fas fa-bell',
    category: 'securite'
  }
];
