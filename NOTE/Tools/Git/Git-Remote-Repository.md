# Github

## SSH

## 关联远程仓库

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

## 获取远程仓库

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