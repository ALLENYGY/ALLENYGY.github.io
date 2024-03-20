---
Create Time: 19th February 2024
Title: "[[PythonBasic]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - Python
---

# [[PythonBasic]]

## **Syntax**^[语法]

### **Identifiers and Variables**^[标志符和变量]

* The naming of identifiers is exactly the same as in C.
* In Python, you **don't have to declare** a variable before using it.
* In Python, a variable is more like a **reference** and one variable can refer to **any data type**.

The following assignments of variables are all valid.

```python
a = 1.2
a = "Daisy"

a, b = "Hello", "World"
# a is "Hello" and b is "World"

a = b = [1,2,3]
# a and b are both [1,2,3]
```

### **Quotation**^[引用]

- You can enclose strings using single ('), double (") or triple (''') quotes.
- There is no difference between single and double quotes.
    - Python 中单引号 ' 和双引号 " 使用完全相同。
- Triple quotes can denote a string across multiple lines.
    - 使用三引号(''' 或 """)可以指定一个多行字符串。

### **Reserved Words**^[保留字]

Python has a smaller set of keywords than C does. 
All the python keywords, as shown below, contain only lowercase letters.

```python
and, exec, not, as, finally, or, assert,
for, pass, break, from, print, class, global,
raise, continue, if, return, def, import, try,
del, in, while, elif, is, with, else,
lambda, yield, except
```

### **Lines and Indentation**^[缩进]

In Python, end of a statement is marked by a newline character (no semicolon!). But we can write **a single statement over multiple lines** with the line continuation character (\\). For example:

```python
# use "\" to divide one statement over multiple lines
a = 1 + 2 + 3 + \
    4 + 5 + 6 + \
    7 + 8 + 9
```

Further, line continuation is implied inside parentheses (()), brackets ([]) and braces ({}). In the following example, the line continuation character can be omitted.

```python
print("Hello",
      "World")
gender = ["female",
         "male"]
```
         

If you want to put multiple statements in a single line, seperate them using semicolons (;).

```python
a = 1; b = 2; c = 3
```

Python does not use braces ({}) to indicate blocks of code. Code blocks are denoted by line indentation and this is rigidly enforced. ***Wrong indentation will cause error!***

A code block starts with indentation and ends with the first unindented line. 
Generally *four whitespaces* are used for indentation. In a Jupyter notebook, you may press "tab" to input four whitespaces.

## **Basic IO**

Till now, we have used the `print()` function for *output* for plenty of times. For *input*, we have the `input()` function, and its syntax is:

```python
input([prompt])
```

`prompt` is a string which can be printed on the screen. This parameter is *optional*. Below is an example.

```python
name = input("What is your name? ")
print(name, "is a good name :)")
```