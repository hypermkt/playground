<?php

require_once 'Interface.php';

class DataSource_FileDataSource implements DataSource_Interface
{
    private $_sourceName;
    private $_handler;

    public function __construct($source_name)
    {
        $this->_sourceName = $source_name;
    }

    public function open()
    {
        if (!is_readable($this->_sourceName)) {
            throw new Exception('No such data source');
        }
        $this->_handler = fopen($this->_sourceName, 'r');
        if (!$this->_handler) {
            throw new Exception('Failed opening data source');
        }
    }

    public function read()
    {
        $buffer = array();
        while (!feof($this->_handler)) {
            $buffer[] = fgets($this->_handler);
        }
        return implode($buffer);
    }

    public function close()
    {
        if (!is_null($this->_handler)) {
            fclose($this->_handler);
        }
    }
}

