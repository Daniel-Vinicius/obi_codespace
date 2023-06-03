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

var A;
var B;
var C;

function main() {
  scanf("%d", "A");
  scanf("%d", "B");
  scanf("%d", "C");

  let idadeMin = Math.min(A, B, C);
  let idadeMax = Math.max(A, B, C);
  let idadeMeio = 0;

  if (A !== idadeMin && A !== idadeMax) idadeMeio = A;
  if (B !== idadeMin && B !== idadeMax) idadeMeio = B;
  if (C !== idadeMin && C !== idadeMax) idadeMeio = C;
  else {
    idadeMeio = idadeMin;
  }

  printf("%s\n", idadeMeio);

  return null;
}

main();
