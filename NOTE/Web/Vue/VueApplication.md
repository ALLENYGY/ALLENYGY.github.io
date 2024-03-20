---
Create Time: 18th February 2024
Title: "[[VueApplication]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - Vue
  - Ch2
  - WEB
---

# [[VueApplication]]

## **CLI文件结构**

```txt
├── node_modules
├── public
│ ├── favicon.ico: 页签图标
│ └── index.html: 主页面
├── src
│ ├── assets: 存放静态资源
│ │ └── logo.png
│ │── component: 存放组件
│ │ └── HelloWorld.vue
│ │── App.vue: 汇总所有组件
│ │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```


## **关于不同版本的Vue**

> [!note]+ vue.js与vue.runtime.xxx.js的区别：
> 1. vue.js是完整版的Vue，包含：核心功能+模板解析器。
> 2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

> [!tip]+ 
> `vue.runtime.xxx.js`没有模板解析器，所以不能使用template配置项，需要使用 render函数接收到的createElement函数去指定具体内容。