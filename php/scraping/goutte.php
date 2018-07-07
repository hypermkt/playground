<?php

require_once './vendor/autoload.php';

use Goutte\Client;

$client = new Client();
$url = 'http://b.hatena.ne.jp/hotentry/it';
$crawler = $client->request('GET', $url);

$crawler->filter('div.entrylist-contents-main')->each(function ($node) {
    $title = trim($node->filter('h3.entrylist-contents-title')->text());
    var_dump($title);
    $link = trim($node->filter('h3.entrylist-contents-title a')->attr('href'));
    var_dump($link);
});
