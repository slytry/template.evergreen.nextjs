FROM nginx:1.22-alpine

ARG BUILDER="$GITLAB_USER_LOGIN <$GITLAB_USER_EMAIL>"
ARG BRANCH=$CI_COMMIT_REF_NAME
ARG COMMIT=$CI_COMMIT_SHORT_SHA

LABEL Description="Vertical nginx container" \
      Builder="$BUILDER" \
      Branch=$BRANCH \
      Commit=$COMMIT

RUN apk --no-cache add shadow \
    && usermod -u 82 nginx \
    && addgroup nginx www-data \
    && mkdir -p /app/.next \
    && mkdir -p /app/public \
    && mkdir -p /app/assets \
    && mkdir -p /app/fonts \
    && chown -R nginx. /app

COPY ./ci/nginx/etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./ci/nginx/etc/nginx/conf.d/default.conf.tpl /etc/nginx/conf.d/default.conf.tpl
COPY ./ci/nginx/nginx-entrypoint.sh /nginx-entrypoint.sh
COPY --chown=nginx ./build/.next /app/.next
COPY --chown=nginx ./build/public /app/public

RUN chmod +x /nginx-entrypoint.sh
ENTRYPOINT ["/nginx-entrypoint.sh"]

WORKDIR "/app"

HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f http://localhost/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
