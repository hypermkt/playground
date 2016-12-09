<?php

// ファイルアップロード
if(isset($_FILES['file']['tmp_name']) && is_uploaded_file($_FILES['file']['tmp_name'])){
  $fileName = uniqid() . '.jpg';
  move_uploaded_file($_FILES['file']['tmp_name'], './upload_images/' . $fileName);
}

?>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
</head>
<body>
  <div id="app" class="container">

    <h1>Mini-Instagram</h1>
    <h2>画像アップロード</h2>
    <form action="./index.php" method="POST" enctype="multipart/form-data">
      <input type="file" name="file">
      <input type="submit" value="ファイルをアップロードする">
    </form>

    <h2>画像一覧</h2>

    <?php
    foreach (glob("upload_images/*.jpg") as $filename) {
      echo "<img src='{$filename}' width='100'><br />";
    }
    ?>
</div>
</body>
</html>
