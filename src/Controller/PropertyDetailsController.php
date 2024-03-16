<?php

namespace App\Controller;

use App\Entity\Property;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PropertyDetailsController extends AbstractController
{
    #[Route('/property/detail/{slug}', name: 'app_property_details', priority: 1)]
    public function index(Property $property): Response
    {
        return $this->render('property_details/index.html.twig', [
            'property' => $property,
        ]);
    }
}
