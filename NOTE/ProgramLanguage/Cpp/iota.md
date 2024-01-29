# *iota* 函数

>背景
在使用数组时，有时需要递增地给数组中每个元素赋值。
此时使用iota()函数就十分方便。

## 使用方法

* 头文件： \#include \<numeric>

* 1. 对于数组
  * 格式：

```cpp
iota(array, array+length[array], number);
```

从number开始，分别为数组array数组中各元素递增+1地赋值。

eg:

```cpp
#include<iostream>
#include<numeric>
using namespace std;

int main() {

    int number[10];

    iota(number, number + 10, 66);
    for (int i = 0; i < 10; i++) {
    cout << number[i] << " ";//输出：66 67 68 69 70 71 72 73 74 75
    }
    system("pause");
    return 0;
}
```

从number开始，分别为数组vector容器中各元素递增+1地赋值。

* 2. 对于vector
  * 格式：

```cpp
iota(vector.begin(), vector.end(), number);
```

eg:

```cpp
#include<vector>
using namespace std;

int main() {

    vector<int>number(10);

    iota(number.begin(), number.end(), 66);
    for (int i = 0; i < 10; i++) {
        cout << number[i] << " ";
        //* 输出：66 67 68 69 70 71 72 73 74 75
    }
    return 0;
}
```
