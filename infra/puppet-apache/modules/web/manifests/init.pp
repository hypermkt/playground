class web {
  class { '::apache':
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
  }
}
