# Prime Sieve *质数筛*

## **Eratosthenes Sieve**  *埃拉托斯特尼筛法*

```cpp
vector<int> prime;
bool is_prime[N];
void Eratosthenes(int n) {
	is_prime[0] = is_prime[1] = false;
	for (int i = 2; i <= n; ++i) is_prime[i] = true;
	for (int i = 2; i <= n; ++i) { 
		if (is_prime[i]) { prime.push_back(i); 
		if ((long long)i * i > n) continue; 
		for (int j = i * i; j <= n; j += i) 
		// 因为从 2 到 i - 1 的倍数我们之前筛过了，这里直接从 i 
		// 的倍数开始，提高了运行速度 
		is_prime[j] = false; 
		// 是 i 的倍数的均不是素数 
		}
	 } 
}
```

## **Euler Sieve** *欧拉筛*

```cpp
vector<int> pri; 
bool not_prime[N]; 
void pre(int n) { 
	for (int i = 2; i <= n; ++i) { 
		if (!not_prime[i]) pri.push_back(i);
		for (int pri_j : pri) { 
			if (i * pri_j > n) break; 
			not_prime[i * pri_j] = true; 
			if (i % pri_j == 0) { 
				// i % pri_j == 0 
				// 换言之，i 之前被 pri_j 筛过了 
				// 由于 pri 里面质数是从小到大的，所以 i 乘上其他的质数的结果一定会被 
				// pri_j 的倍数筛掉，就不需要在这里先筛一次，所以这里直接 break 
				// 掉就好了 
				break; 
			} 
		} 
	} 
}
```

## 例题

[204. 计数质数](https://leetcode.cn/problems/count-primes/)
