<?php
/**
 * Created by PhpStorm.
 * User: buddhikajay
 * Date: 9/6/16
 * Time: 11:29 PM
 */

namespace AppBundle\Controller;

use JavierEguiluz\Bundle\EasyAdminBundle\Controller\AdminController as BaseAdminController;

class AdminController extends BaseAdminController
{
//    public function createNewUserEntity()
//    {
//        return $this->get('fos_user.user_manager')->createUser();
//    }
//
//    public function prePersistUserEntity($user)
//    {
//        $this->get('fos_user.user_manager')->updateUser($user, false);
//    }
//
//    public function preUpdateUserEntity($user)
//    {
//        $this->get('fos_user.user_manager')->updateUser($user, false);
//    }

//    public function createNewStudentEntity()
//    {
//        return $this->get('pugx_user_manager')->createUser();
//    }
//
    public function prePersistStudentEntity($user)
    {
        $logger = $this->get('logger');
        $logger->debug('In AdminController');
        $this->get('pugx_user_manager')->updateUser($user, false);
        $this->sendInvitation($user);
    }
//
    public function preUpdateStudentEntity($user)
    {
        $logger = $this->get('logger');
        $logger->debug('In AdminController');
        $this->get('pugx_user_manager')->updateUser($user, false);
    }


    public function createNewTeacherEntity()
    {
        $logger = $this->get('logger');
        $logger->debug('In AdminController');
        return $this->get('pugx_user_manager')->createUser();
    }

    public function prePersistTeacherEntity($user)
    {
        $logger = $this->get('logger');
        $logger->debug('In AdminController');
        $this->get('pugx_user_manager')->updateUser($user, false);
    }

    private function sendInvitation($user){

        if (null === $user->getConfirmationToken()) {
            /** @var $tokenGenerator \FOS\UserBundle\Util\TokenGeneratorInterface */
            $tokenGenerator = $this->get('fos_user.util.token_generator');
            $user->setConfirmationToken($tokenGenerator->generateToken());
        }
        $this->get('fos_user.mailer')->sendResettingEmailMessage($user);
        $user->setPasswordRequestedAt(new \DateTime());
        $this->get('fos_user.user_manager')->updateUser($user);

    }
}