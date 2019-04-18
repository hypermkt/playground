class web {
  class { '::apache':
    # service_restart => 'systemctl reload httpd',
  }

  include ::apache::mod::php

  package{[
      'php',
    ]:
      ensure => installed,
  }

  file {
    '/etc/php.ini':
      ensure  => file,
      source => 'puppet:///modules/web/php.ini',
      require => Package['php'],
      notify  => Class['::apache::service']
  }
}
