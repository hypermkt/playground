<?php
$dsn = 'mysql:dbname=sample;host=database';
$username = 'sample';
$password = 'sample';

$db = new PDO($dsn, $username, $password);
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $login_id = $_POST['login_id'];
    $password = $_POST['password'];
    $sql = "
    SELECT
        *
    FROM
        users
    WHERE
        login_id = ?
        and
        password =  ?
        ;
    ";
    $prepare = $db->prepare($sql);
    $prepare->execute([$login_id, $password]);
    $row = $prepare->fetch(PDO::FETCH_ASSOC);
    if ($row) {
      $_SESSION['login_id'] = $row['login_id'];
    }
}

?>
<html>
<body>
<?php if ($_SESSION['login_id']): ?>
<p>ログイン中: <?= $_SESSION['login_id']?></p>
<?php endif; ?>
<form method="post" action="login.php">
  <p>ログインID：<input type="text" name="login_id"></p>
  <p>パスワード：<input type="password" name="password"></p>
  <input type="submit" value="送信">
</form>
</body>
</html>
