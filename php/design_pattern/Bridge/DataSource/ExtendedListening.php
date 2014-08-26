<?php

require_once 'Listening.php';

class DataSource_ExtendedListening extends DataSource_Listening
{

    public function __construct(DataSource_Interface $data_source)
    {
        parent::__construct($data_source);
    }

    public function readWithEncode()
    {
        return htmlspecialchars($this->read(), ENT_QUOTES, mb_internal_encoding());
    }
}

