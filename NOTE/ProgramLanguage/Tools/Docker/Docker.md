# Docker

## Basic Concept

- **镜像**: *Image*  定义了容器如何构建
- **容器**: *Container*  容器是独立运行的一个或一组应用，是镜像运行时的实体
- **Dockerfile**: 构建镜像需要的各种指令

>镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。

## Client Server Architecture

![framework](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Docker/framework.png)

## Containerization **容器化** and Dockerfile

1. 创建Dockerfile
2. 使用Dockerfile构建Image
3. 使用Image创建和运行容器

### Dockerfile

1. Install Operating System
2. Install Operating Environment
3. Copy app, dependency, configuration files
4. Execute start command run the app

## Docker Command

![MindMap](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Docker/Docker.png)

### Management

- Image
- Network
- Container
- Volume
- Plugin

#### Image Management

- **查看镜像** (List images)

```docker
docker image ls
```

- **检索镜像** (Search for images)

```docker
docker search [image]
```
 > **Example**
 >```docker
 docker search nginx

- **拉取镜像** (Pull an image)

```docker
docker pull[image]
```

- **上传镜像** (Push an image)

```docker
docker push[image]
```
>**Example**
>```docker
docker push geekhour/hello-docker:latest

- **保存镜像** (Save image)

```docker
docker save [image] -o FILE 
docker save [image] > FILE 
```
>**Example**
>```docker
>docker save geekhour/hello-docker:latest

- **导入镜像** (Load an image)

```docker
docker load -i FILE
```
>**Example**
>```docker
 docker load -i hello-docker.tar

- **查看镜像历史**  (View image history)

```docker
docker history[image]
```

- **删除镜像** (Remove an image)

```docker
docker rmi [image]
docker image rm [image] 
```

- **删除不再使⽤的镜像** (Delete a image that is no longer used)

```docker
docker image prune
```

- **将⽂件系统导⼊为镜像** (Guide the component system as a image)

```docker
docker import [URL/FILE]
```

- **从容器创建镜像** (Create an image from a container)

```docker
docker commit [container][image]
```

#### Container Management

- **创建容器** (Create a container)

```docker
docker create [image]
```

- **创建并运行容器** (Create and run a container)

```docker
docker run [image]
```

- **启动容器** (Start a container)

```docker
docker start [container]
```

- **停止容器** (Stop a container)

```docker
docker stop [container]
```

- **重启容器** (Restart a container)

```docker
docker restart [container]
```

- **列出正在运行的容器** (List running containers)

```docker
docker ps
docker container ls
```

- **列出所有容器** (List all containers)

```docker
docker ps -a
docker container ls -a
```

- **以交互模式进入容器** (Enter a container in interactive mode)

```docker
docker exec -it [container] bash
docker attach [container]
```

- **导出容器** (Export a container)

```docker
docker export [container] -o FILE
docker export [container] > FILE
```

- **导入容器快照** (Import a container image)

```docker
docker import FILE
```

- **查看容器日志** (View container logs)

```docker
docker logs [container]
```

- **删除容器** (Remove a container)

```docker
docker rm [container]
docker container rm [container]
```

- **查看容器端口映射** (View container port mappings)

```docker
docker port [container]
```

- **显示容器内进程** (Show processes inside a container)

```docker
docker top [container]
```

- **复制本地文件至容器内的指定路径** (Copy local files to a specified path inside a container)

```docker
docker cp [FILE] [container]:[PATH]
```

- **显示容器的变化** (Show changes in a container)

```docker
docker diff [container]
```

- **显示容器资源使用情况** (Show container resource usage)

```docker
docker stats [container]
```

#### Volume Management

- **创建一个数据卷** (Create a volume)

```docker
docker volume create [volume]
```

- **查看数据卷** (List volumes)

```docker
docker volume ls
```

- **查看数据卷详细信息** (Inspect a volume)

```docker
docker volume inspect [volume]
```

- **删除数据卷** (Remove a volume)

```docker
docker volume rm [volume]
```

