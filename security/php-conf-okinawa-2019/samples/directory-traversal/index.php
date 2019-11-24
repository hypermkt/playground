<?php
$filepath = $_GET['p'];
$contents = file_get_contents($filepath);
?>
<html>
<head>
<body>
<?= $contents ?>
</body>
</html>
