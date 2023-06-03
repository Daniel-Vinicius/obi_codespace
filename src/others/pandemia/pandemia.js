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

var total_amigos;
var total_dias_reuniao;
var id_amigo_infectado;
var n_primeira_reuniao_infectado;
scanf("%d", "total_amigos");
scanf("%d", "total_dias_reuniao");
scanf("%d", "id_amigo_infectado");
scanf("%d", "n_primeira_reuniao_infectado");

var reunioes = [];

for (let index = 0; index < total_dias_reuniao; index++) {
  // reuniao_info: [totalDaReuniao, amigo1, amigo2, ...]
  var totalDaReuniao;
  scanf("%d", "totalDaReuniao");
  let presentes = [];

  for (let index = 0; index < totalDaReuniao; index++) {
    var reuniao_amg;
    scanf("%d", "reuniao_amg");
    presentes.push(reuniao_amg);
  }

  reunioes.push([totalDaReuniao].concat(presentes));
}

function main() {
  let infectadosAteAgr = [];
  let infectados = [];

  function isInfectado(id, n_reuniao) {
    if (id === id_amigo_infectado && n_reuniao == n_primeira_reuniao_infectado)
      return true;

    if (infectadosAteAgr.includes(id)) return true;
    else return false;
  }

  reunioes.map(function (reuniao, indexReuniao) {
    let presentesReuniao = reuniao[0];
    let infectado = 0;

    for (let index = 1; index <= presentesReuniao; index++) {
      let id_amigo = reuniao[index];

      if (isInfectado(id_amigo, indexReuniao + 1)) {
        infectado = id_amigo;
      }
    }

    if (infectado != 0) {
      for (let index = 1; index <= presentesReuniao; index++) {
        let id_amigo = reuniao[index];
        infectadosAteAgr.push(id_amigo);
      }
    }
  });

  infectadosAteAgr.map(function (id) {
    let jaEstaNaListaDeInfectados = infectados.includes(id);

    if (jaEstaNaListaDeInfectados === false) {
      infectados.push(id);
    }
  });

  printf("%s\n", infectados.length);

  return null;
}

main();
