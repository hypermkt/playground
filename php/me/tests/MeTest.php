<?php

require_once './Me.php';

class MeTest extends PHPUnit_Framework_TestCase
{
    protected $me;

    public function setUp()
    {
        $this->me = new Me();
    }

    public function testNickname()
    {
        $this->assertEquals('バーチー', $this->me->nickname());
    }

    public function testCompany()
    {
        $this->assertEquals('GMO ペパボ', $this->me->company());
    }

    public function testJob()
    {
        $this->assertEquals('サーバーサイドエンジニア', $this->me->job());
    }
}
