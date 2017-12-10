<?php

require_once './vendor/autoload.php';

$klein = new \Klein\Klein();

$klein->respond('GET', '/', function() {
    return index();
});

$klein->respond('GET', '/profile/@[:name]', function($request) {
    return profile($request);
});

$klein->respond('GET', '/old_url', function($request, \Klein\Response $response) {
    // https://github.com/klein/klein.php#api
    $response->redirect('/new_url', 301);

});

$klein->respond('GET', '/new_url', function() {
    return new_url();
});

// refs: https://github.com/klein/klein.php/wiki/Handling-404's
$klein->onHttpError(function ($code, $router) {
    switch ($code) {
        case 404:
            $router->response()->body(not_found());
            break;
        default:
            $router->response()->body(
                'Oh no, a bad error happened that caused a '. $code
            );
    }
});

$klein->dispatch();

function index()
{
    return 'トップページです';
}

function profile(Klein\Request $request)
{
    return $request->name . 'のプロフィールページです';
}

function old_url()
{
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: /new_url');
    exit;
}

function new_url()
{
    return '新しいURLです';
}

function not_found()
{
    return 'Not Foundです';
}
