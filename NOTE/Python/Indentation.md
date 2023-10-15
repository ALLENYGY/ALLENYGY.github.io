# 缩进规则

1. 代码块：代码块是一组相关的语句，它们在逻辑上属于同一个控制结构（如条件语句或循环语句）。在Python中，代码块由相同缩进级别的语句组成。

2. 缩进级别：缩进级别是指代码行开始时的空格和制表符的数量。通常情况下，每个缩进级别使用4个空格。

3. 一致的缩进：在同一个代码块中，所有语句必须具有相同的缩进级别。这个缩进级别可以通过空格或制表符来实现，但不能混用。

4. 嵌套代码块：在一个代码块内部，可以有另一个代码块。内部代码块的缩进级别比外部代码块的缩进级别更深。

## (if-else) 缩进

```python
if condition:
    # 在if代码块中
    statement1
    statement2
else:
    # 在else代码块中
    statement3
    statement4
```

## (for) 缩进

```python
for i in range(5):
    # 在循环代码块中
    print(i)
    print(i * 2)
print("循环结束")
```

## 函数定义及缩进

```python
def greet(name):
    # 在函数体内
    print("Hello, " + name + "!")
    print("How are you?")

# 函数定义结束后，回到全局代码块
print("函数定义结束")

# 调用函数
greet("Alice")
```
