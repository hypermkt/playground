FROM php:7.3-apache

RUN apt-get -qq update \
      && apt-get -qq install -y --no-install-recommends curl unzip zlib1g-dev git

RUN docker-php-ext-install mbstring pdo_mysql

ENV APACHE_DOCUMENT_ROOT /var/www/app
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

WORKDIR /var/www/app
