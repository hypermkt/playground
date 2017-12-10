<?php

require_once './vendor/autoload.php';

use Pux\Executor;

class HogeController
{
    public function index()
    {
        return 'トップページです';
    }

    public function profile($name)
    {
        return $name . 'のプロフィールページです';
    }

    public function old_url()
    {
        header('HTTP/1.1 301 Moved Permanently');
        header('Location: /new_url');
    }

    public function new_url()
    {
        return '新しいURLです';
    }
}

$mux = new Pux\Mux();
$mux->get('/', ['HogeController', 'index']);
$mux->get('/profile/@:name', ['HogeController', 'profile'], [
    'require' => ['name' => '\w+']
]);

$uri = $_SERVER['REQUEST_URI'] ?? [];
$route = $mux->dispatch($uri);

// 同じ悩みの人: https://github.com/c9s/Pux/issues/101
if (is_null($route)) {
    header('HTTP/1.0 404 Not Found');
    echo 'Not Foundです';
} else {
    echo Executor::execute($route);
}


