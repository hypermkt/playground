<?php
$filepath = $_GET['p'];
$contents = file_get_contents($filepath);
?>


<html>
<head>
<body>
<h1>Directory Traversal Sample</h1>
<?= $contents ?>
</body>
</html>
