---
Title: "[[Git-Remote-Repository]]"
status: DONE
tags:
  - Docker
  - NOTE
Author:
  - AllenYGY
created: 2024-01-28T11:37
updated: 2024-03-21T22:58
---

# Github

## SSH settings

- Local
```sh
ssh-keygen -t rsa -b 4096
```
- Private key: id_rsa
- Public key: id_rsa.pub

Copy public key

- Github
	1. 点击右上角头像-settings-SSH and GPG keys-New SSH Key
	2. Paste public key

![RemoteRepo](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/RemoteRepo.png)

## Push/ Pull

>**push** 推送新内容
```sh
git push <remote> <branch>
```
>**pull** 拉取更新内容
```sh
git pull <remote>
```

## Associate Remote Repository

- 关联远程仓库
```sh
git remote add origin [url]
```
> origin 是一个别名 表示远程的仓库 
> [url] 即为远程仓库的.git
- 查看远程仓库
```sh
git remote -v
```
- 取消关联远程仓库
```sh
git remote remove <RemoteRepo>
```
- 指定本地分支名
```sh
git branch -M xxxx
```
- 把本地仓库push到远程仓库
```sh
git push -u <RemoteRepo> <RemoteBranch>:<LocalBranch>
```
>如果远程分支名与本地分支名相同可以省略一个 pull相同
```sh
git push -u <RemoteRepo> <LocalBranch>
```
- 如果远程仓库被修改，需要将其拉取到本地仓库
1. **自动合并** 适用于合并不冲突的两个仓库
```sh
git pull
```
2. **手动合并** 适用于合并冲突的两个仓库
```sh
git fetch
```
![Git pull](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/pull.png)