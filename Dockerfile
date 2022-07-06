FROM nginx
COPY ./build/ /usr/share/nginx/html/
COPY ./vhost.nginx.conf /etc/nginx/conf.d/cb-music.conf
EXPOSE 80