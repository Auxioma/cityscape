import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { MONGO_URI } from '../config/env.js';
import User from '../models/User.js';
import Property from '../models/Property.js';
import Amenity from '../models/amenities.js';
import { users } from '../fixtures/user.js';
import { amenities } from '../fixtures/amenities.js';
import { properties } from '../fixtures/properties.js';

dotenv.config();

async function seedDatabase() {
  try {
    console.log('Connexion à MongoDB...');
    await mongoose.connect(MONGO_URI, {
      connectTimeoutMS: 5000,
      socketTimeoutMS: 30000
    });

    console.log('Suppression des anciennes données...');
    await mongoose.connection.dropDatabase();

    console.log('Insertion des utilisateurs...');
    const createdUsers = await User.insertMany(users);
    
    console.log('Insertion des aménités...');
    const createdAmenities = await Amenity.insertMany(amenities);
    
    console.log('Insertion des propriétés...');
    const propertiesWithRefs = properties.map(prop => ({
      ...prop,
      amenities: prop.amenities.map(name => 
        createdAmenities.find(a => a.name === name)._id
      ),
      createdBy: createdUsers.find(u => u.isAgent)._id
    }));
    await Property.insertMany(propertiesWithRefs);
    
    console.log('✅ Base de données initialisée avec succès');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erreur lors de l\'initialisation:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();