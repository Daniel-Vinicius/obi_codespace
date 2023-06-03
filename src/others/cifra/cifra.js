var scanf_stub = require("scanf-printf-obi").scanf,
  printf_stub = require("scanf-printf-obi").sprintf,
  fgets_stub = require("scanf-printf-obi").fgets;

function scanf(format) {
  var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
  eval(res);
}

function printf(args) {
  var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
  process.stdout.write(res);
}

function fgets(args) {
  var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
  eval(res);
}

/*
------------------------------------------------------------------------------------------------------------------
*/

var alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "z",
];
var vogais = ["a", "e", "i", "o", "u"];

function isVogal(letra) {
  if (vogais.includes(letra)) {
    return true;
  } else {
    return false;
  }
}

var palavraOriginal;
scanf("%s", "palavraOriginal");

function main() {
  var palavraCifrada = "";
  for (let index = 0; index < palavraOriginal.length; index++) {
    const letra = palavraOriginal[index];
    if (isVogal(letra)) {
      palavraCifrada += letra;
    }

    if (letra == palavraOriginal[index] && !isVogal(letra)) {
      palavraCifrada += letra;
    }

    // indice da consoante
    let id;
    for (let j = 0; j < alfabeto.length; j++) if (alfabeto[j] == letra) id = j;

    let IVogalMaisProximaEsquerda = 0;
    let IVogalMaisProximaDireita = 0;

    // direitaPraEsquerda
    for (let j = id; j >= 0; j--) {
      if (isVogal(alfabeto[j])) {
        IVogalMaisProximaEsquerda = j;
        break;
      }
    }

    // esquerdaPraDireita
    for (let j = id; j < alfabeto.length; j++) {
      if (isVogal(alfabeto[j])) {
        IVogalMaisProximaDireita = j;
        break;
      }
    }

    if (!isVogal(letra)) {
      // comparamos as distâncias das vogais, e escolhemos a correta
      if (id - IVogalMaisProximaEsquerda <= IVogalMaisProximaDireita - id) {
        palavraCifrada += alfabeto[IVogalMaisProximaEsquerda];
      } else {
        palavraCifrada += alfabeto[IVogalMaisProximaDireita];
      }
    }

    //se a consoante for z, escolhemos ela
    //se nao, escolhemos a proxima consoante no alfabeto.
    if (!isVogal(letra)) {
      if (id == alfabeto.length - 1)
        palavraCifrada += alfabeto[alfabeto.length - 1];
      else {
        for (let j = id + 1; j < alfabeto.length; j++) {
          if (!isVogal(alfabeto[j])) {
            palavraCifrada += alfabeto[j];
            break;
          }
        }
      }
    }
  }

  printf("%s\n", palavraCifrada);
  return null;
}
main();
