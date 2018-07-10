<?php

require_once './vendor/autoload.php';

$feed = new SimplePie();


$url = 'http://b.hatena.ne.jp/entrylist/it.rss';
//$url = 'https://aws.amazon.com/jp/blogs/news/feed/';

$feed->set_feed_url($url);
$feed->handle_content_type();
$feed->init();

foreach ($feed->get_items() as $item) {
    echo $item->get_title().PHP_EOL;
    echo $item->get_link().PHP_EOL;
}

