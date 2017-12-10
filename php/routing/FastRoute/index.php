<?php

require_once './vendor/autoload.php';

$dispatcher= FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $router) {
    $router->addRoute('GET', '/', 'index');
    $router->addRoute('GET', '/profile/@{name:\w+}', 'profile');
    $router->addRoute('GET', '/old_url', 'old_url');
    $router->addRoute('GET', '/new_url', 'new_url');
});

// HTTPメソッドとUILを取得する
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);
switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        header('HTTP/1.0 404 Not Found');
        echo not_found();
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        header('HTTP/1.0 405 Method Not Allowed');
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
        echo $handler($vars);
        break;
}

function index()
{
    return 'トップページです';
}

function profile($vars)
{
    return $vars['name'] . 'のプロフィールページです';
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
