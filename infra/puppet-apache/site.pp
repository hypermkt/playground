include apache

# class { '::apache':
# }
#
# include ::apache::mod::php
#
# package{[
#     'php',
#   ]:
#     ensure => installed,
# }

# file {
#   '/etc/php.ini':
#     ensure  => file,
#     source => 'puppet:///modules/php.ini',
#     require => Package['php'],
# }