<?php

require_once './vendor/autoload.php';

$url = 'https://aws.amazon.com/jp/blogs/news/feed/';
//$url = 'http://b.hatena.ne.jp/entrylist/it.rss';

$rss = Feed::loadRss($url);

foreach ($rss->item as $item) {
////    echo 'Title: ', $item->title;
//    echo 'Link: ', $item->link;
//    echo 'Timestamp: ', $item->timestamp;
//    echo 'Description ', $item->description;
    echo 'HTML encoded content: ', $item->{'content:encoded'};
}
