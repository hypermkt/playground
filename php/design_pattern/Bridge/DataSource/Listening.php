<?php

require_once 'Interface.php';

class DataSource_Listening implements DataSource_Interface
{
    private $_dataSource;

    public function __construct(DataSource_Interface $data_source)
    {
        $this->_dataSource = $data_source;
    }

    public function open()
    {
        return $this->_dataSource->open();
    }

    public function read()
    {
        return $this->_dataSource->read();
    }

    public function close()
    {
        return $this->_dataSource->close();
    }
}
