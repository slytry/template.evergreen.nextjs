FROM node:16-alpine

ARG BUILDER="$GITLAB_USER_LOGIN <$GITLAB_USER_EMAIL>"
ARG BRANCH=$CI_COMMIT_REF_NAME
ARG COMMIT=$CI_COMMIT_SHORT_SHA

LABEL Description="Vertical next.js container" \
      Builder="$BUILDER" \
      Branch=$BRANCH \
      Commit=$COMMIT

RUN apk add curl

COPY --chown=node ./build /app

WORKDIR "/app"

HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["npm", "run", "start"]
