<?php

require_once './vendor/autoload.php';

try {
    $r = new Net_DNS2_Resolver();
    $response = $r->query('php.net');
    var_dump($response);
} catch(Net_DNS2_Exception $e) {
    echo "::query() failed: ", $e->getMessage(), "\n";
}

