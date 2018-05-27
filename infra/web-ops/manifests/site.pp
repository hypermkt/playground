# https://forge.puppet.com/puppet/nginx
include ::nginx

nginx::resource::server { 'set www root':
  www_root => '/var/www/html',
  require => [Package['nginx'], Class['Nginx::Config']],
}

$dirs = ['/var/www', '/var/www/html']

file { $dirs:
  ensure => directory,
}

file { '/var/www/html/index.html':
  content => '<h1>Hello from Docker Container</h1>',
}

