<?php

require_once './vendor/autoload.php';

$tpl = new HTML_Template_Sigma("./");

// テンプレートファイル内のfugaが重複しているためテンプレートファイル読み込みの時点でPear_Errorが発生し正常に読み込みが完了していない
// 本来であればテンプレートファイルを読み込んだ結果、プレースホルダー対象の変数がインスタンス変数に入るが、それがNULLなので下記Warningが発生している
// Warning: Invalid argument supplied for foreach() in /Users/hypermkt/src/github.com/hypermkt/hypermkt/php/html_template_it/vendor/pear-pear.php.net/HTML_Template_Sigma/HTML/Template/Sigma.php on line 615
$tpl->loadTemplatefile("duplicate_declaration.html", true, true);


$tpl->show();
