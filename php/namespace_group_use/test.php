<?php

require_once './Hoge.php';
require_once './Fuga.php';

//use Sample\{Hoge,Fuga};

use Sample\Hoge;
use Sample\Fuga;

$a = new Hoge();
$a->show();


$a = new Fuga();
$a->show();