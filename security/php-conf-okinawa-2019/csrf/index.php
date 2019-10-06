<?php

ini_set('display_errors', "On");
ini_set('error_reporting', E_ALL);

$dsn = 'mysql:dbname=sample;host=database';
$username = 'sample';
$password = 'sample';

$db = new PDO($dsn, $username, $password);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($_POST['mode']) {
        case 'add':
            createBook($db, $_POST['title']);
          break;
        case 'delete':
            deleteBook($db, $_POST['id']);
            break;

    }
}
$books = getBooks($db);

function createBook($db, $title)
{
    $sql = "insert into books (title) values ('{$title}');";
    $prepare = $db->prepare($sql);
    $prepare->execute();
}

function deleteBook($db, $id)
{
    $sql = "delete from books where id = ?;";
    $prepare = $db->prepare($sql);
    $prepare->bindParam(1, $id);
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
  <input type="hidden" name="mode" value="add">
  <input type="submit" value="送信">
</form>

<table>
  <tr>
    <th>id</th>
    <th>title</th>
    <th>action</th>
  </tr>
    <?php for($i = 0; $i < count($books); $i++): ?>
      <tr>
        <td><?= $books[$i]['id']?></td>
        <td><?= $books[$i]['title']?></td>
        <td>
          <form action="./index.php" method="post">
            <input type="hidden" name="id" value="<?=$books[$i]['id']?>">
            <input type="hidden" name="mode" value="delete">
            <input type="submit" value="削除">
          </form>
        </td>
      </tr>
    <?php endfor;?>

</table>
</body>
</html>
