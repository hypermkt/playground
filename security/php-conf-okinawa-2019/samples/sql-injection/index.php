<?php

ini_set('display_errors', "On");
ini_set('error_reporting', E_ALL);

$dsn = 'mysql:dbname=sample;host=database';
$username = 'sample';
$password = 'sample';

$db = new PDO($dsn, $username, $password);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    createBook($db, $_POST['title']);
}
$books = getBooks($db);

function createBook($db, $title)
{
    $sql = "insert into books (title) values ('{$title}');";
    $prepare = $db->prepare($sql);
    $prepare->execute();
}

function getBooks($db)
{
    $sql = 'select * from books;';
    $prepare = $db->prepare($sql);
    $prepare->execute();
    $rows = $prepare->fetchAll(PDO::FETCH_ASSOC);

    return $rows;
}

?>
<html>
<body>

<form method="post" action="index.php">
  <input type="text" name="title">
  <input type="hidden" name="mode" value="bad">
  <input type="submit" value="送信">
</form>

<table>
  <tr>
    <th>id</th>
    <th>title</th>
  </tr>
    <?php for($i = 0; $i < count($books); $i++): ?>
      <tr>
        <td><?= $books[$i]['id']?></td>
        <td><?= $books[$i]['title']?></td>
      </tr>
    <?php endfor;?>

</table>
</body>
</html>
