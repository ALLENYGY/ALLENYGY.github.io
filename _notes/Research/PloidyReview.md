---
created: 2024-01-20T11:18
updated: 2024-03-21T12:40
---
# Review

- 求断点
- 预处理断点数据
- 求极值

## 断点

- $V_i\ i \in [0,n]$  
	$\lfloor \rho V_i+0.5\rfloor = z, z \in \mathbb{Z}$
- $\rho = \frac{n-0.5}{V_i}$

$(\rho V_0- \lfloor \rho V_0+0.5\rfloor)^2+(\rho V_1- \lfloor \rho V_1+0.5\rfloor)^2+...+(\rho V_i- \lfloor \rho V_i+0.5\rfloor)^2$

## 预处理断点数据

- 对每个断点算出所有的 $\lfloor\rho V_i+0.5\rfloor$
- $\because V_i$ 已知
$\therefore$ 给定 $\rho$ 的每一组 $\lfloor\rho V_i+0.5\rfloor$ 可求

## 求极值

$let\ k_i=\lfloor \rho V_i+0.5\rfloor \ i \in [0,n]$

$(\rho V_0- \lfloor \rho V_0+0.5\rfloor)^2+(\rho V_1- \lfloor \rho V_1+0.5\rfloor)^2+...+(\rho V_i- \lfloor \rho V_i+0.5\rfloor)^2$

$= (\rho V_0- k_0)^2+ (\rho V_1- k_1)^2+...+ (\rho V_i- k_i)^2$

$= (\rho^2 V_0^2 - 2 \rho k_0 V_0 + k_0^2) + (\rho^2 V_1^2 - 2 \rho k_0 V_1 + k_1^2) + \ldots + (\rho^2 V_i^2 - 2 \rho k_i V_i + k_i^2)$

$= \rho^2 (V_0^2 + V_1^2 + \ldots + V_i^2) - 2 \rho (k_0 V_0 + k_1 V_1 + \ldots + k_i V_i) + (k_0^2 + k_1^2 + \ldots + k_i^2)$

$= \rho^2 \sum_{i=0}^{n} V_i^2 - 2 \rho \sum_{i=0}^{n} k_i V_i + \sum_{i=0}^{n} k_i^2$

$let\ K = \sum_{i=0}^{n} k_i^2 , \ V = \sum_{i=0}^{n} V_i^2 \ i \in [0,n]$

$= \rho^2 V - 2 \rho \sum_{i=0}^{n} k_i V_i + K$

