<?php

$person = new Person(18, "hypermkt");
echo $person->getName();
echo $person->isYoung();

$sql = "SELECT * FROM EMP ORDER BY EMP_NO;";

$html = "";

function dumpPerson($person) {
    echo $person->getName();
}
