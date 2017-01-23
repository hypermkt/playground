<?php

require_once './vendor/autoload.php';
require_once './HTML/Template/IT.php';

$data = array
  (
    "0" => array("cvs_username" => "pajoye", 
    "realname" => "Pierre-Alain Joye"),
    "1" => array("cvs_username" => "dsp",
    "realname" => "David Soria Parra")
  );

$tpl = new HTML_Template_IT("./");

// テンプレートファイルを読み込む 1: ロードするファイル
$tpl->loadTemplatefile("test.html", true, true);

// カレントブロックを指定します。parseCurrentBlock() でこれを使用します。
$tpl->setCurrentBlock("row");
foreach($data as $name) {
  // データを内側のブロックに代入します。

  $tpl->setVariable("CVS_USERNAME", $name["cvs_username"]);
  $tpl->setVariable("REALNAME", $name["realname"]);

  // カレントブロックをパースします。
    $tpl->parseCurrentBlock();
}

//$tpl->setCurrentBlock("header");
//$tpl->setVariable('name', 'hoge');

// show() は __global__ ブロックをパースし、
// 結果を表示します。
$tpl->show();
