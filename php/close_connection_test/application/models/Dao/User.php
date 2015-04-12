<?php

require_once 'define.php';

class Model_Dao_User
{
  protected $_table;

  public function __construct()
  {
    $config = new Zend_Config_Ini('config/system.ini', 'production');
    $adapter = Zend_Db::factory('pdo_mysql', $config->db->toarray());
    $adapter->setFetchMode(Zend_Db::FETCH_ASSOC);
    $this->_table = new Users($adapter);
  }

  public function fetchAll()
  {
    $select = $this->_table->select();
    $rows = $this->_table->getAdapter()->fetchAll($select);
    return $rows;
  }

  public function getAdapter()
  {
    return $this->_table->getAdapter();
  }
}