// var scanf_stub = require("scanf-printf-obi").scanf,
//   printf_stub = require("scanf-printf-obi").sprintf,
//   fgets_stub = require("scanf-printf-obi").fgets;

// function scanf(format) {
//   var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
//   eval(res);
// }

// function printf(args) {
//   var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
//   process.stdout.write(res);
// }

// function fgets(args) {
//   var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
//   eval(res);
// }

/*
------------------------------------------------------------------------------------------------------------------
*/

// frequencia_repouso, a frequência cardíaca em repouso do atleta
// frequencia_atual, a frequência cardíaca atual do atleta
// capacidade_oxigenacao, a capacidade de oxigenação atual do atleta.

/* diminui se frequencia_atual é maior do que 3*frequencia_repouso 
ou se capacidade_oxigenacao < 95

   aumenta se frequencia_atual é menor do que 2*frequencia_repouso
   ou se  capacidade_oxigenacao > 97

*/
var frequencia_repouso;
var frequencia_atual;
var capacidade_oxigenacao;

function main() {
  scanf("%d", "frequencia_repouso");
  scanf("%d", "frequencia_atual");
  scanf("%d", "capacidade_oxigenacao");

  if (frequencia_atual > 3 * frequencia_repouso || capacidade_oxigenacao < 95) {
    printf("%s\n", "diminuir");
  } else if (
    frequencia_atual < 2 * frequencia_repouso ||
    capacidade_oxigenacao > 97
  ) {
    printf("%s\n", "aumentar");
  } else {
    printf("%s\n", "manter");
  }

  return null;
}

main();
