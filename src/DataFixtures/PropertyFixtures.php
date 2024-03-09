<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Pictures;
use App\Entity\Property;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PropertyFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create();

        for ($i= 0; $i < 500; $i++) {
            $property = new Property();
            $property->setPropertyTitle($faker->sentence(3));
            $property->setDescription($faker->text(200));
            // Attention a verifier que les status sont bien dans les category
            $property->setStatus($faker->randomElement(['For Sale', 'For Rent']));
            $property->setStatus1($faker->randomElement(['New', 'Old']));

            $property->setPrice($faker->randomNumber(5));
            $property->setArea($faker->randomNumber(3));
            $property->setRoom($faker->randomNumber(1));
            $property->setAgentImmobilier($this->getReference('agent'));

            $property->setLatitude($faker->latitude);
            $property->setLongitude($faker->longitude);

            $manager->persist($property);

            for ($j = 1; $j < rand(1, 5); $j++) {
                /**
                 * je vais télécharger des images de biens immobiliers  
                 */

                $image = file_get_contents('https://loremflickr.com/1920/584/house');
                $ImgNewName = 'property' . rand(1, 9999) . '.jpg';
                file_put_contents('C:\laragon\www\La-Rochelle\CDA\cityscape\public\assets\images\property/' . $ImgNewName, $image);

                $picture = new Pictures();
                $picture->setImageName($ImgNewName);
                $picture->setProperty($property);
                $manager->persist($picture);
            }
        }

        $manager->flush();

    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
