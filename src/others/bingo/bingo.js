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

var n_cartelas;
var tamanho_linha_cartela;
var maior_natural_cartela;

scanf("%d", "n_cartelas");
scanf("%d", "tamanho_linha_cartela");
scanf("%d", "maior_natural_cartela");

var cartelas = [];

for (let index = 0; index < n_cartelas; index++) {
  var cartela = [];

  for (let index = 0; index < tamanho_linha_cartela; index++) {
    var n;
    scanf("%d", "n");
    cartela.push(n);
  }

  cartelas.push(cartela);
}

var sorteados = [];
var vencedores = [];

for (let index = 0; index < maior_natural_cartela; index++) {
  var n;
  scanf("%d", "n");
  sorteados.push(n);
}

var pontuacaoCartelas = new Array();

function jaPontuou(cartela) {
  if (pontuacaoCartelas.find((cartelaP) => cartelaP.cartela == cartela)) {
    return true;
  } else return false;
}

function somaPonto(cartela) {
  pontuacaoCartelas.find((cartelaP) => cartelaP.cartela == cartela).pontos += 1;
}

function atualizaVencedores() {
  vencedores = pontuacaoCartelas.filter((cartelaP) => cartelaP.pontos == 5);
}

function verificaVencedores() {
  atualizaVencedores();

  if (vencedores.length > 0) {
    vencedores.forEach((cartelaP) => {
      let indiceCartelaVencedora = cartelas.findIndex(
        (c) => c == cartelaP.cartela
      );

      return indiceCartelaVencedora;
    });
  } else {
    return 0;
  }
}

function main() {
  for (let index = 0; index < sorteados.length; index++) {
    let n_sorteado = parseInt(sorteados[index]);

    for (let index = 0; index < cartelas.length; index++) {
      let cartelaAtual = cartelas[index];
      if (cartelaAtual.includes(n_sorteado)) {
        if (!jaPontuou(cartelaAtual)) {
          pontuacaoCartelas.push({
            cartela: cartelaAtual,
            pontos: 1,
          });
        } else {
          somaPonto(cartelaAtual);
          let indiceCartelaVencedora = verificaVencedores();
          if (indiceCartelaVencedora != 0) {
            printf("%d\n", indiceCartelaVencedora + 1);
            break;
          }
        }
      }
    }
  }

  return null;
}

main();
