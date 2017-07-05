<?php

class Person
{
    protected $age;
    protected $name;

    /**
     * Person constructor.
     * @param $age
     * @param $name
     */
    public function __construct($age, $name)
    {
        $this->age = $age;
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    public function isYoung()
    {
        return $this->age < 18;
    }


}