<?php

require_once 'ReadItemDataStrategy.php';

class ReadFixedLengthDataStrategy extends ReadItemDataStrategy
{
    protected function readData($filename)
    {
        echo "reading fixed length data\n";
    }
}
