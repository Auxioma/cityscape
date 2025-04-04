import bcrypt from 'bcryptjs';

export const users = [
  {
    username: 'admin1',
    email: 'admin1@example.com',
    passwordHash: bcrypt.hashSync('Admin@1234', 10), // Mot de passe haché
    firstName: 'Jean',
    lastName: 'Dupont',
    phone: '+33612345678',
    isAdmin: true,
    isAgent: false,
    lastLogin: new Date(),
    loginAttempts: 0,
    lockUntil: null
  },
  {
    username: 'admin2',
    email: 'admin2@example.com',
    passwordHash: bcrypt.hashSync('Admin@1234', 10),
    firstName: 'Sophie',
    lastName: 'Martin',
    phone: '+33687654321',
    isAdmin: true,
    isAgent: false,
    lastLogin: new Date(),
    loginAttempts: 0,
    lockUntil: null
  },
  {
    username: 'agent1',
    email: 'agent1@example.com',
    passwordHash: bcrypt.hashSync('Agent@1234', 10),
    firstName: 'Alex',
    lastName: 'Bernard',
    phone: '+33611223344',
    isAdmin: false,
    isAgent: true,
    lastLogin: new Date(),
    loginAttempts: 0,
    lockUntil: null
  },
  {
    username: 'agent2',
    email: 'agent2@example.com',
    passwordHash: bcrypt.hashSync('Agent@1234', 10),
    firstName: 'Marie',
    lastName: 'Durand',
    phone: '+33655667788',
    isAdmin: false,
    isAgent: true,
    lastLogin: new Date(),
    loginAttempts: 0,
    lockUntil: null
  },
  {
    username: 'user1',
    email: 'user1@example.com',
    passwordHash: bcrypt.hashSync('User@1234', 10),
    firstName: 'Thomas',
    lastName: 'Lefevre',
    phone: '+33633445566',
    isAdmin: false,
    isAgent: false,
    lastLogin: new Date(),
    loginAttempts: 0,
    lockUntil: null
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    passwordHash: bcrypt.hashSync('User@1234', 10),
    firstName: 'Emma',
    lastName: 'Roux',
    phone: '+33699887766',
    isAdmin: false,
    isAgent: false,
    lastLogin: new Date(),
    loginAttempts: 0,
    lockUntil: null
  }
];
