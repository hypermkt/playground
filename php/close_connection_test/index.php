<?php

// Define path to application directory
defined('APPLICATION_PATH')
|| define('APPLICATION_PATH', realpath(dirname(__FILE__)));

set_include_path(realpath(dirname(__FILE__) . '/vendor/koala-framework/zendframework1/library'));
require_once 'Zend/Loader/Autoloader.php';
$autoloader = Zend_Loader_Autoloader::getInstance();

$resourceLoader = new Zend_Loader_Autoloader_Resource(array(
  'namespace' => '',
  'basePath' => APPLICATION_PATH . '/application'
));
$resourceLoader->addResourceTypes(array(
    'model' => array(
      'path' => 'models',
      'namespace' => 'Model',
    )
  ));

$user = new Model_Dao_User();
$comment = new Model_Dao_Comment();

$comment->fetchAll();
$user->fetchAll();

var_dump($comment->getAdapter()->isConnected());
var_dump($user->getAdapter()->isConnected());

$comment->getAdapter()->closeConnection();

var_dump($comment->getAdapter()->isConnected());
var_dump($user->getAdapter()->isConnected());
