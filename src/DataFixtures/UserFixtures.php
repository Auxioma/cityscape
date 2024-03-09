<?php

namespace App\DataFixtures;

use Faker;
use Faker\Factory;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{

    public function __construct(
        private UserPasswordHasherInterface $userPasswordHasher
    ){}

    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create();

        // 1 user with admin role
        $user = new User();
        $user->setEmail('admin@admin.admin');
        $user->setUsername('admin');
        $user->setPassword($this->userPasswordHasher->hashPassword($user, 'admin'));
        $user->setRoles(['ROLE_ADMIN']);
        $user->setFirstName('admin');
        $user->setLastName('admin');
        $manager->persist($user);

        // je vais créer un ROLE_AGENT_IMMOBILIER
        $user = new User();
        $user->setEmail('agent@agent.agent');
        $user->setUsername('agent');
        $user->setPassword($this->userPasswordHasher->hashPassword($user, 'agent'));
        $user->setRoles(['ROLE_AGENT_IMMOBILIER']);
        $user->setFirstName('agent');
        $user->setLastName('agent');
        $this->addReference('agent', $user);
        $manager->persist($user);


        // Les role pour les utilisateur
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setEmail($faker->email);
            $user->setUsername($faker->userName);
            $user->setPassword($this->userPasswordHasher->hashPassword($user, '0000'));
            $user->setFirstName($faker->firstName);
            $user->setLastName($faker->lastName);
            $manager->persist($user);
        }

        $manager->flush();
    }
}
