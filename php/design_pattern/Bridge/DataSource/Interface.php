<?php

interface DataSource_Interface
{
    public function open();
    public function read();
    public function close();
}
