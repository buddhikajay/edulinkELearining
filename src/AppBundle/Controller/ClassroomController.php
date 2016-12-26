<?php
/**
 * Created by PhpStorm.
 * User: aseladarshan
 * Date: 8/15/16
 * Time: 6:19 PM
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class ClassroomController extends Controller
{
    /**
     * @Route("/classroom/student", name="student_classroom")
     */
    public function getStudentClassroomAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('@App/classroom/studentClassroom.html.twig');
    }

    /**
     * @Route("/classroom/teacher/video", name="teacher_video")
     */
    public function getTeacherVideoAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('@App/classroom/teacherVideo.html.twig');
    }
    /**
     * @Route("/classroom/teacher/whiteboard", name="teacher_whiteboard")
     */
    public function getTeacherWhiteboardAction(Request $request)
    {

        return $this->render('@App/classroom/teacherWhiteboard.html.twig');
    }
    /**
     * @Route("/classroom/teacher/", name="teacher_classroom")
     */
    public function getTeacherClassroomAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('@App/classroom/teacherClassroom.html.twig');
    }
    /**
     * @Route("/classroom/student/personal", name="student_personal_classroom")
     */
    public function getStudentPersonalClassroomAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('@App/classroom/studentPersonalClassroom.html.twig');
    }
    /**
     * @Route("/classroom/load", name="load_classroom")
     */
    public function loadClassroomAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('@App/classroom/classLoad.html.twig');
    }
}