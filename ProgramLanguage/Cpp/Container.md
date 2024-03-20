# 容器

>非关联式容器

* vector
* deque
* list
* array
* string

>关联式容器

* map
* set

## *Vector* (向量)

* 长度可变
* 在尾部增删数据的时候效率最高，其他位置增删数据则效率较低

```cpp
#include <iostream> 
#include <vector> 
using namespace std;
// 程序的主函数
int main()
{
    vector<int> V;
    V.push_back(1);
    V.push_back(2);
    V.push_back(1);
    V.push_back(2);
    cout << V[0] << endl;
    system("pause");
    return 0;
}
```

### 嵌套

```cpp
int main()
{
    vector<vector<int>> V;
    vector<int> sub_V;
    sub_V.push_back(1);
    sub_V.push_back(2);
    sub_V.push_back(1);
    V.push_back(sub_V);
    cout << V[0][1] << endl;
    system("pause");
    return 0;
}
```

### 基础操作

```cpp
    int size = vec1.size();         //元素个数
 
    bool isEmpty = vec1.empty();    //判断是否为空
 
    vec1.insert(vec1.end(),5,3);    //从vec1.back位置插入5个值为3的元素
 
    vec1.pop_back();              //删除末尾元素
 
    vec1.erase(vec1.begin(),vec1.end());//删除之间的元素，其他元素前移
 
    cout<<(vec1==vec2)?true:false;  //判断是否相等==、！=、>=、<=...
 
    vector<int>::iterator iter = vec1.begin();    //获取迭代器首地址
 
    vector<int>::const_iterator c_iter = vec1.begin();   //获取const类型迭代器
 
    vec1.clear();                 //清空元素
```

* 例子

```cpp
#include <iostream> 
#include <vector> 
using namespace std;
// 程序的主函数
int main()
{
    vector<int> V;
    V.push_back(1);
    V.push_back(2);
    V.push_back(3);
    for (vector<int>::iterator it = V.begin(); it != V.end(); it++)
        cout << *it << " ";
    cout << endl;
    cout << "==========================" << endl;
    V.insert(V.begin() + 2,10);
    for (vector<int>::iterator it = V.begin(); it != V.end(); it++)
        cout << *it << " ";
    system("pause");
    return 0;
}
input: 1 2 3
output: 1 2 10 3
```

## *Deque*

* 从前后两端都可以进行数据的插入和删除操作，同时支持数据的快速随机访问

```cpp
#include <iostream> 
#include <deque> 
using namespace std;
// 程序的主函数
int main()
{
    deque<int> D;
    D.push_back(1);
    D.push_back(2);
    D.push_back(3);
    for (deque<int>::iterator it = D.begin(); it != D.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    cout << "============在其索引2的位置插入10：" << endl;
    D.insert(D.begin() + 2,10);
    for (deque<int>::iterator it = D.begin(); it != D.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    cout << "============在其头部插入0：" << endl;
    D.push_front(0);
    for (deque<int>::iterator it = D.begin(); it != D.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    cout << "============在其头部弹出0：" << endl;
    D.pop_front();
    for (deque<int>::iterator it = D.begin(); it != D.end(); it++)
    {
        cout << *it << " ";
    }
    system("pause");
    return 0;
}
```

## *List*

* 列表是用双向链表实现的，所谓的双向链表，指的是既可以从链表的头部开始搜索找到链表的尾部，也可以进行反向搜索，从尾部到头部。

>这使得list在任何位置插入和删除元素都变得非常高效，但是随机访问速度变得非常慢，因为保存的地址是不连续的，所以list没有重载[]运算符，也就是说，访问list元素的时候，再也不像向量和双端队列那么方便，不可以像我们以前在C语言的时候，访问数组那样对其元素进行访问。

```cpp
#include <iostream> 
#include <list> 
using namespace std;
// 程序的主函数
int main()
{
    //list的创建和初始化
    list<int> lst1;          //创建空list
    list<int> lst2(3);       //创建含有三个元素的list
    list<int> lst3(3, 2); //创建含有三个元素的值为2的list
    list<int> lst4(lst3);    //使用lst3初始化lst4
    list<int> lst5(lst3.begin(), lst3.end());  //同lst4
    cout << "lst4中的元素有：" << endl;
    for (list<int>::iterator it = lst4.begin(); it != lst4.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
    cout << "lst5中的元素有：" << endl;
    for (list<int>::iterator it = lst5.begin(); it != lst5.end(); it++)
    {   
        cout << *it << " ";
    }
    cout << endl;
    system("pause");
    return 0;
}
```

>由于list的底层是双向链表，因此insert操作无法直接像向量和双端队列一样直接插入数据，只能通过迭代器的自加移动到相应位置，再插入数据。

## *Array*

