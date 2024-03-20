# 字符串操作
<!-- vscode-markdown-toc -->
* 1. [输入字符串](#-1)
* 2. [输出字符串](#-1)
* 3. [字符串长度](#-1)
* 4. [字符串分割](#-1)
* 5. [字符串比较](#-1)
* 6. [字符串赋值](#-1)
* 7. [判断字符串是否为空](#-1)
* 8. [字符串拼接](#-1)
* 9. [单字符操作](#-1)
* 10. [类型转换](#-1)
  * 10.1. [c++ string -> c string](#cstring-cstring)
  * 10.2. [整型<->字符串](#-)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name=''></a>输入字符串

* 1. getchar() 读取单个字符
* 2. fgets(数组名, 字符个数, stdin) 读入到数组中(stdin 系统已经定义好)，遇回车结束

```cpp
char ch[100];
fgets(ch, 100, stdin);
```

* 3. getline(cin, 字符串名) 读入一个字符串，可以接收空格和回车

```cpp
string s;
getline(cin ,s);
```

* 4. cin.get(字符变量名) 获取一个字符 cin.get(数组名, 字符个数) 接收字符串
* 可以获取空格，遇回车结束

```cpp
char ch[100];
cin.get(ch, 100);
```

## 2. <a name='-1'></a>输出字符串

* 1. puts(字符串地址)
* 2. printf("%s", 字符串名.c_str())
* 3. cout << 字符串名

```cpp
********************************
string str = "123";
puts(str + 1);
********************************
char s[100];
fgets(s, 100, stdin);
printf("%s", s.c_str());
********************************
char a[] = "123";
cout << a;
string s = "123";
cout << s;
********************************
```

## 3. <a name='-1'></a>字符串长度

* 1. 数组： strlen(数组名)
* 2. 字符串： size()

```cpp
********************************
char s[100];
fgets(s, 100, stdin);
cout << strlen(s);
********************************
string str = "123";
cout << str.size();
********************************
```

## 4. <a name='-1'></a>字符串分割

* 1. substr(起始位置, 结束位置) 截取字符串，从起始位置开始到结束位置
substr的函数格式（俗称：字符截取函数）

```cpp
substr(string string, int a, int b);
1. string 需要截取的字符串
2. a 截取字符串的开始位置（注：当a等于0或1时，都是从第一位开始截取）
3. b 要截取的字符串的长度
```

```cpp
substr(string string, int a) ;
1、string 需要截取的字符串
2、a 可以理解为从第a个字符开始截取后面所有的字符串。
```

```cpp
string str = "123456";
cout << str.substr(0, 3);
### 输出结果是 "123"
```

## 5. <a name='-1'></a>字符串比较

* 1. strcmp(a, b) 比较 char 数组 a 和 b 的字典序大小，a < b 返回负数，a == b 返回 0，a > b 返回正数

```cpp
char a[] = "abc";
char b[] = "abdc";
cout << strcmp(a, b);
### 结果是 -1
```

* 2. string 支持 >、<、>=、<=、==、!= 等所有比较操作，按字典序比较

## 6. <a name='-1'></a>字符串赋值

* 1. strcpy(a, b) 将 char 数组 b 赋值给 a

```cpp
char a[] = "123";
char b[] = "456";
strcpy(a, b);
```

## 7. <a name='-1'></a>判断字符串是否为空

* 1. empty() 为空返回1，不为空返回0

```cpp
string s1, s2 = "abc";
cout << s1.empty() << " " << s2.empty();
### 输出1 0
```

## 8. <a name='-1'></a>字符串拼接

* 用‘+’号

```cpp
string s1 = "abc", s2 = "def";
string s3 = s2 + s1;
cout << s3 << endl;
string s4 = s3 +"ghi";
cout << s4 << endl;
### 结果是
### defabc
### defabcghi
```

## 9. <a name='-1'></a>单字符操作

* 1. string.front() 取字符串第一个字符
* 2. string.back() 取字符串最后一个字符
* 3. string.pop_back() 删除字符串最后一个字符，将其长度 - 1
* 4. string.find(s1) 在字符串找到 s1 的位置
* 5. string.push_back(ch) 在字符串之后插入单个字符 ch

```cpp
********************************
string s = "abc 123 456";
cout << s.front() << endl; // a
1
2
********************************
string s = "abc 123 456";
cout << s.back() << endl; // 6
1
2
********************************
string s = "abc 123 456";
s.pop_back();
cout << s; // abc 123 45
1
2
3
********************************
string s = "abc";
int k = s.find("d");
cout << k << endl; // 返回 -1
k = s.find("b");
cout << k << endl; // 返回 1
1
2
3
4
5
********************************
string s = "abc";
s.push_back('d');
cout << s;
// 输出 abcd
********************************
```

## 10. <a name='-1'></a>类型转换

### 10.1. <a name='cstring-cstring'></a>c++ string -> c string

>c_str()就是将C++的string转化为C的字符串数组，c_str()生成一个const char *指针，指向字符串的首地址 </br>因为在c语言中没有string类型，必须通过string类对象的成员函数 c_str() 把 string 转换成c中的字符串样式

* 对于一个字符串 str ，调用 c_str() 把 string 转换成 const char* 类型

```cpp
#include<iostream>
#include<cstring>
using namespace std;

int main() {
    const char *ptr;
    string s = "12345";
    ptr = s.c_str();
    cout << "s改变前ptr为：" << ptr << endl;
    s = "66666";
    cout << "s改变后ptr为：" << ptr << endl;
    return 0;
}
```

### 10.2. <a name='-'></a>整型<->字符串

* 整型->字符串

```cpp
char* itoa(int value,char*string,int radix);
value: 要转换的整数，string: 转换后的字符串,radix: 转换进制数，如 2,8,10,16 进制等。
```

```cpp
#include<iostream>
#include<cstring>
using namespace std;

int main() {
    int num = 123456789;
    string s = to_string(num);
    cout << s << endl;
    return 0;
}
```

* 字符串->整型

```cpp
int atoi(const char *nptr); // 此处的字符串是字符型数组
字符串转整数函数，nptr: 要转换的字符串
```

```cpp
int stoi(const *string)  //此处字符串是字符串
字符串转整数函数，nptr: 要转换的字符串
```

>stoi() 会对转化后的数进行检查，判断是否会超出 int 范围，如果超出范围就会报错；
>atoi() 不会对转化后的数进行检查，超出上界，输出上界，超出下界，输出下界；
