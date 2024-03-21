---
Title: "[[Git-Introduction]]"
status: DONE
tags:
  - Docker
  - NOTE
Author:
  - AllenYGY
created: 2024-01-30T02:14
updated: 2024-03-21T22:56
---

# [[Git-Introduction]] 

## Git Workflow

1. 克隆 Git 资源作为工作目录。
2. 在克隆的资源上添加或修改文件。
3. 如果其他人修改了，你可以更新资源。
4. 在提交前查看修改。
5. 提交修改。
6. 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

## Git Workspace/Staging Area/Local Repository

![Git workspace](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/git-1.png)
基本概念：

- **工作区**：本地目录 **Working Directory**
- **暂存区**：一般存放在 .git 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引 **Staging Area/Index**
- **版本库**：工作区有一个隐藏目录 .git 是 Git 的版本库 **Local Repository**

![Git workflow](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/git-workflow.png)

## Git File Status

![Git Status](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/git-status.png)
