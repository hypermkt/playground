<?php

require_once './vendor/autoload.php';

$loop = React\EventLoop\Factory::create();

$factory = new React\Dns\Resolver\Factory();
$dns = $factory->create('8.8.8.8', $loop);
$dns->resolve('anikore.jp')->then(function ($ip) {
    echo "Host: $ip\n";
});

$loop->run();
