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

var vitorias = 0;

for (let index = 0; index < 6; index++) {
  var rAtual;
  scanf("%s", "rAtual");

  if (rAtual == "V") {
    vitorias += 1;
  }
}

function main() {
  if (vitorias >= 5) {
    printf("%d\n", 1);
  } else if (vitorias < 5 && vitorias >= 3) {
    printf("%d\n", 2);
  } else if (vitorias < 3 && vitorias >= 1) {
    printf("%d\n", 3);
  } else {
    printf("%d\n", -1);
  }

  return null;
}

main();
