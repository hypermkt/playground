<?php

require_once 'ItemDataContext.php';
require_once 'ReadFixedLengthDataStrategy.php';
require_once 'ReadTabSeparatedDataStrategy.php';

$tabStrategy = new ReadTabSeparatedDataStrategy('tab.txt');
$c1 = new ItemDataContext($tabStrategy);
$c1->getItemData();

$fixedDataStrategy = new ReadFixedLengthDataStrategy('fixed_data.txt');
$c2 = new ItemDataContext($fixedDataStrategy);
$c2->getItemData();
