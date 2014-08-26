<?php

class ItemDataContext
{
    protected $_strategy;

    public function __construct(ReadItemDataStrategy $strategy)
    {
        $this->_strategy = $strategy;
    }

    public function getItemData()
    {
        return $this->_strategy->getData();
    }
}
