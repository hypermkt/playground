<?php

session_start();

$_SESSION['hoge'] = 'fuga';

var_dump($_SESSION['hoge']);
