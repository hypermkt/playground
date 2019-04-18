FROM centos:7

RUN rpm -Uvh https://yum.puppet.com/puppet5/puppet5-release-el-7.noarch.rpm
RUN yum install -y -q puppet-agent

WORKDIR /etc/puppetlabs/code/environments/production

ADD hiera.yaml /etc/puppetlabs/puppet

CMD ["/usr/sbin/init"]
