import { faker } from '@faker-js/faker';
import { users } from './user.js'; // Importation des utilisateurs pour les références d'agent
import { amenities } from './amenities.js'; // Importation des aménités disponibles

export const properties = Array.from({ length: 50 }, (_, i) => {
  const cities = [
    { name: 'Paris', coords: [2.3522, 48.8566] },
    { name: 'Lyon', coords: [4.8357, 45.7640] },
    { name: 'Marseille', coords: [5.3698, 43.2965] }
  ];

  const city = cities[i % cities.length];
  const isForRent = i % 3 !== 0; // 1/3 à vendre, 2/3 à louer
  const type = ['apartment', 'house', 'land'][i % 3];

  // Génération d'un prix réaliste selon le type et le statut
  const price = isForRent 
    ? type === 'apartment' 
      ? faker.number.int({ min: 500, max: 2000 }) 
      : faker.number.int({ min: 800, max: 3000 })
    : type === 'apartment' 
      ? faker.number.int({ min: 150000, max: 800000 })
      : faker.number.int({ min: 300000, max: 1500000 });

  // Sélection aléatoire d'aménités en fonction des IDs existants
  const selectedAmenities = faker.helpers.arrayElements(
    amenities.map(a => a.name),
    faker.number.int({ min: 3, max: 5 })
  );

  // Sélection aléatoire d'un agent existant
  const agents = users.filter(user => user.isAgent);
  const createdBy = agents.length > 0 ? faker.helpers.arrayElement(agents)._id : null;

  return {
    title: `${type === 'apartment' ? 'Appartement' : type === 'house' ? 'Maison' : 'Terrain'} ${faker.word.adjective()} à ${city.name}`,
    description: faker.lorem.paragraphs(2),
    status: isForRent ? 'for_rent' : 'for_sale',
    type,
    price,
    area: faker.number.int({ min: 30, max: type === 'land' ? 1000 : 200 }),
    bedrooms: type === 'land' ? 0 : faker.number.int({ min: 1, max: 4 }),
    bathrooms: type === 'land' ? 0 : faker.number.int({ min: 1, max: 3 }),
    address: {
      street: faker.location.streetAddress(),
      city: city.name,
      postalCode: faker.location.zipCode(),
      country: 'France',
      coordinates: { type: "Point", coordinates: city.coords } // ✅ Correction ici
    },
    amenities: selectedAmenities,
    images: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, (_, j) => ({
      path: `/properties/${i}-${j}.jpg`,
      isFeatured: j === 0
    })),
    createdBy, // Référence à un agent
    verified: faker.datatype.boolean(0.8) // 80% des propriétés sont vérifiées
  };
});
