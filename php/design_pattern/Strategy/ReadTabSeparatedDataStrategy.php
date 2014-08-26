<?php

require_once 'ReadItemDataStrategy.php';

class ReadTabSeparatedDataStrategy extends ReadItemDataStrategy
{
    protected function readData($filename)
    {
        echo "reading tab separated data\n";
    }
}
