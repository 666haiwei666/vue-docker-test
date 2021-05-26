#接收外部参数
harbor_url=$1
harbor_project_name=$2
project_name=$3
tag=$4
port=$5

imageName=$harbor_url:$port/$harbor_project_name/$project_name:$tag

echo "$imageName"

#查询容器是否存在，存在则删除
containerId=`docker ps -a | grep -w ${harbor_project_name}`

echo "$containerId"
if [ "$containerId" !=  "" ] ; then
    #停掉容器
    docker stop $containerId

    #删除容器
    docker rm $containerId
	
	echo "成功删除容器"
fi


# 登录Harbor
# docker login -u admin -p Harbor12345 $harbor_url

# echo ${docker login -u admin -p Harbor12345 $harbor_url}

# 上传私有仓库

# docker push $imageName

# echo ${docker push $imageName}

# 启动容器 
docker run -id  -p $port:80 --name=$harbor_project_name $imageName nginx -g 'daemon off;'

echo "容器启动成功"