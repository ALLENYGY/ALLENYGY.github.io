# git 指令集

## 获取远程仓库

- git clone \<url> 从服务器端克隆一个已存在的git仓库到本地

```git
# 克隆 Musicer 库到本地
git clone https://github.com/xiayouran/Musicer.git

# 克隆 gui-musicer分支代码 到本地
git clone -b gui-musicer https://github.com/xiayouran/Musicer.git

# 不仅会 git clone 当前项目中的代码，也会 clone 项目中子项目的代码
# 即 git 中的 git
git clone --recursive xxxxxx
```

- git init 将尚未进行版本控制的当前本地目录转换为git仓库

```git
git init
# 在当前目录生成.git子目录，所有有关此项目的快照数据都存放在这里，默认是隐藏的

# 添加仓库
git remote add origin git@xxxxxx.git
```

## 记录每次更新到仓库

- git status 查看哪些文件处于什么状态

```git
git status

# 更精简的输出
git status -s
# git status --short

??# 表示新添加的未跟踪文件
A# 表示新添加到暂存区中的文件
M# 表示修改过的文件

```

- git add 添加新创建或修改的文件到本地的暂存区

```git
# 添加所有文件
git add .

# 等同上述命令
git add --all
```
  
- .gitignore 忽略文件

```git
# 通过配置目录下的 .gitignore 文件来忽略某些文件
for example:

# 忽略任何目录下名为 .idea 的文件夹
.idea/

# 忽略所有的 .pyc 文件
*.pyc
```

- git diff 显示哪些文件发生了改变

```git
# 查看尚未暂存的文件更新了哪些部分
git diff

# 比对已暂存文件与最后一次提交的文件差异
git diff --staged

# 查看已经暂存起来的变化
git diff --cached
```

- git commit 提交暂存区到仓库

```git
# 添加提交描述
git commit -m 'xxx'

# 完成 add 和 commit 两个操作
git commit -a -m 'xxx'
```

- git rm 删除文件

```git
# 删除 xxx.txt 文件(包括磁盘上的)
git rm -f xxx.txt

# 删除 xxx.txt 文件(不包括磁盘上的)，只是从暂存区删除
git rm --cached xxx.txt

# 清除本地缓存
git rm -r --cached .
```

- git mv 移动文件

```git
# 文件重命名
git mv xxx.txt yyy.txt
```
