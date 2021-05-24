FROM docker.io/library/nginx:latest

COPY dist/ /usr/share/nginx/html/
COPY defalut.conf /etc/nginx/conf.d
COPY init.sh /init.sh
RUN chmod +x /init.sh
RUN init.sh 47.114.42.201:8889 vue-docker-test vue-docker-test 0.0.1 8090
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"


