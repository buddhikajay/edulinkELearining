#!/usr/bin/env bash
chmod 777 -R /sites/edulink/edulinkELearning/web/

composer update && \
php bin/console assetic:dump --env=prod --no-debug && \
php bin/console doctrine:schema:update  --force && \
php bin/console cache:clear --env=prod --no-debug && \
chmod -R 777 var/cache var/logs var/sessions && \
php bin/console assets:install