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

scanf("%d", "A");
scanf("%d", "B");

printf("%d\n", A);

return 0;
