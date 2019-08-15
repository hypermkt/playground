<?php
$dsn = 'mysql:dbname=sample;host=database';
$username = 'sample';
$password = 'sample';

try {
    $db = new PDO($dsn, $username, $password);
    $books = getBooks($db, $_GET['title']);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

function getBooks($db, $title = null)
{
    $sql = "select * from books";
    if (!empty($title)) {
        $sql .= " where title = '" . $title . "'";
    }
    $sql .= ';';
    echo $sql;
    $prepare = $db->prepare($sql);
    $prepare->execute();
    $rows = $prepare->fetchAll(PDO::FETCH_ASSOC);

    return $rows;
}

?>
<html>
<body>

<form method="get" action="index2.php">
  <input type="text" name="title">
  <input type="submit" value="検索する">
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
