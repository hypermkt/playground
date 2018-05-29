FROM centos:7

RUN rpm -Uvh https://yum.puppetlabs.com/puppet5/puppet5-release-el-7.noarch.rpm \
  && yum install -y puppet-agent \
  && yum install -y ruby \
  && gem install bundler -N

ADD . /etc/puppet

WORKDIR /etc/puppet

RUN bundle install --path vendor/bundle
RUN bundle exec librarian-puppet install --path vendor/modules

ENV PATH /opt/puppetlabs/bin:$PATH
