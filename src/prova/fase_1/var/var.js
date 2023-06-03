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

// 6
// -2 -> N
// 8
// 2 -> S
// Na linha é dentro
// -8 a 8 X
// 0 a 8 Y
var eixo_x;
var eixo_y;
scanf("%s", "eixo_x");
scanf("%s", "eixo_y");

var resultado = "";

var x = parseInt(eixo_x);
var y = parseInt(eixo_y);

if (x > 8 || x < -8) {
  resultado = "N";
}

if (y > 8 || y < 0) {
  resultado = "N";
}

if (y >= 0 && y <= 8 && x >= -8 && x <= 8) {
  resultado = "S";
}

printf("%s\n", resultado);

return 0;
