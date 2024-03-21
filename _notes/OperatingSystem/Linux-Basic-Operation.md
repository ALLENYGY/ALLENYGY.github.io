---
Create Time: 29th February 2024
Title: "[[Linux-Basic-Operation]]"
Author:
  - AllenYGY
tags:
  - OS
  - NOTE
  - Linux
  - Basic
created: 2024-03-20T17:14
updated: 2024-03-21T11:55
---

# [[Linux-Basic-Operation]]

## **File Operation**

### **Rename**

-  Rename `a.txt` into `b.txt`

```shell
mv a.txt b.txt
```

- 得到交互提示（在存在同名文件的情况下）得到提示，防止误操作

```shell
mv -i a.txt b.txt
```

- Copy-Delete Operation

```shell
cp a.txt b.txt
rm a.txt
```

- `rename` command
	- `rename`命令的使用是`rename oldfile newfile matchfile`

```shell
rename a.txt b.txt a.txt
```

`rename`命令的优点是它可以用来批量重命名文件和目录，支持正则表达式。
例如我们想要批量重命名“txt”文件为“log”文件，可以使用以下命令：

```
rename .txt .log *.txt
```

`rename命令支持多种参数，下面介绍一些常用参数:`

1. **-v**：显示重命名的详细信息
2. **-n**：显示模拟执行的结果，但不实际执行
3. **-f**：强制执行，忽略存在的文件
4. **-i**：忽略大小写
5. **-h**：显示帮助信息。


## **Vim Basic**

|           Command           |                           Description                            |                 中文描述                 |
|:---------------------------:|:----------------------------------------------------------------:|:----------------------------------------:|
|             `a`             |                   Insert text after the cursor                   |             在光标后插入文本             |
|             `i`             |                  Insert text before the cursor                   |             在光标前插入文本             |
|         `:wq`, `ZZ`         |                      Save changes and exit                       |              保存更改并退出              |
|         `:q`, `:q!`         |             Exit without saving (`:q!` forces exit)              |       不保存退出（`:q!` 强制退出）       |
|            `:w`             |                Save changes but continue editing                 |            保存更改但继续编辑            |
|          `Ctrl+F`           |                      Move forward one page                       |                 向前翻页                 |
|           `/text`           |                    Search forward for `text`                     |               向后查找文本               |
|           `?text`           |                    Search backward for `text`                    |               向前查找文本               |
|          `:!bash`           | Temporarily exit to execute a bash command; use `exit` to return | 临时退出执行bash命令；使用`exit`返回编辑 |
|             `x`             |                Delete the character at the cursor                |             删除光标处的字符             |
|            `dd`             |                     Delete the current line                      |                删除当前行                |
|             `u`             |                    Undo the last modification                    |              撤销上一次修改              |
|    `mv file fileFolder`     |                   Move `file` to `fileFolder`                    |           将文件移动到文件夹中           |
|    `cp file fileFolder`     |                   Copy `file` to `fileFolder`                    |           将文件复制到文件夹中           |
| `rm -rf file`, `rm -f file` |            Remove a directory (`-rf`) or file (`-f`)             |    删除文件夹（`-rf`）或文件（`-f`）     |
|            `ls`             |                   List files in the directory                    |               查看文件目录               |
|           `ls -a`           |               List all files including hidden ones               |        查看所有文件，包括隐藏文件        |
|            `ll`             |     List all files with detailed info including permissions      |     列出所有文件，包括权限等详细信息     |
