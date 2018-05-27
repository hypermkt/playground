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
# Start Puppet server
$ docker-compose exec pmaster systemctl start puppetserver

# Execute puppet
$ docker-compose exec web001 puppet agent --test --server pmaster.local --environment development --noop
```