- **删除所有未使用的数据卷** (Remove all unused volumes)

```docker
docker volume prune
```

#### Network Management

- **列出可用网络** (List networks)

```docker
docker network ls
```

- **查看网络详细信息** (Inspect network)

```docker
docker network inspect [network]
```

- **创建一个新的网络** (Create a new network)

```docker
docker network create [network]
```

- **删除一个网络** (Remove a network)

```docker
docker network rm [network]
```

- **将容器连接到网络** (Connect a container to a network)

```docker
docker network connect [network] [container]
```

- **将容器从网络断开** (Disconnect a container from a network)

```docker
docker network disconnect [network] [container]
```

#### Plugin Management

- **列出插件** (List plugins)

```docker
docker plugin ls
```

- **安装插件** (Install plugin)

```docker
docker plugin install [plugin]
```

- **启用插件** (Enable plugin)

```docker
docker plugin enable [plugin]
```

- **禁用插件** (Disable plugin)

```docker
docker plugin disable [plugin]
```

- **卸载插件** (Remove plugin)

```docker
docker plugin rm [plugin]
```

### Run Container

```docker
docker run [options] image [command][arg...]
```

- 创建一个容器，并指定容器名称、后台运行、端口映射、环境变量、和工作目录

```docker
docker run -d -p[hostPost]:[containerPort] -e [key=value] -w[PATH] --name[name][image]
```

- 创建 运行并命名容器

```docker
docker run --name[name][image]
```

- 创建一个容器并后台运行

```docker
docker run -d[image]
```

- 创建一个容器并指定端口映射

```docker
docker run -p[hostPort]:[containerPort][image]
```

- 创建一个容器并指定端口映射 **随机分配**

```docker
docker run -P[image]
```

- 创建一个容器并指定环境变量

```docker
docker run -e[key=value][image]
```

- 创建一个容器并指定工作目录

```docker
docker run -w[PATH][image]
```

- 创建一个容器并在容器中执行命令

```docker
docker run [image][command]
```

>**Example**
>```docker
docker run -it nginx:latest /bin/bash

**使用镜像nginx：latest 来启动一个容器，并在容器内执行交互式 bash shell**

>```docker
docker run -it -p 3316:3306 -v /data:/data -d mysql:latest

**创建⼀个 mysql 容器，后台模式启动，主机 3316 端⼝ 映射到容器 3306 端⼝，主机 /data ⽬录映射到容器 /data ⽬录**

### Daily Operation

1. 查看Docker **系统信息**

```docker
docker info
```

2. 查看Docker **版本**

```docker
docker version
```

3. 查看Docker **帮助文档**

```docker
docker--help
```

4. 查看Docker **命令帮助文档**

```docker
docker[command]--help
```

5. **登录/退出** DockerHub

```docker
docker login/logout
```

## Dockerfile

```Dockerfile
# 基础镜像设置
FROM [base_image]
# 指定基础镜像，必须为Dockerfile的第一条指令；

# 文件添加指令
ADD <src>... <dest>
# 用于将文件复制到镜像中，源可以是URL或者本地文件，也可以是一个压缩文件（自动解压）

# 文件复制指令
COPY [--chown=<user>:<group>] <src>... <dest>
# 用于将文件复制到镜像中，源只能是本地文件

# 工作目录指令
WORKDIR /path/to/workdir
# 用于指定工作目录，可以使用多个WORKDIR指令，如果使用相对路径，则是相对于上一条WORKDIR指令的路径

# 环境变量指令
ENV <key> <value>
ENV <key1>=<value1> <key2>=<value2>...
# 用于设置环境变量

# 执行命令指令
CMD ["executable","param1","param2"]
CMD command param1 param2
# 用于指定默认的容器主进程，每个Dockerfile中只能有一条CMD指令，如果有多条，则只有最后一条会生效

# 卷挂载指令
VOLUME ["/path/to/volume"]
VOLUME ["/path1", "/path2"...]
# 用于定义匿名卷，持久化数据

```
 