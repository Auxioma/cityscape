<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // categories pour une agence immobilière
        $category= [
            1 => [
                'name' => 'Vente',
                'description' => 'Vente de biens immobiliers',
                'slug' => 'vente',
                'parent' => [
                    1 => [
                        'name' => 'Maison',
                        'description' => 'Vente de maisons',
                        'slug' => 'maison',
                    ],
                    2 => [
                        'name' => 'Appartement',
                        'description' => 'Vente d\'appartements',
                        'slug' => 'appartement',
                    ],
                    3 => [
                        'name' => 'Terrain',
                        'description' => 'Vente de terrains',
                        'slug' => 'terrain',
                    ],
                    4 => [
                        'name' => 'Local commercial',
                        'description' => 'Vente de locaux commerciaux',
                        'slug' => 'local-commercial',
                    ],
                    5 => [
                        'name' => 'Immeuble',
                        'description' => 'Vente d\'immeubles',
                        'slug' => 'immeuble',
                    ],
                    6 => [
                        'name' => 'Fonds de commerce',
                        'description' => 'Vente de fonds de commerce',
                        'slug' => 'fonds-de-commerce',
                    ],
                ],

            ],
            2 => [
                'name' => 'Location',
                'description' => 'Location de biens immobiliers',
                'slug' => 'location',
                'parent' => [
                    1 => [
                        'name' => 'Maison',
                        'description' => 'Location de maisons',
                        'slug' => 'maison',
                    ],
                    2 => [
                        'name' => 'Appartement',
                        'description' => 'Location d\'appartements',
                        'slug' => 'appartement',
                    ],
                    3 => [
                        'name' => 'Terrain',
                        'description' => 'Location de terrains',
                        'slug' => 'terrain',
                    ],
                    4 => [
                        'name' => 'Local commercial',
                        'description' => 'Location de locaux commerciaux',
                        'slug' => 'local-commercial',
                    ],
                    5 => [
                        'name' => 'Immeuble',
                        'description' => 'Location d\'immeubles',
                        'slug' => 'immeuble',
                    ],
                    6 => [
                        'name' => 'Fonds de commerce',
                        'description' => 'Location de fonds de commerce',
                        'slug' => 'fonds-de-commerce',
                    ],
                ]
            ],
            3 => [
                'name' => 'Gestion',
                'description' => 'Gestion de biens immobiliers',
                'slug' => 'gestion',
                'parent' => [
                    1 => [
                        'name' => 'Gestion locative',
                        'description' => 'Gestion locative',
                        'slug' => 'gestion-locative',
                    ],
                    2 => [
                        'name' => 'Gestion de copropriété',
                        'description' => 'Gestion de copropriété',
                        'slug' => 'gestion-de-copropriete',
                    ],
                ]
            ],
        ];
        
        foreach ($category as $key => $value) {
            $category = new \App\Entity\Category();
            $category->setName($value['name']);
            $category->setSlug($value['slug']);
            $manager->persist($category);
            $this->addReference('category_' . $key, $category);
            if (isset($value['parent'])) {
                foreach ($value['parent'] as $k => $v) {
                    $parent = new \App\Entity\Category();
                    $parent->setName($v['name']);
                    $parent->setSlug($v['slug']);
                    $parent->setParent($category);
                    $manager->persist($parent);
                    $this->addReference('category_' . $key . '_' . $k, $parent);
                }
            }
        }

        $manager->flush();
    }
}
