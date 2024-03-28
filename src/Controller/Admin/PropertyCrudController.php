<?php

namespace App\Controller\Admin;

use App\Entity\Property;
use App\Form\Admin\VichImageType;
use App\Form\GeolocalisationFormType;
use App\Form\Admin\VichImagePropertyType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PropertyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Property::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            // 3 tabulations pour l'indentation
            FormField::addTab('Aspects généraux du bien immobilier'),
            IdField::new('id')->onlyOnIndex(),
            ImageField::new('pictures[0].imageName', 'Image')
                ->setBasePath('/assets/images/property/')
                ->onlyOnIndex(),
            TextField::new('propertyTitle', 'Titre')->setColumns(6),
            TextField::new('price', 'Prix')->setColumns(6),
            TextField::new('Area', 'Surface')->setColumns(6),
            TextField::new('room', 'Nombre de pièces')->setColumns(6),

            /**
             * a voir si on met automatiquement le User en fonction de l'agent connecté
             */
            AssociationField::new('AgentImmobilier', 'Agent')->setColumns(6),
            TextField::new('geolocalisation', 'Geolocalisation')->setFormTypeOption('mapped', false),

            FormField::addTab('les service du bien immobilier'),
            CollectionField::new('amenities', 'Les services proposé')->onlyOnForms(),

            FormField::addTab('Les images'),
            // colletion avec le champ image file dans le formulaire foem/admin/vichimagetype   
        ];
    }
}
