/**
 * Middlewares de sécurité
 * Protection contre les vulnérabilités courantes
 * - Sécurisation des en-têtes HTTP
 * - Limitation des requêtes pour prévenir les attaques par déni de service (DoS)
 * - Nettoyage des données MongoDB pour éviter les attaques d'injection
 */

import helmet from 'helmet';  // Importation de Helmet pour ajouter des en-têtes de sécurité HTTP
import rateLimit from 'express-rate-limit';  // Importation de express-rate-limit pour limiter le nombre de requêtes
import mongoSanitize from 'express-mongo-sanitize';  // Importation de express-mongo-sanitize pour nettoyer les données MongoDB

/**
 * Middleware pour sécuriser les en-têtes HTTP
 * Permet de protéger contre certaines attaques (ex: XSS, Clickjacking)
 */
export const setSecurityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      // Définition des directives CSP (Content Security Policy) pour interdire certains types de contenu
      defaultSrc: ["'self'"],  // Seules les ressources provenant du même domaine sont autorisées
      scriptSrc: ["'self'", "'unsafe-inline'"],  // Permet les scripts internes et inline (attention à l'utilisation d'unsafe-inline)
      styleSrc: ["'self'", "'unsafe-inline'"],  // Permet les styles internes et inline
      imgSrc: ["'self'", "data:", "https://*.cloudinary.com"],  // Autorise les images provenant de sources spécifiques
    }
  },
  hsts: {
    maxAge: 63072000,  // Durée de vie du header HSTS (HTTP Strict Transport Security) : 2 ans
    includeSubDomains: true,  // Applique HSTS sur tous les sous-domaines
    preload: true  // Demande au navigateur de précharger cette politique
  }
});

/**
 * Middleware de limitation des requêtes pour éviter les attaques par déni de service (DoS)
 * Limite le nombre de requêtes qu'un client peut envoyer en 15 minutes
 */
export const limitRequests = rateLimit({
  windowMs: 15 * 60 * 1000,  // Durée de la fenêtre : 15 minutes
  max: 100,  // Limite à 100 requêtes par fenêtre (15 minutes)
  message: 'Trop de requêtes depuis cette IP, veuillez réessayer plus tard'  // Message d'erreur en cas de dépassement de la limite
});

/**
 * Middleware de nettoyage des données MongoDB pour éviter les attaques d'injection
 * Remplace les caractères interdits dans les requêtes pour éviter les injections MongoDB
 */
export const sanitizeData = mongoSanitize({
  replaceWith: '_',  // Remplace les caractères suspects par un underscore (ex : $ ou .)
  onSanitize: ({ req, key }) => {
    console.warn(`Nettoyage de données suspectes dans ${key}`);  // Avertit en cas de nettoyage de données
  }
});
