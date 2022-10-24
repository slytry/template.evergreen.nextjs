#!/usr/bin/env sh
set -e

cp /etc/nginx/conf.d/default.conf.tpl /etc/nginx/conf.d/default.conf;

REMOTE_PORT="${REMOTE_PORT:-3010}";
REMOTE_HOST="${REMOTE_HOST:-app}";
REMOTE_UPSTREAM_PARAMS="${REMOTE_UPSTREAM_PARAMS:-max_fails=3 fail_timeout=30s}";
VIRTUAL_HOST="${VIRTUAL_HOST:-_}";
ADDITIONAL_REMOTE_HOSTS="${ADDITIONAL_REMOTE_HOSTS:-# Additional NODE hosts not passed}";

sed -i "s#%REMOTE_PORT%#${REMOTE_PORT}#g" /etc/nginx/conf.d/default.conf;
sed -i "s#%REMOTE_HOST%#${REMOTE_HOST}#g" /etc/nginx/conf.d/default.conf;
sed -i "s#%REMOTE_UPSTREAM_PARAMS%#${REMOTE_UPSTREAM_PARAMS}#g" /etc/nginx/conf.d/default.conf;
sed -i "s#%ROOT_DIR%#${ROOT_DIR}#g" /etc/nginx/conf.d/default.conf;
sed -i "s#%VIRTUAL_HOST%#${VIRTUAL_HOST}#g" /etc/nginx/conf.d/default.conf;
sed -i "s^%ADDITIONAL_REMOTE_HOSTS%^${ADDITIONAL_REMOTE_HOSTS}^g" /etc/nginx/conf.d/default.conf;

exec "$@";
