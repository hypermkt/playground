include ::nginx

nginx::resource::server { 'set www root':
  www_root => '/var/www/html',
  ensure => present, # 常に起動している状態にする
  require  => [Package['nginx'], Class['Nginx::Config']],
}

$dirs = ['/var/www', '/var/www/html']

file { $dirs:
  ensure => directory,
}

file { '/var/www/html/index.html':
  content => 'hello world',
}
