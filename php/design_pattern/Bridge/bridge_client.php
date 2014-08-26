<?php

require_once 'DataSource/Listening.php';
require_once 'DataSource/ExtendedListening.php';
require_once 'DataSource/FileDataSource.php';

$list1 = new DataSource_Listening(new DataSource_FileDataSource('data.txt'));
$list2 = new DataSource_ExtendedListening(new DataSource_FileDataSource('data.txt'));

$list1->open();
$list2->open();

echo $list1->read();
echo $list2->read();

$list1->close();
$list2->close();
