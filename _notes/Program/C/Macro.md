---
Create Time: 19th February 2024
Title: "[[Macro]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - C
created: 2024-02-19T23:53
updated: 2024-03-21T19:44
---

# [[Macro]]^[宏]

今天看操作系统的时候，看到这个，懵了，还去CSDN[C语言宏定义中#符号和##的妙用](https://blog.csdn.net/qq_37858386/article/details/78919163)查了一下

## **\# 和 \##**

\# 和 \## 编译器不会识别这两个运算符，仅在预处理时执行

**\# 用法**

- \# 运算符用在预编译时期，用于将宏参数转为字符串
**\## 用法**
- \## 运算符用在预编译时期粘连两个符号，增大了宏的使用灵活性！

```c
#include <stdio.h>  
#define NAME(n) int_name##n  
int main()  
{  
    int NAME(a);  
    int NAME(b);  
    NAME(a) = 520;  
    NAME(b) = 111;  
    printf("%d\n", NAME(a));  
    printf("%d\n", NAME(b));  
    return 0;  
}
```

## **参考列表**

- [C语言宏定义中#符号和##的妙用](https://blog.csdn.net/qq_37858386/article/details/78919163)
