<?php

// ディレクトリパスを固定にする
define('DIR_PATH', '/var/www/app/directory-traversal/');

// パスの最後にある名前の部分を返す
$file = basename($_GET['file']);

$contents = file_get_contents(DIR_PATH . $file);
?>
<html>
<head>
<body>
<?= $contents ?>
</body>
</html>
