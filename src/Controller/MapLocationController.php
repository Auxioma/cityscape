<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MapLocationController extends AbstractController
{
    #[Route('/map/location', name: 'app_map_location')]
    public function index(): Response
    {
        return $this->render('map_location/index.html.twig', [
            'controller_name' => 'MapLocationController',
        ]);
    }
}
