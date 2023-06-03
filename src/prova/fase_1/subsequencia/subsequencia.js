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

var n_A;
var n_B;
scanf("%d", "n_A");
scanf("%d", "n_B");

var A = [];

for (let index = 0; index < n_A; index++) {
  var a;
  scanf("%d", "a");
  A.push(a);
}

var B = [];

for (let index = 0; index < n_B; index++) {
  var b;
  scanf("%d", "b");
  B.push(b);
}

var result = "";
var bIndexAnterior = 0;

console.log(A, B);

var B_inclui_A = [];

A.map((a) => {
  if (B.includes(a) == true) {
    B_inclui_A.push(true);
    var bIndex = B.findIndex((b) => b == a);

    if (bIndex > bIndexAnterior || (bIndex == 0 && bIndexAnterior == 0)) {
      result = "S";
      bIndexAnterior = bIndex;
    } else {
      result = "N";
    }
  }
});

if (B_inclui_A.length != B.length) {
  result = "N";
}

printf("%s\n", result);

return 0;
