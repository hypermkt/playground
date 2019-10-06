<?php

// $_SERVER['HTTP_REFERER'] で取得できた値とする
$referer = 'https://example.jpn/orders'; 

if (preg_match('#^https?://example.jp#i', $referer) !== 1) {
  // マッチしながったら不正サイトからのアクセスとして拒否する
  echo 'Illegal access'; exit();
}

echo 'do something';
