<?php

// ディレクトリパスを固定にする
define('DIR_PATH', '/var/www/app/directory-traversal/');

// パスの最後にある名前の部分を返す
$file = basename($_GET['file']);

// 英数字に限定する
if (preg_match('/^[a-zA-Z0-9]+$/', $file) !== 1) {
  die('invalid file name');
}

$contents = file_get_contents(DIR_PATH . $file . '.txt');
?>
<html>
<head>
<body>
<?= $contents ?>
</body>
</html>
