FROM node:13-alpine as build

WORKDIR /app

COPY package*.json /app/

RUN npm install -g @ionic/cli
RUN npm install

COPY ./ /app/
RUN npm run-script build:prod

FROM nginx:1.17-alpine

EXPOSE 80

ENV APP_ENV=dev
RUN apk add dos2unix

# add dos2unix to avoid encoding errors on config files
RUN apk add dos2unix

COPY whatway-client.conf /etc/nginx/conf.d/default.conf
COPY static_gzip.conf /etc/nginx/conf.d/static_gzip.conf

# add the files from this build
RUN mkdir -p /var/www/whatway-client
RUN rm -rf /var/www/whatway-client/*
COPY --from=build /app/www/ /var/www/whatway-client

# daemon off forces the app to run in the foreground which is required by docker to container running the container process
# meaning if the nginx process dies it means that docker will try and restart which could fix an issue that occurs
CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]
