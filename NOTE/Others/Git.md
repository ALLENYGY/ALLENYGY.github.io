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

```sh
git status
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

