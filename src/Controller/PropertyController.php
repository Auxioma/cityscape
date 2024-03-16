<?php

namespace App\Controller;

use App\Repository\PropertyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PropertyController extends AbstractController
{
    #[Route('/property/{menu}/{id}-{subMenu}', name: 'app_property')]
    public function index(PropertyRepository $property, $id, $subMenu, EntityManagerInterface $em, PaginatorInterface $paginator, Request $request): Response
    {
        $query = $property->FindPropertyByMenu($subMenu, $id);

        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            9 /*limit per page*/
        );
    

        return $this->render('property/index.html.twig', [
            'properties' => $pagination,
        ]);
    }
} 
