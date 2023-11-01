# Git

## Get start

### Configuration

- Git version

查看git版本

```sh
git --version
```

- config

设置用户名

```sh
git config --global user.name "xxxx"
git config --global user.email "xxxx"
```

查看用户信息

```sh
git config --list
```

- initialization

初始化本地仓库

```sh
git init
```

### Check file status

- git status 查看哪些文件处于什么状态

```sh
git status

# 更精简的输出
git status -s
# git status --short

??# 表示新添加的未跟踪文件
A# 表示新添加到暂存区中的文件
M# 表示修改过的文件
```

### Add File and commit to the local Repository

- add

```sh
git add file_name
git add --all
git add -A
```

- commit

```sh
git commit -m "message"
```

- Git Commit without Stage

when there are some small change in your file

```sh
git commit -a -m "Updated with a new line"
```

compare
see the changes in a more compact way:

```sh
git status --short
```

### Remove File

- git rm 删除文件

```sh
# 删除 xxx.txt 文件(包括磁盘上的)
git rm -f xxx.txt

# 删除 xxx.txt 文件(不包括磁盘上的)，只是从暂存区删除
git rm --cached xxx.txt

# 清除本地缓存
git rm -r --cached .
```

- git mv 移动文件

```sh
# 文件重命名
git mv xxx.txt yyy.txt
```

### log

TO see you commit log in the repository

```sh
git log
```

### Help

```sh
git command -help -  See all the available options for the specific command
git help --all -  See all possible commands
```

### Branch

- Create Branch

创建分支

```sh
git branch xxxxxx(branch name)
```

- View Branch

查看分支

```sh
git branch
```

- Switch Branch

切换分支

```sh
git checkout xxxxx(branch name)
```

- Create and switch branch

```sh
git checkout -b xxxxx(branch name)
```

- Merge Branch

合并分支

先切进一个分支，然后合并另一个分支

```sh
git checkout branch1
git merge branch2
```

## Git & Github

### 获取远程仓库

- git clone \<url> 从服务器端克隆一个已存在的git仓库到本地

```sh
# 克隆 Musicer 库到本地
git clone https://github.com/xiayouran/Musicer.git

# 克隆 gui-musicer分支代码 到本地
git clone -b gui-musicer https://github.com/xiayouran/Musicer.git

# 不仅会 git clone 当前项目中的代码，也会 clone 项目中子项目的代码
# 即 git 中的 git
git clone --recursive xxxxxx
```

### 记录每次更新到仓库

- .gitignore 忽略文件

```sh
# 通过配置目录下的 .gitignore 文件来忽略某些文件
for example:
# 忽略任何目录下名为 .idea 的文件夹
.idea/
# 忽略所有的 .pyc 文件
*.pyc
```

- git diff 显示哪些文件发生了改变

```sh
# 查看尚未暂存的文件更新了哪些部分
git diff
# 比对已暂存文件与最后一次提交的文件差异
git diff --staged
# 查看已经暂存起来的变化
git diff --cached
```

### 关联远程仓库

- origin 是一个引用名 表示远程的仓库
- [url] 即为远程仓库的.git

```sh
git remote add origin  [url]
```

- 假设master是本地仓库名

```sh
# 把本地仓库push到远程仓库
git push -u  origin master 
```
