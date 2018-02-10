FROM php:7.2-apache

RUN apt-get update && apt-get -qq install -y --no-install-recommends vim tree
RUN docker-php-ext-install pdo_mysql
