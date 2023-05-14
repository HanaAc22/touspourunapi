<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactAdminController extends AbstractController
{
    #[Route('/admin', name: 'app_react_admin')]
    public function index(): Response
    {
        return $this->render('react_admin/index.html.twig', [
            'controller_name' => 'ReactAdminController',
        ]);
    }
}
