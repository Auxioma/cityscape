<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Pictures;
use App\Entity\Property;
use App\Entity\Amenities;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PropertyFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create();

        for ($i= 0; $i < 1300; $i++) {
            $property = new Property();
            $property->setPropertyTitle($faker->sentence(3));
            $property->setDescription($faker->text(200));
            $property->setCategory($this->getReference('category_' . rand(1, 6)));


            $property->setPrice($faker->randomNumber(2));
            $property->setArea($faker->randomNumber(3));
            $property->setRoom($faker->randomNumber(1));
            $property->setAgentImmobilier($this->getReference('agent'));

            $property->setLatitude($faker->latitude);
            $property->setLongitude($faker->longitude);

            $property->setSlug($faker->slug);

            $manager->persist($property);

            for ($j = 0; $j < rand(1, 5); $j++) {
                /**
                 * je vais télécharger des images de biens immobiliers  
                 */
                $ImgNewName = 'property' . rand(1, 100) . '.jpg';

                // je vérifie avant que l'image n'existe pas
                while (!file_exists('C:\laragon\www\La-Rochelle\CDA\cityscape\public\assets\images\property/' . $ImgNewName)) {
                    $image = file_get_contents('https://loremflickr.com/905/584/house');
                    file_put_contents('C:\laragon\www\La-Rochelle\CDA\cityscape\public\assets\images\property/' . $ImgNewName, $image);
                }

                $picture = new Pictures();
                $picture->setImageName($ImgNewName);
                $picture->setProperty($property);
                $manager->persist($picture);
            }

            // Amenities
            for ($k = 0; $k < rand(3, 9); $k++) {
                $amenities = new Amenities();
                $amenities->setName($faker->word);
                $amenities->setProperty($property);
                $manager->persist($amenities);
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
