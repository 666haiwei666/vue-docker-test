FROM docker.io/library/nginx:latest

#将当前文件夹的dist文件复制到容器的/usr/share/nginx/html目录
COPY dist/ /usr/share/nginx/html/
COPY defalut.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx","daemon off;"]

