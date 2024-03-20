# 语法

## 注释

* 单行注释

``` cpp
//单行注释
```

* 多行注释

``` cpp
/**/
```

```cpp
#include <iostream> 
#include <string>
using namespace std;
// 程序的主函数
int main()
{
    string s1 = "Bob:";
    string s2("hellow world!");
    for (int i = 0; i < s1.size(); i++)
    {
        cout << s1[i];
    }
    cout << endl;
    for (int i = 0; i < s2. ize(); i++)
    {
        cout << s2[i];
    }
    cout << endl;

    cout << s1 + s2 << endl;
    s1.insert(s1.size(),"you say ");
    cout << s1 + s2 << endl;
    system("pause");
    return 0;
}
```

## 变量

数据类型 变量名 = 数值

## 常量

* \#define (宏) (函数外)
   //#define Day 7
* const (函数内)
   // const int month=12;
