x <- seq(0, 5) # x为非负整数，表达次数。
lambda <- 2.39
y <- dpois(x, lambda, log = FALSE)
print(y)
