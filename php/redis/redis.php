<?php

$redis = new Redis();
$redis->connect('redis', 6379);

$redis->delete(['key']);

// 文字列型

//$redis->set('key', 'value');
//var_dump($redis->keys('*'));
//var_dump($redis->keys('user*'));
//var_dump($redis->get('key'));


// ハッシュ型

//$redis->hSet('key', 'hashKey', 'value');
//var_dump($redis->hGet('key', 'hashKey'));
//var_dump($redis->hGetAll('key'));

// セット型

//$redis->sAdd('key1' , 'value1', 'value2');
//var_dump($redis->sMembers('key1'));
//var_dump($redis->sCard('key1'));


