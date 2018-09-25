FROM node:10.11.0-alpine

WORKDIR /srv

COPY packages/server/package.json ./
RUN yarn install
COPY packages/server/ ./

ENV NODE_ENV=production
EXPOSE 3000

CMD node src/index.js
