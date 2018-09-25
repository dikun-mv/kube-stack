FROM node:10.11.0-alpine as builder

WORKDIR /srv

COPY packages/client/package.json ./
RUN yarn install
COPY packages/client/ ./
RUN yarn build

FROM nginx:1.15.3-alpine

COPY --from=builder /srv/dist/ /var/www/
COPY packages/client/nginx.conf /etc/nginx/conf.d/default.conf
