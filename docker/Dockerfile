FROM docker.io/library/nginx:latest

COPY dist/ /usr/share/nginx/html/
COPY defalut.conf /etc/nginx/conf.d
COPY init.sh /init.sh
RUN chmod 700 /init.sh
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
