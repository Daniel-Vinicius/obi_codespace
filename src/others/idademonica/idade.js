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

var monica;
var filho1;
var filho2;
scanf("%d", "monica");
scanf("%d", "filho1");
scanf("%d", "filho2");

function main() {
  let maisVelho = monica - (filho1 + filho2);

  printf("%d\n", maisVelho);

  return null;
}

main();
