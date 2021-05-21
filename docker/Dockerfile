FROM nginx

#将当前文件夹的dist文件复制到容器的/usr/share/nginx/html目录
COPY ../dist/ /usr/share/nginx/html/

#声明运行时容器暴露的端口（容器提供的服务端口）
EXPOSE 8080

#CMD:指定容器启动时要运行的命令
CMD ["nginx", "-g", "daemon off;"]