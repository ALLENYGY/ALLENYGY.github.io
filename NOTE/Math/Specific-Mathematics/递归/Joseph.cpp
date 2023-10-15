#include <bits/stdc++.h>
using namespace std;
#define int long long


int Joseph(int n){
    if(n==1) return 1;
    else if(n%2==0) return 2*Joseph(n/2)-1;
    else return 2*Joseph(n/2)+1;
}

signed main(){
    int n;
    cin>>n;
    int i=1;
    while(n--) {
        cout<<Joseph(i)<<endl;
        i++;
    }
    return 0;
}
