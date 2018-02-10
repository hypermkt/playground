<?php

try {
  $pdo = new PDO('mysql:host=database;dbname=development;charset=utf8','development','password',
    array(PDO::ATTR_EMULATE_PREPARES => false));
} catch (PDOException $e) {
  exit('データベース接続失敗。'.$e->getMessage());
}
