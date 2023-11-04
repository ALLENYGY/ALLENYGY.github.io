# Basic R

## R Input/Output

Easy Input

```r
# String 
"Hello World!"
print("Hello World!")
5+5
```

Output

```r
[1] "Hello World!"
[1] 10
```

## R Variables

- To assign a value to a variable, use the <- sign. To output (or print) the variable value, just type the variable name:
- 赋值操作用"<-"实现
- 输出仅需要变量名即可

```r
name <- "John"
age <- 40

name   # output "John"
age    # output 40
```

```r
name <- "John"
age <- 40

name   # output "John"
age    # output 40
```

- 多变量赋值

```r
# Assign the same value to multiple variables in one line
var1 <- var2 <- var3 <- "Orange"

# Print variable values
var1
var2
var3
```

Output

```r
[1] "Orange"
[1] "Orange"
[1] "Orange"
```

The Global Assignment Operator
Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.

To create a global variable inside a function, you can use the global assignment operator <<-

```r
my_function <- function() {
txt <<- "fantastic"
  paste("R is", txt)
}
my_function()
print(txt)
```

### Concatenate Elements

拼接结果

```r
text1 <- "R is"
text2 <- "awesome"

paste(text1, text2)
```

Output

```r
[1] "R is awesome"
```

## R Data Types

- numbers
  - numeric - (10.5, 55, 787)  *小数*
  - integer - (1L, 55L, 100L, where the letter "L" declares this as an integer) *整数*
  - complex - (9 + 3i, where "i" is the imaginary part) *复数*
- character (a.k.a. string) - ("k", "R is exciting", "FALSE", "11.5") *字符串*
- logical (a.k.a. boolean) - (TRUE or FALSE) *布尔代数*

```r
# numeric
x <- 10.5
class(x)

# integer
x <- 1000L
class(x)

# complex
x <- 9i + 3
class(x)

# character/string
x <- "R is exciting"
class(x)

# logical/boolean
x <- TRUE
class(x)
```

Output

```r
[1] "numeric"
[1] "integer"
[1] "complex"
[1] "character"
[1] "logical"
```

## R Numbers

- numeric
- integer
- complex

### Type Conversion

任意两种类型之间的转换

```r
as.numeric()
as.integer()
as.complex()
```

### R math functions

| Operator | Name                         | Example       |
|--------|--------------------------------|---------------|
| +      | 加法                           | x + y         |
| -      | 减法                           | x - y         |
| *      | 乘法                           | x * y         |
| /      | 除法                           | x / y         |
| ^      | 指数                       | x ^ y         |
| %%     | 取模（除法的余数）           | x %% y        |
| %/%    | 整数除法（向下取整的除法结果） | x %/% y       |

以上是常见的数学运算符及其含义。在表格中，第一列是运算符，第二列是对应的含义说明，第三列是示例演示了运算符的使用。

| 函数       | 用途                                                  |
|------------|------------------------------------------------------|
| min()      | 找出一组数值中的最小值。                                 |
| max()      | 找出一组数值中的最大值。                                 |
| ceiling()  | 将数值向上取整。                                       |
| floor()    | 将数值向下取整。                                       |
| sqrt()     | 计算给定数值的平方根。                                  |
| abs()      | 计算给定数值的绝对值。                                  |
| round()    | 将数值四舍五入到最接近的整数。                            |
| sign()     | 确定给定数值的符号。返回-1、0或1，表示负数、零或正数。        |
| sin()      | 计算给定角度的正弦值。                                   |
| cos()      | 计算给定角度的余弦值。                                   |
| tan()      | 计算给定角度的正切值。                                   |
| asin()     | 计算给定值的反正弦值，返回一个角度值。                   |
| acos()     | 计算给定值的反余弦值，返回一个角度值。                   |
| atan()     | 计算给定值的反正切值，返回一个角度值。                   |
| exp()      | 计算给定数值的指数函数值。                             |
| log()      | 计算给定数值的自然对数。                                 |
| log10()    | 计算给定数值的以10为底的对数。                            |
| log2()     | 计算给定数值的以2为底的对数。                             |
| log1p()    | 计算给定数值加1后的自然对数。                             |
| expm1()    | 计算给定数值的指数值减去1。                               |

## R Strings

```r
str <- "Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."

str # print the value of str
```

