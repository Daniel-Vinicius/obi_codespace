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

var n_moedas;
var n_marinheiros; // sem o capitao
// capitao recebe o dobro
// quantas o capitao deve receber?

function main() {
  scanf("%d", "n_moedas");
  scanf("%d", "n_marinheiros");

  let moedas_por_marinheiro_e_capitao = parseInt(
    n_moedas / (n_marinheiros + 2)
  );

  let n_moedas_capitao = moedas_por_marinheiro_e_capitao * 2;

  return printf("%d\n", n_moedas_capitao);
}

main();
