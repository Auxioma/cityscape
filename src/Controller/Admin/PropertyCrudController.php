<?php

namespace App\Controller\Admin;

use App\Entity\Property;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
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
            IdField::new('id')->onlyOnIndex(),
            ImageField::new('pictures[0].imageName', 'Image')
                ->setBasePath('/assets/images/property/')
                ->onlyOnIndex(),
            TextField::new('propertyTitle', 'Titre'),
            TextField::new('price', 'Prix'),
            TextField::new('Area', 'Surface'),
            TextField::new('room', 'Nombre de pièces'),
            AssociationField::new('AgentImmobilier', 'Agent'),


        ];
    }
}
