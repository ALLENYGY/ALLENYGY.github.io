# R Data Structure

- vecotr
- list
- matrix
- array
- data frame
- factor

## Vector

A vector is simply a list of items that are of the same type.

To combine the list of items to a vector, use the c() function and separate the items by a comma.

---

```r
# Vector of strings
fruits <- c("banana", "apple", "orange")

# Print fruits
fruits
```

output:

```r
[1] "banana" "apple"  "orange"
```

---

```r
# Vector with numerical values in a sequence
numbers <- 1:10

numbers
```

output:

```r
[1]  1  2  3  4  5  6  7  8  9 10
```

---

```r
# Vector with numerical decimals in a sequence
numbers1 <- 1.5:6.5
numbers1

# Vector with numerical decimals in a sequence where the last element is not used
numbers2 <- 1.5:6.3
numbers2
```

output:

```r
[1] 1.5 2.5 3.5 4.5 5.5 6.5
[1] 1.5 2.5 3.5 4.5 5.5 6.3
```

默认步长为1，即每一个元素都相隔一个单位。

---

### Length of a vector

```r
fruits <- c("banana", "apple", "orange")

length(fruits)
```

To create a vector of numbers, use the seq() function.

```r
# Vector of numbers
numbers <- seq(1, 10)

# Print numbers
numbers
```

output

```r
[1]  1  2  3  4  5  6  7  8  9 10
```

s