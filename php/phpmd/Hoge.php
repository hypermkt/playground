<?php

class Hoge
{
    public $_publicUnused;
    protected $_protectedUnused;
    private $_privateUnused;

    public function pubicUnusedFunction()
    {
        $localUnused = 'Hello';
        $localUsed = 'World';
        echo $localUsed;
    }

    protected function protectedUnusedFunction($unused)
    {
    }

    private function privateUnusedFunction($used = 'howdy')
    {
        echo $used;
    }
}
