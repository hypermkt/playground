<?php
if (!empty($_POST['dir_name'])) {
    system("mkdir -p " . $_POST['dir_name']);
}
?>
<html>
<body>
<h1>ディレクトリ作成くん</h1>
<form action="index.php" method="post">
  <input type="text" name="dir_name" size="100" value="<?= $_POST['dir_name'] ?>" />
  <input type="submit" value="送信">
</form>
</body>
</html>
