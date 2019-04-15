## Setup

```sh
$ bundle install --path vendor/bundle
$ bundle exec librarian-puppet install
$ docker-compose up -d
$ docker-compose exec web bash
```

## Execute

```sh
$ puppet apply site.pp
```
