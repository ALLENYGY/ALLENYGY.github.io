# Final Review

## Find all the candidate keys

1. 分出
   - L
   - R
   - LR
2. 依次遍历
   - L
   - L+LR

## Decompose the schema in BCNF

## Is Loss-less join Decompositon

## Is Dependency Preservation

## Find canonical cover of the functional dependencies

- 函数右部依赖分解为单属性
- 消除冗余属性
- 消除冗余的函数依赖

## Decompose the schema in 3NF

- Fm
- 合并左部相同
- 每个FD构成新的R
- 在构成的R中如果每个R都不存在 R 的候选键，那么把 R 的候选键作为一个模式放入模式集
