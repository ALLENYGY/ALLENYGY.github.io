---
Create Time: 20th February 2024
Title: "[[NJU-OS-PA0]]"
Author:
  - AllenYGY
tags:
  - OS
  - NOTE
  - GNU/Linux
  - Debian
  - NJU
created: 2024-03-20T17:14
updated: 2024-03-21T11:56
---

# [[NJU-OS-PA0]]

## 关于`poweroff`

md，今天踩了很多坑
刚开始的时候登录忘记密码
所以我现在把密码列出来

| Operating System | Username  |  Password   |
|:----------------:|:---------:|:-----------:|
|      Ubuntu      |   root    |  `040301`   |
|      Ubuntu      | AllenYGY  |  `040301`   |
|      Ubuntu      | Parallels | `040301Yjy` |
|      Debian      |   root    |  `040301`   |
|      Debian      | Parallels |  `040301`   |
|      Debian      | AllenYGY  |  `040301`   |

然后看教程的时候，教程说在正常用户下，无法使用

```shell
poweroff
```

需要切换到`Superuser: root`才能用`poweroff`指令

```shell
su -
```

所以我就去切换了

结果报错 `Authentication failure`！！！

我的第一反应是重装

10min后，重装完发现还是不行，但是Debian 启动的时候要求我选择

`sudo or su`

然后我就去网上查`sudo` 和`su`的区别，才知道有的时候系统默认是没有激活root用户

```shell
sudo passwd
Password：[你当前的密码]
Enter new password：[这个是root的密码]
Retype new UNIX password：[重复root的密码]
```

果然，su 切换成功了
然后我想，现在可以用poweroff了吧

md,  `command not found`！！！

又是网上查

造成这个问题的原因是没有把 /sbin 的目录路径（系统用户目录）添加到＄PATH变量中

`echo $PATH` 看`/sbin`  在不在

```shell
echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
```

如果没有 `/sbin` 可以使用以下命令

```shell
export PATH=$PATH:/sbin/
```

果然成功了

临时把对应路径加到$PATH变量中，测试一下是否可用。

需要永久添加需要编辑 .bashrc 文件

打开`.bashrc`

```shell
vi .bashrc
```

在最后一行，添加

```shell
export PATH=$PATH:/usr/sbin
```

然后退出

```shell
source .bashrc
```

结束！

## **关于中文输入法**

### **Source**

在NJU的教程里使用了清华的源

```shell
echo "deb http://mirrors.tuna.tsinghua.edu.cn/debian/ stable main" > /etc/apt/sources.list
```

我不知道是什么原因，反正在我的电脑里^[可能用了虚拟机？]，使用这个源包管理器故障频出，问了GPT才想到换一个源

这个应该是 Debian的默认源
`deb http://deb.debian.org/debian/ bullseye main`

然后我就先把原来的删了

```shell
sudo rm /etc/apt/sources.list
```

然后去里面把默认源加了

```shell
vi /etc/apt/sources.list
```

果然这下就都能装了

不过还有意外之喜，配环境发现一个[Linux包管理工具的网站](https://installati.one/)

顺便给我科普了一下Linux的包管理工具

- `apt`
- `apt-get`
- `aptitude`

### 中文输入法

能装软件之后也走了不少弯路
按照教程来，其实中规中矩，去[sogou](https://shurufa.sogou.com/linux)下载对应的版本 `x86, arm`....

然后一般浏览器下载默认路径在Downloads里

所以启用命令行后还要跑到Downloads, 同时还得登录`root`

```shell
cd Downloads
su -
```

```shell
sudo dpkg -i xxx.deb #xxx 是下载的文件名
```

这时候一般就会开始报错了

因为没有`fcitx`

然后在这篇文章看到一个说法
[`fcitx`和`ibus`是不能共存的，两者只能装其一，所以安装其中一个时最好先使用sudo apt purge命令卸载](https://juejin.cn/post/6989171574209249287)

这里一并给出卸载方法

### 卸载`ibus` 留下 `fcitx`

```shell
sudo apt purge ibus*
sudo apt autoremove
```

#### **fcitx系列输入法**

- Google拼音

```shell
sudo apt install fcitx-googlepinyin
```

- sun拼音

```shell
sudo apt install fcitx-sunpinyin
```

然后需要去更改默认输入法
![`fcitx`](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/fcitx.png)

找到`Fcitx Configuration` 打开, 默认输入法不能放在第一行

![IM-config](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/IM-config.png)

然后还可以去`Global Config` 调整切换快捷键

### 如果卸载`fcitx` 留下 `ibus`

```shell
sudo apt purge fcitx*
sudo apt autoremove
```

比起fcitx，ibus安装配置起来可能稍显复杂一点。

先安装ibus框架：

```shell
sudo apt install ibus ibus-libpinyin

```

然后安装对应输入法：

ibus智能拼音：

```shell
sudo apt install ibus-pinyin
```

sun拼音：

```shell
sudo apt install ibus-sunpinyin
```

后面的步骤笔者没试过可以[参考](https://juejin.cn/post/6989171574209249287)

> [!tip]+ Recommend
> 建议卸载`ibus`
>
> 1. 一方面我卸载`ibus`后面操作成功了, 卸载`fcitx` 笔者没有试过
> 2. 另一方面: [Linux发行版](http://www.linux265.com/distro)下有两大输入法框架：`ibus` 和`fcitx`，其中`fcitx` 的体验要比[`ibus`](http://linux265.com/soft/622.html) 好，因此选择 [`fcitx`](http://linux265.com/soft/620.html) 框架，并安装中文[输入法](http://linux265.com/soft/g42.html#search).

## Reference List

[parallels desktop 安装centos7默认密码和root问题](https://blog.csdn.net/u012852597/article/details/79353949)

[Debian 安装完成找不到命令解决方法](https://cloud.tencent.com/developer/article/1985786)

[Linux下安装中文输入法总结](https://juejin.cn/post/6989171574209249287)

[搜狗输入法for linux 安装](https://jingyan.baidu.com/article/925f8cb88390f5c0dde056a0.html)

[Linux(Debian)发行版中文输入法](https://www.cnblogs.com/xiangxinhouse/p/11135924.html)
