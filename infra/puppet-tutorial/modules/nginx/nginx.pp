yumrepo { 'nginx':
  descr    => 'nginx yum repository',
  baseurl  => 'http://nginx.org/packages/centos/6/$basearch/',
  enabled  => 1,
  gpgcheck => 0,
} 

package { 'nginx':
  ensure  => installed,
  require => Yumrepo['nginx'],
}

# 変数指定できる
$port = 80

file { '/etc/nginx/conf.d/my.conf':
  ensure => present,
  owner => 'root',
  group => 'root',
  mode => '0644',
  content => template('nginx/my.conf.erb'),
  require => Package['nginx'],
  notify => Service['nginx'],
}

$target = 'Puppet'

file { '/usr/share/nginx/html/index.html':
  ensure => present,
  owner => 'root',
  group => 'root',
  mode => '0644',
  content => template('nginx/index.html.erb'),
  require => Package['nginx'],
}

service { 'nginx':
  enable => true,
  ensure => running,
  hasrestart => true,
  require => File['/etc/nginx/conf.d/my.conf'],
}


