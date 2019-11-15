<?php

$email = 'hypermkt@gmail.com';

$message_file = '/var/www/app/os-command-injection/sample.txt';
$cmd = 'mail -s test ' . $email . '< ' . $message_file;
var_dump($cmd);

$rtn = exec($cmd);

var_dump($rtn);
