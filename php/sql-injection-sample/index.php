<?php
$dsn = 'mysql:dbname=sampleapp_development;host=database';
$username = 'sampleapp';
$password = 'sampleapp_development';

try {
    $db = new PDO($dsn, $username, $password);
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        createBook($db, $_POST['title']);
    }
    $books = getBooks($db);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

function createBook($db, $title)
{
    // SQLインジェクションの資料のためわざとこうしている
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
