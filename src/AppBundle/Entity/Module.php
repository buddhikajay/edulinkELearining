<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Module
 *
 * @ORM\Table(name="module")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ModuleRepository")
 */
class Module
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="code", type="string")
     */
    private $code;

    /**
     * @ORM\ManyToOne(targetEntity="UserBundle\Entity\Teacher")
     * @ORM\JoinColumn(name="teacher_id", referencedColumnName="id")
     */
    private $teacher;
    /**
     * @var string
     * @ORM\Column(name="name", type="string")
     */
    private $name;

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }
    public function __toString()
    {
        return (string) $this->code;
    }


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set code
     *
     * @param string $code
     *
     * @return Module
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     *
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set teacher
     *
     * @param \UserBundle\Entity\Teacher $teacher
     *
     * @return Module
     */
    public function setTeacher(\UserBundle\Entity\Teacher $teacher = null)
    {
        $this->teacher = $teacher;

        return $this;
    }

    /**
     * Get teacher
     *
     * @return \UserBundle\Entity\Teacher
     */
    public function getTeacher()
    {
        return $this->teacher;
    }
}
