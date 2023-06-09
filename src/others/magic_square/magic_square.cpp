#include <bits/stdc++.h>

using namespace std;

int dimension;
int squareMatrix[15][15] = {};

int main()
{

  cin >> dimension;

  // populateMatrix
  for (int row = 1; row <= dimension; row++)
  {
    for (int column = 1; column <= dimension; column++)
    {
      cin >> squareMatrix[row][column];
    }
  }

  // Bellow will return 0, I populated the matrix starting from 1, not the standard of an array (0)
  // cout << "Matrix[0][0]" << squareMatrix[0][0] << endl;

  // the 0 is the illegible number
  int rowCoordinateIllegibleNumber;
  int columnCoordinateIllegibleNumber;

  for (int i = 1; i <= dimension; i++)
  {
    for (int j = 1; j <= dimension; j++)
    {
      int currentValue = squareMatrix[i][j];
      if (currentValue == 0)
      {
        rowCoordinateIllegibleNumber = i;
        columnCoordinateIllegibleNumber = j;
      }
    }
  }

  int magicSquareSum = 0;
  // if illegibleNumber is in first line, gets the sum in second line
  if (rowCoordinateIllegibleNumber == 1)
  {
    for (int i = 1; i <= dimension; i++)
    {
      magicSquareSum += squareMatrix[2][i];
    }
  }
  else
  {
    for (int i = 1; i <= dimension; i++)
    {
      magicSquareSum += squareMatrix[1][i];
    }
  }

  int sumOfRowOfIllegibleNumber = 0;
  for (int i = 1; i <= dimension; i++)
  {
    sumOfRowOfIllegibleNumber += squareMatrix[rowCoordinateIllegibleNumber][i];
  }

  int illegibleNumber = magicSquareSum - sumOfRowOfIllegibleNumber;

  cout << illegibleNumber << endl;
  cout << rowCoordinateIllegibleNumber << endl;
  cout << columnCoordinateIllegibleNumber << endl;

  return 0;
}