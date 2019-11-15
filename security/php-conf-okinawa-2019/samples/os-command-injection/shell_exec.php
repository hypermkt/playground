<?php

if (!empty($_POST['cmd'])) {
    $result = shell_exec($_POST['cmd']);
    var_dump($result);
}

?>


<html>
<head>
<body>
<h1>OS Command Injection Sample</h1>
<form action="./shell_exec.php" method="post">
  <input type="text" name="cmd" size="100" value="<?= $_POST['cmd'] ?>" />
  <input type="submit" value="送信">
</form>
</body>
</html>
