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

// quantas peças de roupa são efetivamente vendidas no total

var n_tipos; // coluna matriz
var n_tamanhos; // linha matriz
scanf("%d", "n_tipos");
scanf("%d", "n_tamanhos");

// console.log(n_tipos, n_tamanhos);

var estoque = [];

for (let index = 0; index < n_tipos; index++) {
  var linha = [];
  for (let index = 0; index < n_tamanhos; index++) {
    var valor;
    scanf("%d", "valor");
    linha.push(valor);
  }
  estoque.push(linha);
}

var n_pedidos; // I, J tipo e tamanho
scanf("%d", "n_pedidos");

var pedidos = [];

for (let index = 0; index < n_pedidos; index++) {
  var tipo;
  var tamanho;
  scanf("%d", "tipo");
  scanf("%d", "tamanho");

  pedidos.push({
    tamanho: tamanho,
    tipo: tipo,
  });
}

// console.log(pedidos);

var vendasEfetivadas = 0;

// console.log(estoque, "\n", pedidos);

console.log(estoque);

pedidos.map((pedido) => {
  let produto = estoque[pedido.tipo - 1][pedido.tamanho - 1];
  if (produto > 0) {
    estoque[pedido.tipo - 1][pedido.tamanho - 1] = produto - 1;
    vendasEfetivadas += 1;
  }
});

printf("%d\n", vendasEfetivadas);

return 0;
