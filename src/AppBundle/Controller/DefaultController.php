<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
//        return $this->render('default/index.html.twig', [
//            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
//        ]);
        return $this->redirect('/login', 301);
    }
    /**
     * @Route("/student", name="student_homepage")
     */
    public function studentHomepageAction(Request $request)
    {
        return $this->render('@App/homepage/student.html.twig');
    }
    /**
     * @Route("/teacher", name="teacher_homepage")
     */
    public function teacherHomepageAction(Request $request)
    {
        return $this->render('@App/homepage/teacher.html.twig');
    }
    /**
     * @Route("/schedule", name="schedule")
     */
    public function scheduleAction(Request $request)
    {
        return $this->render('@App/schedule/schedule.html.twig');
    }
    /**
     * @Route("/testVideoPlayer/{role}", name="test_video_player")
     */
    public function testPlayerAction($role)
    {
        return $this->render('@App/classroom/videoPlayer.html.twig',array("role"=>$role));
    }
}