Output

```r
[1] "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua."
```

R will add a "\n" at the end of each line break. This is called an escape character, and the n character indicates a new line.

If you want the line breaks to be inserted at the same position as in the code, use the cat() function:

```r
str <- "Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."
cat(str)
```

Output

```r
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
```

- nchar() *返回字符串的长度*
- substr() *从字符串中提取子字符串*
- paste() *将多个字符串连接成一个字符串*
- paste0() *将多个字符串连接成一个字符串，但不添加空格*
- gsub() *用新的字符串替换字符串中的旧字符串*
- strsplit() *将字符串分割成多个子字符串*
- grepl() *检查该字符串是否在字符串*

在字符串中间插入字符串

```r
str <- "We are the so-called \"Vikings\", from the north."

str
cat(str)

# Output
[1] "We are the so-called \"Vikings\", from the north."
We are the so-called "Vikings", from the north.
```

用cat()合并

| Code     | Result         |
|----------|----------------|
| `\\`     | 反斜杠          |
| `\n`     | 换行符          |
| `\r`     | 回车符          |
| `\t`     | 制表符          |
| `\b`     | 退格符          |
| `\"`     | 引号（双引号）   |

## If-else

```r
x <- 10
if (x > 5) {
  print("x is greater than 5")
} else if (x == 5) {
  print("x equals 5")
} else {
  print("x is less than 5")
}
```

- AND: &
- OR: |

## Loop

### while

```r
x <- 10
while (x > 5) {
  print(x)
  x <- x - 1
}
```

### For

```r
for (i in 1:10) {
  print(i)
}

# list

fruits <- list("apple", "banana", "cherry")

for (x in fruits) {
  print(x)
}

# vector

dice <- c(1, 2, 3, 4, 5, 6)

for (x in dice) {
  print(x)
}

```

Next: just like continue

```r
fruits <- list("apple", "banana", "cherry")

for (x in fruits) {
  if (x == "banana") {
    next
  }
  print(x)
}
```

```r
dice <- 1:6

for(x in dice) {
  if (x == 6) {
    print(paste("The dice number is", x, "Yahtzee!"))
  } else {
    print(paste("The dice number is", x, "Not Yahtzee"))
  }
}
```

## Function

- Creating a Function
To create a function, use the function() keyword:

```r
add <- function(x, y) {
  return(x + y)
}

add(10, 20)
```

- Argument

```r
my_function <- function(fname, lname) {
  paste(fname, lname)
}

my_function("Peter", "Griffin")
```

output

```r
[1] "Peter Griffin"
```

- Default Parameter Value

```r
my_function <- function(country = "Norway") {
  paste("I am from", country)
}

my_function("Sweden")
my_function("India")
my_function() # will get the default value, which is Norway
my_function("USA")
```

output

```r

[1] "I am from Sweden"
[1] "I am from India"
[1] "I am from Norway"
[1] "I am from USA"
```

- Return values

```r
my_function <- function(x) {
  return (5 * x)
}

print(my_function(3))
print(my_function(5))
print(my_function(9))
```

output

```r
[1] 15
[1] 25
[1] 45
```

- return multiple values

```r
my_function <- function(x, y) {
  return(x + y, x - y)
}
```

### Nested Function

```r
Nested_function <- function(x, y) {
  a <- x + y
  return(a)
}

Nested_function(Nested_function(2,2), Nested_function(3,3))
```

output

```r
[1] 10
```

```r
Outer_func <- function(x) {
  Inner_func <- function(y) {
    a <- x + y
    return(a)
  }
  return (Inner_func)
}
output <- Outer_func(3) # To call the Outer_func
output(5)
```

Example Explained
You cannot directly call the function because the Inner_func has been defined (nested) inside the Outer_func.

We need to call Outer_func first in order to call Inner_func as a second step.

We need to create a new variable called output and give it a value, which is 3 here.

We then print the output with the desired value of "y", which in this case is 5.

The output is therefore 8 (3 + 5).

### Recursion

```r
tri_recursion <- function(k) {
  if (k > 0) {
    result <- k + tri_recursion(k - 1)
    print(result)
  } else {
    result = 0
    return(result)
  }
}
tri_recursion(6)
```

output

```r
[1] 1
[1] 3
[1] 6
[1] 10
[1] 15
[1] 21
```
