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

var n_quadrados_sequencia;
var valor_soma_desejada;
scanf("%d", "n_quadrados_sequencia");
scanf("%d", "valor_soma_desejada");

var sequencia = [];
var sequenciasUtilizadas = [];

for (let index = 0; index < n_quadrados_sequencia; index++) {
  var n;
  scanf("%d", "n");
  sequencia.push(n);
}

function main() {
  var soma = 0;
  let retangulos_possiveis = 0;

  function sequenciaJaUtilizada(sequencia) {
    return sequenciasUtilizadas.includes(sequencia);
  }

  sequencia.map(function (n, index) {
    soma += n;
    let sequenciaAtual = sequencia.slice(0, index);

    if (
      soma == valor_soma_desejada &&
      sequenciaJaUtilizada(sequenciaAtual) == false
    ) {
      sequenciasUtilizadas.push();
      retangulos_possiveis += 1;
    }

    if (soma > valor_soma_desejada || n == valor_soma_desejada) {
      soma = 0;
    }
  });

  printf("%d\n", retangulos_possiveis);

  return null;
}

main();
