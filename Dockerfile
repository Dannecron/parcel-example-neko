FROM node:18.12.1-alpine as build

COPY package.json /opt/neko/
COPY package-lock.json /opt/neko/

WORKDIR /opt/neko
RUN npm ci --omit=dev

COPY src /opt/neko/src
RUN npm run-script build

FROM nginx:1.23.2 as runtime

ENV APP_VERSION=latest

COPY ./nginx/templates /etc/nginx/templates
COPY --from=build /opt/neko/dist /opt/neko/dist
