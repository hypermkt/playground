<?php

class Users extends Zend_Db_Table_Abstract
{
  public $_name = 'users';
  public $_primary = 'id';


}

class Comments extends Zend_Db_Table_Abstract
{
  public $_name = 'comments';
  public $_primary = 'id';
}