#include<iostream>
#include<numeric>
#include<vector>

using namespace std;

int main() {
    //!array
    // int number[10]={1};
    // cout<<"Helloworld!"<<endl;
    // iota(number, number + 10, 66);
    // for (int i = 0; i < 10; i++) {
    // cout << number[i] << " ";
    // //*输出：66 67 68 69 70 71 72 73 74 75
    // }
    //!vector
    vector<int>number(10);

    iota(number.begin(), number.end(), 66);
    for (int i = 0; i < 10; i++) {
        cout << number[i] << " ";
        //* 输出：66 67 68 69 70 71 72 73 74 75
    }
    return 0;
}

