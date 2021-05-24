FROM docker.io/library/nginx:latest

COPY dist/ /usr/share/nginx/html/
COPY defalut.conf /etc/nginx/conf.d
COPY init.sh /etc/nginx/init.sh
RUN chmod +x /init.sh
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"


