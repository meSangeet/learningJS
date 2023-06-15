#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define ll long long

void isoddocc(vector<int> v)
{
 int n = v.size();
 unordered_map<int, int> m;
 for (int i = 0; i < n; i++)
 {
  /* code */
  m[v[i]]++;
 }
 cout<<"element   frequency"<<endl;
 for (auto x: m)
 {
   if(x.second%2 != 0)
   {
    cout<<x.first<<"               "<<x.second<<endl;
   }
  }
}

int main()
{
    vector<int> v;

    for(int i = 0; i<10; i++)
    {
        int p; cin>>p;
        v.push_back(p);
    }
    
    cout<<endl;
    isoddocc(v);
    
    return 0;
}