num <- 0
repeat {
  if (num > 100) {
    break()
  }
  print(dbinom(num, 10, 0.01)) # nolint
  # print("XJHGYS") # nolint
  num <- num + 1 # nolint: commented_code_linter.
}

x <- seq(0, 10) # x为非负整数，表达次数。
size <- 10
prob <- 0.01
y <- dbinom(x, size, prob)
print(y)
