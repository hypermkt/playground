# Setup apache by Puppet on Docker

## Setup

```sh
$ bundle install --path vendor/bundle
$ bundle exec librarian-puppet install install --path vendor/modules
$ docker-compose up -d
$ docker-compose exec web bash
```

## Execute

```sh
$ puppet apply site.pp --modulepath=vendor/modules:modules
```

## Reference
* [kentaro/puppet\-book](https://github.com/kentaro/puppet-book)