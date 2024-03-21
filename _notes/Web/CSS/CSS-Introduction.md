---
Create Time: 30th January 2024
Title: CSS-Introduction
Author:
  - AllenYGY
tags:
  - NOTE
  - WEB
  - CSS
created: 2024-01-30T00:22
updated: 2024-03-21T12:33
---

# **CSS-Introduction**

> [!tip]+ **CSS**
> Cascading Style Sheets 层叠样式表
> **CSS世界的诞生就是为图文信息展示服务的**

## **Concept & Terms**

### **Term 1**
>[!note]+ 属性 `height, weight,...`
### **Term 2**
>[!note]+ 值
>
>- 整数值，如`z-index:1中`的`1`，属于`<integer>，同时也属于<number>`
>- 数值，如`line-height:1.5中`的`1.5`，属于`<number>`
>- 百分比值，如`padding:50%`中的`50%`，属于`<percent>`
>- 长度值，如`99px` $<length>$
>- 颜色值，如`#999`
>
### **Term 3**
>[!note]+ 关键字：`transparent`
>
>- 泛关键字： `inherit`
>
### **Term 4**
>[!note]+ 变量：CSS2中不多见>
### **Term 5**
>[!note]+ 长度单位: `px, em`
>百分号%不是长度单位
>$$<number> + 长度单位 = <length>$$
>绝对长度单位：`px`，还有`pt, cm, mm, pc`, 几乎不用
>相对长度单位
>
>- 相对字体长度单位: `em,ex` 还有CSS3中的`rem,ch`；
>- 相对视区长度单位：`vh,vw,vmin,vmax`；
>
### **Term 6**
> [!note]+ 功能符：值以函数的形式指定（就是被括号括起来的那种）
>
> - 主要用来表示颜色（`rgba和hsla`）
> - 背景图片地址（`url`）
> - 元素属性值、计算（`calc`）和过渡效果等
>如`rgba(0,0,0,.5)`、`url('css-world.png')`、`attr('href')`和`scale(-1)`
>
### **Term 7**
> [!note]+ 属性值：属性冒号后面的所有内容统一称为属性值。
>
>- 例如，`1px solid rgb(0,0,0)`就可以称为属性值
>- 它是由“值+关键字+功能符”构成的。属性值也可以由单一内容构成。
>- 例如，`z-index:1`的`1`也是属性值。
>
### **Term 8**
> [!note]+ 声明： 属性名加上属性值就是声明
> 例如：
> ```css
> color: transparent;
>```
### **Term 9**
>[!note]+ 声明块： 声明块是花括号（{}）包裹的一系列声明
>例如：
> ```css
> {
> 　 height: 99px;
> 　 color: transparent;
> }
> ```
### **Term 10**
> [!note]+ 规则或规则集: 出现了选择器，而且后面还跟着声明块
> 例如：
> ```css
> .vocabulary {
> 　 height: 99px;
> 　 color: transparent;
> }
> ```
### **Term 11**
> [!note]+ 选择器： 选择器是用来瞄准目标元素的东西

- >[!note]+ 类选择器：指以“.”这个点号开头的选择器。
    >     很多元素可以应用同一个类选择器。
    >     “类”，天生就是被公用的命。
- >[!note]+ ID选择器：“#”打头，权重相当高。ID一般指向唯一元素。
     >但是，在CSS中，ID样式出现在多个不同的元素上并不会只渲染第一个，而是雨露均沾。但显然不推荐这么做。
- >[!note]+ 属性选择器：指含有[]的选择器
- >[!note]+ 伪类选择器：一般指前面有个英文冒号（:）的选择器
    > 如:first-child 或:last-child等。

- > [!note]+ 伪元素选择器：就是有连续两个冒号的选择器
     > 如::first-line::first-letter、::before和::after。

### **Term 12**
 > [!note]+ 关系选择器：关系选择器是指根据与其他元素的关系选择元素的选择器
> 常见的符号有空格、>、~，还有+等，这些都是非常常用的选择器。

- >[!note]+ 后代选择器：选择所有合乎规则的后代元素。空格连接。
- >[!note]+ 相邻后代选择器：仅仅选择合乎规则的儿子元素，孙子、重孙元素忽略，因此又称“子选择器”。
     >`>`连接。适用于IE7以上版本。
- >[!note]+ 兄弟选择器：选择当前元素后面的所有合乎规则的兄弟元素。
     > `~`连接。适用于IE7以上版本。
- >[!note]+ 相邻兄弟选择器：仅仅选择当前元素相邻的那个合乎规则的兄弟元素。
    >`+`连接。适用于IE7以上版本。

### **Term 13**
> [!note]+ @规则: @规则指的是以@字符开始的一些规则
> 例如： @media、@font-face、@page或者@support，诸如此类。