```cpp
#include <iostream> 
#include <string>
#include <array>
using namespace std;
// 程序的主函数
int main()
{
    array<int, 4> arr = {1, 3, 2};
    cout << "arr values:" << std::endl;
    for (array<int, 4>::iterator it = arr.begin(); it != arr.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    cout << "sizeof(arr) = " << sizeof(arr) << endl;
    cout << "size of arr = " << arr.size() << endl;
    cout << "max size arr = " << arr.max_size() << endl;
    cout << "empty = " << (arr.empty() ? "no" : "yes") << endl;
    system("pause");
    return 0;
}
```

## *string*

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

## *Map*

* map容器通过键值对的方式来存储和访问数据的，底层是通过红黑树来实现的。先来看个map的创建以及初始化的例子。

```cpp
#include <iostream> 
#include <map> 
#include <string>
using namespace std;
// 程序的主函数
int main()
{
    //map的创建和初始化
    //第一种：用insert函数插入pair数据：
    map<int, string> my_map;
    my_map.insert(pair<int, string>(1, "first"));
    my_map.insert(pair<int, string>(2, "second"));
    //第二种：用insert函数插入value_type数据：
    my_map.insert(map<int, string>::value_type(3, "first"));
    my_map.insert(map<int, string>::value_type(4, "second"));
    //第三种：用数组的方式直接赋值：
    my_map[5] = "first";
    my_map[6] = "second";
    map<int, string>::iterator it;           //迭代器遍历
    for (it = my_map.begin(); it != my_map.end(); it++)
        cout << it->first << "->" <<it->second << endl;
    system("pause");
    return 0;
}
```

* map元素的删除

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;

void printMap(const map<string, int>& students)
{
    for (auto ii = students.begin(); ii != students.end(); ii++)
    {
        cout << "姓名:" << ii->first
        << " \t诗作: " << ii->second << "篇"
        << endl;
    }
    cout << endl;
}

int main(int argc, char* argv[]) {
    map<string, int> students;
    students["李白"] = 346;
    students["杜甫"] = 300;
    students["王维"] = 200;
    students["李商隐"] = 113;
    students["杜牧"] = 156;
    cout << "原map:" << endl;
    printMap(students);

    students.erase("李白");
    cout << "删除 李白 后：" << endl;
    printMap(students);

    students.erase(std::begin(students));
    cout << "删除第一个元素后：" << endl;
    printMap(students);

    map<string, int>::iterator iter = students.find("杜牧");
    students.erase(iter);
    cout << "删除杜牧后：" << endl;
    printMap(students);
    system("pause");
    return 0;
}
```

## unordered_map

* unordered_map是一个关联容器，内部采用的是哈希链表的结构，拥有快速检索的功能。
    1. 关联性：通过key的值去检索value,二不是通过绝对地址；
    2. 无序性：使用hash表储蓄，内部无序；
    3. map:每个值对应一个键值；
    4. 键唯一性：不存在两个元素的键一模一样；
    5. 动态内存管理：也就是hash链表管理，动态管理内存空间，

```cpp
//unordered_map用法
//创建:
unordered_map <char,int>m; //char为key类型，int为value类型
unordered_map <char,int>::iterator it;//创建一个名字为it的迭代器；
m[k]=i;//元素赋值
m.begin();//元素迭代
m.end();//指向map尾巴后，并不存在的元素
if(m.empty())//空
m.insert(pair<char,int>)//插入
m.erase('a')；//删除
it=m.find('a');//若为找到为m.end()
//关于count的用法
m.count('a');//当存在这个值的时候，返回值为1，否则为0，与find()意义相同

```

## *Set*

* set也是一种关联性容器，它同map一样，底层使用红黑树实现，插入删除操作时仅仅移动指针即可，不涉及内存的移动和拷贝，所以效率比较高。从中文名就可以明显地看出，在set中不会存在重复的元素，若是保存相同的元素，将直接视为无效

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;

void printMap(const map<string, int>& students)
{
    for (auto ii = students.begin(); ii != students.end(); ii++)
    {
        cout << "姓名:" << ii->first
            << " \t诗作: " << ii->second << "篇"
            << endl;
    }
    cout << endl;
}

int main(int argc, char* argv[]) {
    map<string, int> students;
    students["李白"] = 346;
    students["杜甫"] = 300;
    students["王维"] = 200;
    students["李商隐"] = 113;
    students["杜牧"] = 156;
    cout << "原map:" << endl;
    printMap(students);

    students.erase("李白");
    cout << "删除 李白 后：" << endl;
    printMap(students);

    students.erase(std::begin(students));
    cout << "删除第一个元素后：" << endl;
    printMap(students);

    map<string, int>::iterator iter = students.find("杜牧");
    students.erase(iter);
    cout << "删除杜牧后：" << endl;
    printMap(students);
    system("pause");
    return 0;
}
```
