include ::nginx

nginx::resource::server { 'hypermkt.local':
  www_root => '/var/www/hypermkt/public',
  ensure => present, # 常に起動している状態にする
  require  => [Package['nginx'], Class['Nginx::Config']],
}

$dirs = ['/var/www', '/var/www/hypermkt/', '/var/www/hypermkt/public']

file { $dirs:
  ensure => directory,
}

file { '/var/www/hypermkt/public/index.html':
  content => 'hello world',
}

include epel
include remi
