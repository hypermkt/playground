# web-ops

## Setup

```
$ docker build -t puppet:standalone .
$ docker run -it puppet:standalone
$ bundle install --path vendor/bundle
$ bundle exec librarian-puppet install --path vendor/modules
```

## Run

```
$ docker-compose exec web001 puppet apply --modulepath modules /etc/puppet/manifests/site.pp
```
