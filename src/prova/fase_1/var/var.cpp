#include <iostream>

using namespace std;

int x;
int y;

int main()
{

  cin >> x >> y;
  string resultado;

  if (x > 8 || x < -8)
  {
    resultado = "N";
  }

  if (y > 8 || y < 0)
  {
    resultado = "N";
  }

  if (y >= 0 && y <= 8 && x >= -8 && x <= 8)
  {
    resultado = "S";
  }

  cout << resultado << endl;

  return 0;
}
