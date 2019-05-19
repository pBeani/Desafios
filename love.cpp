#include <bits/stdc++.h>
#include <iostream>
#include <cstdlib>

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    int n = 0;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        string s1;
        cin >> s1;
        string s2;
        cin >> s2;
        long long a = stoll(s1, 0, 2);
        long long b = stoll(s2, 0, 2);
        long long L = __gcd(a, b);
        cout << "Pair #" << i << ": ";
        
        if(L == 1) {
            cout << "Love is not all you need!" << endl; 
        } else {
            cout << "All you need is love!" << endl;
        }
    }
    
    return (0);
}