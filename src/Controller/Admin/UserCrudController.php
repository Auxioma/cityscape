<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\Admin\CreatePasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public function __construct(
        private MailerInterface $mailer
    ){}

    public static function getEntityFqcn(): string
    {
        return User::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('username', 'Pseudo'),
            TextField::new('LastName', 'Nom'),
            TextField::new('firstName', 'Prénom'),
            TextField::new('email', 'Email'),   
            BooleanField::new('isVerified', 'Vérifié'),
            // passsword with defaut value 0000
            Field::new('password', 'Mot de passe')->setFormTypeOption('data', '0000'),
        ];
    }

    public function persistUserEntity(EntityManagerInterface $entityManager, User $user)
    { 
        $email = (new TemplatedEmail()) 
            ->from('toto@toto.toto')
            ->to($user->getEmail())
            ->subject('Bienvenue sur notre site')
            ->htmlTemplate('emails/registration.html.twig') // je crée un template twig pour le mail
            ->context([
                'user' => $user
            ]);
        ;
        $this->mailer->send($email);
        parent::persistEntity($entityManager, $user);
    }
}
