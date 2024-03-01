# Git For Beginners

## **Get start**

- **Configuration**
- **Check File Status**
- **Add** and **Commit  File** to the **Local Repository**
- **View Repository Commit History**
- **View File Difference**
- **Reset Version**
- **Remove Files**
- **`gitignore`**
- **Branch**
- **Branch Conflict**
- **Rebase**
- **Help**

## **Configuration**

> [!note] **View Git version** 查看git版本

```sh
git --version
```

> [!note] **Config**

1. 设置用户名

```sh
git config --global user.name "xxxx"
```

2. 设置邮箱

```sh
git config --global user.email "xxxx"
```

3. 查看用户信息

```sh
git config --list
```

> [!note] **Initialization** 初始化本地仓库

```sh
git init
```

## **Check File Status**

- 查看文件处于什么状态
    1. **??**: 未跟踪
    2. **A**:  已暂存
    3. **M**: 已修改过
    4. **D**: 已删除
    5. **R**：重命名
    6. **U**：已更新未 合并

```sh
git status
```
```sh
# 更精简的输出
git status -s # git status --short
```

## **Add** and **Commit  File** to the **Local Repository**

> [!note] **ADD**
> 添加到 暂存区  [**Staging Area**](Git-Introduction)

```sh
git add file_name # 特定文件
```
```sh
git add --all # 所有文件
```
```sh
git add -A # --all的缩写
```

- 可以使用**通配符**

```sh
git add *.txt
```

- 可以添加整个**目录**

```sh
git add .
```

> [!note] **COMMIT**
> 只提交暂存区[**Staging Area**](Git-Introduction)的内容，不会提交工作区[**Workspace**](Git-Introduction)的内容

```sh
git commit -m "message"
```

- 未经暂存区直接提交 **Git Commit without Stage**

when there are some small change in your file

```sh
git commit -a -m "Updated with a new line"
```

## **View Repository Commit History**

>[!note] 查看仓库提交历史记录
To see you commit log in the repository

```sh
git log
```
```sh
git log --oneline #查看简洁的提交记录
```

## **View File Difference**

> [!note] **Difference** among **WorkSpace**, **Staging Area** and **Repository**

1. WorkSpace VS Staging Area

```sh
git diff 
```

2. WorkSpace + Staging Area VS Repository

```sh
git diff #比较工作区+暂存区与本地仓库
```

3. Staging Area VS Repository

```sh
# 比对已暂存文件与最后一次提交的文件差异
git diff --staged
```
```sh
# 查看已经暂存起来的变化
git diff --cached
```
> [!note] **Difference** between **Different Version**
```sh
git diff <VersionID1> <VersionID2>
```
```sh
git diff HEAD~ HEAD #最新版本与前一个版本比较
git diff HEAD^ HEAD
```
```sh
git diff HEAD~n HEAD #最新版本与前n个版本比较
```
> [!note] **Difference** between **Different Branch**
```sh
git diff <branch_name> <branch_name>
```

![git diff](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/git-diff.png)

## **Reset the version**

> [!note] **Reset** 版本回退

- 回退版本 并保存工作区和暂存区的所有内容

```sh
git reset --soft [VersionID]
```

- 回退版本 并不保存工作区和暂存区的内容

```sh
git reset --hard [VersionID]
```

- 回退版本 保存工作区的所有内容 但不保存暂存区的内容

```sh
git reset --mixed[VersionID]
```
![Reset Version](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/git-reset.png)

## **Remove Files**

>[!note] Method 1:  Delete From Workspace then Add the change to Staging Area
```sh
rm files;
git add file;
```
>[!note] Method 2: Delete From Workspace and Staging Area
```sh
git rm <file>
```

- Delete From Staging Area Save in the Workspace

```sh
git rm --cashed<file>
```

- Delete All Staging Area

```sh
git rm -r --cached .
```

- Delete Recursively all files in the content *After delete need to be commit*

```sh
git rm -r *
```

- Move Files

```sh
# 文件重命名
git mv xxx.txt yyy.txt
```

## **gitignore**

>[!note] 设置忽略文件
![gitignore](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git.gitignore.png)
>.gitignore匹配规则
>
>- 空行或者以#开头的行会被Git忽略。一般空行用于可读性的分隔，#一般用作注释
>- 使用标准的Blob模式匹配，例如:
>   - **\*** 通配任意个字符问号
>   - **?** 匹配单个字符
>   - **[]** 表示匹配列表中的单个字符,比如:[abc]表示a/b/c
>- 两个星号 ** 表示匹配任意的中间目录中括号可以使用短中线连接
>   - [0-9]表示任意一位数字,[a-z]表示任意一位小写字母
>- ! 表示取反

```.gitnore
#忽略所有的 .a 文件
*.a
#但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a
#只忽略当前目录下的TODO文件，而不忽略 subdir/TODO
/TODO
#忽略任何目录下名为 build 的文件夹
build/
# 忽略 doc/notes.txt，但不忽略 doc/sercer/arch.txt
doc/* txt
#忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```
> [!note]+ **Disable tracking** 解除追踪
> ```sh
>git rm -r --cached example_folder/
> ```

>[!note]+ **Commit Change** 提交变化
>```sh
>git commit -m "Remove example_folder from tracking"
>```

## **Branch**

![GitBranch](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/Branch.png)
>[!note] **Create Branch** 创建分支

```sh
git branch xxxxxx(branch name)
```

>[!note] **View Branch** 查看分支

```sh
git branch
```

>[!note] **Switch Branch** 切换分支

```sh
git checkout xxxxx(branch name)
```
```sh
git switch xxxxx(branch name)
```

>[!note] **Create and Switch Branch** 创建并切换分支

```sh
git checkout -b xxxxx(branch name)
```

>[!note] **Merge Branch** 合并分支
>先切进一个分支，然后合并另一个分支
>
>- 把Branch2合并到Branch1
>
```sh
git checkout branch1
```
```sh
git merge branch2
```

![GitBranch](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/Branch-1.png)

>[!note] **Delete Branch** 删除分支
```sh
git branch -d dev #删除已经合并过的分支
```
```sh
git branch -D dev #强制删除未合并的分支 
```

## **Branch Conflict**

- 两分支未修改同一个文件的同一个位置：Git自动合并
- 两分支修改同一个文件的同一个位置：产生冲突
  - 解决方法：
        1. 手工修改冲突文件，合并冲突内容
        2. 添加到暂存区  $git add file  
        3. 提交修改 $git commit -m "message"
  - 终止合并：$git merge --abort

## **Rebase**

>[!note] **Rebase**
>将当前分支变基到另一个分支
![Rebase](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/Rebase.png)

```sh
git rebase branchname
```

|              | Merge                           | Rebase                                                             |
| ------------ | ------------------------------- | ----------------------------------------------- |
| Disadvantage | 产生额外的提交节点分支图复杂| 会改变提交历史，改变了当前分支branch out的节点，避免在共享分支使用 |
| Advantage    | 不会破坏元分支的提交历史方便回溯和查看| 不会新增额外的提交记录，形成线性历史，比较直观和干净  |

## **Help**

```sh
git command -help -  See all the available options for the specific command
```
```sh
git help --all -  See all possible commands
```

> [!Note]+
> ![Git-Status](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/git-status.png)
