# Vector

* vector是种容器，类似数组一样，但它的size可以动态改变。vector的元素在内存中连续排列，这一点跟数组一样。这意味着我们元素的索引将非常快，而且也可以通过指针的偏移来获取vector中的元素。
* 但连续排列也带来了弊端，当我们向vector中间插入一个数据时，整个vector的size变大，在内存中就需要重新分配空间，常规的做法是直接申请一个新的array，并将所有元素拷贝过去；但这么做的话，无疑太浪费时间，因此vector采用的做法是：vector会分配额外的空间，以适应size的动态增长。
* 因此，包含同样数量元素的vector和数组相比，占用的空间会更大。而且在vector最后增加或者删除一个元素，消耗的时间是一个常数值，与vector的size无关。

与其他容器（deques、lists、forward_lists）相比，vector在获取元素和对最后一个元素的操作效率上更高；但对于中间元素的操作，性能则相对较差。

## 常用方法

```cpp
1.vector<int>a                        //创建一个动态数组a，a的默认初值为0

2.vector<int >b(a)                    //将a中的元素复制到b中

3.vetcor<int>a(100)                   //将数组a的元素定义为100个，默认初始值为0

4.vector<int>a(100,6)                 //定义100个值为6的元素

5.vector<string>a(10,"null")          //定义10个值为null的元素

6.vector<string>a(10,"hello")         //定义10个值为hello的元素

7.vector<string>b(a.begin(),a.end())  //将动态数组a的元素值复制到b中
```

## 初始化

```cpp
std::vector<int> vec1;                                // 空的vector，数据类型为int
std::vector<int> vec2(4);                             // 4个值为0的vector
std::vector<int> vec3 (4,10);                         // 4个值为10的vector [10 10 10 10]
std::vector<int> vec4 (vec3.begin(),vec3.end());      // [10 10 10 10]
std::vector<int> vec5 (vec3);                         // [10 10 10 10]
std::vector<int> vec6 = {10, 20, 30, 40};             // [10 20 30 40]
```

## vector 插值

* push_back
* emplace_back
* insert
