<?php

abstract class ReadItemDataStrategy
{
    private $_filename;

    public function __construct($filename)
    {
        $this->_filename = $filename;
    }

    public function getData()
    {
        if (!is_readable($this->getFileName())) {
            throw new Exception('file [ ' . $this->getFileName() . ' ] is not readable.');
        }

        return $this->readData($this->getFileName());
    }

    public function getFileName()
    {
        return $this->_filename;
    }

    protected abstract function readData($filename);
}
