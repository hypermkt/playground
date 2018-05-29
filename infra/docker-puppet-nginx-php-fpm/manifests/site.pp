include ::nginx

#nginx::resource::server { 'hypermkt.local':
#  www_root => '/var/www/hypermkt/public',
#  ensure => present, # 常に起動している状態にする
#  require  => [Package['nginx'], Class['Nginx::Config']],
#}

file { '/etc/nginx/conf.d/default.conf':
  ensure => present,
  owner => 'root',
  group => 'root',
  mode => '0644',
  content => template('nginx/default.conf'),
  require => Package['nginx'],
  notify => Service['nginx'],
}

$dirs = ['/var/www', '/var/www/hypermkt/', '/var/www/hypermkt/public']

file { $dirs:
  ensure => directory,
}

file { '/var/www/hypermkt/public/index.html':
  content => 'hello world',
}

include ::epel
include ::remi

$phpPakages = [
  'php-fpm',
]

package { $phpPakages:
  ensure => installed,
  install_options => '--enablerepo=remi-php72',
  require => Yumrepo['remi'],
}
