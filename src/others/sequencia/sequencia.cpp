#include <bits/stdc++.h>

using namespace std;

int const maxn = 500 + 10;
int n;
int v[maxn];

int main()
{
  cin >> n;

  cin >> v[1];

  int ultimo_marcado = v[1];
  int resposta = 1;

  for (int i = 2; i <= n; i++)
  {
    cin >> v[i];

    if (v[i] != ultimo_marcado)
    {
      ultimo_marcado = v[i];
      resposta += 1;
    }
  }

  cout << resposta << endl;

  return 0;
}
