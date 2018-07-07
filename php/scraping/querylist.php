<?php

require_once './vendor/autoload.php';

use QL\QueryList;

$url = 'http://b.hatena.ne.jp/hotentry/it';

$client = new \GuzzleHttp\Client();
$response = $client->request('GET', $url);

$ql = QueryList::getInstance();
$ql->html($response->getBody());

$ql->find('div.entrylist-contents-main')->map(function($content) {
    $title = $content->find('h3.entrylist-contents-title')->text();
    var_dump($title);
    $link = $content->find('h3.entrylist-contents-title a')->href;
    var_dump($link);
});

