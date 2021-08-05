FROM nginx:1.17-alpine

EXPOSE 80

ENV APP_ENV=dev
RUN apk add dos2unix

# add dos2unix to avoid encoding errors on config files
RUN apk add dos2unix

# Add the nginx configuration
COPY whatway.conf /etc/nginx/conf.d/default.conf
# COPY static_gzip.conf /etc/nginx/conf.d/static_gzip.conf

# add the files from this build
RUN mkdir -p /var/www/whatway
COPY www /var/www/whatway

# daemon off forces the app to run in the foreground which is required by docker to container running the container process
# meaning if the nginx process dies it means that docker will try and restart which could fix an issue that occurs
CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]
