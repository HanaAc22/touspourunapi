<?php

namespace App\Controller;

use App\Dto\UserLoginDto;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(Request $request, EntityManagerInterface $entityManager): Response
    {
        $email = $request->request->get('email');
        $password = $request->request->get('password');

        // Query the database for the user with the given email
        $user = $entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        // Check if the user exists and the password is correct
        if (!$user || !password_verify($password, $user->getPassword())) {
            return new Response('Invalid email or password', 401);
        }

        // Set the user in the session
        $request->getSession()->set('user', $user);

        return new Response('Authenticated', 200);
    }
}

