FROM docker.io/library/nginx:latest

ENV GATE_WAY 10.60.44.244
COPY dist/ /usr/share/nginx/html/
COPY defalut.conf /etc/nginx/conf.d
COPY init.sh /init.sh
RUN chmod 700 /init.sh
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
