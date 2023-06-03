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
// O Tempo de Resposta de uma mensagem é o tempo que se passa entre o recebimento da mensagem por Sara e o envio da resposta a essa mensagem por Sara.
// Tempo de Resposta Total para esse amigo é a soma dos Tempos de Respostas para as mensagens desse amigo;
// caso contrário o Tempo de Resposta Total para esse amigo é -1.
//  Dada a lista de registros do aplicativo de Sara, sua tarefa é determinar o Tempo de Resposta Total para cada amigo.

var n_registros;
scanf("%d", "n_registros");

var registros = [];
for (let index = 1; index <= n_registros; index++) {
  // R(recebeu msg de fulano), E(enviou msg pra fulano), T(x segundos entre registro anterior e posterior, não esquecer que por padrão já tem 1 segundo)
  var tipo_registro;
  var n_registro;
  scanf("%s", "tipo_registro");
  scanf("%d", "n_registro");

  let registro = {
    tipo_registro: tipo_registro,
    n_registro: n_registro,
  };
  registros.push(registro);
}

function main() {
  var pendentesResposta = [];
  var tempoRespostaTotalPorAmg = [];

  function jaEstaNaListaFinal(id_amg) {
    let registroAmg = tempoRespostaTotalPorAmg.find(function (data) {
      return data.id_amg == id_amg;
    });

    if (registroAmg) return true;
    else return false;
  }

  function naoFoiRespondido(id_amg) {
    let registroAmg = pendentesResposta.find(function (data) {
      return data.id_amg == id_amg;
    });

    if (registroAmg) return true;
    else return false;
  }

  registros.map(function (registro) {
    let tipo_registro = registro.tipo_registro;

    if (tipo_registro == "R") {
      let id_amg = registro.n_registro;
      pendentesResposta.push({
        id_amg: id_amg,
        tempo: 1,
      });
    }

    if (tipo_registro == "T") {
      let tempo = registro.n_registro;
      pendentesResposta.map(function (pendente) {
        pendente.tempo += tempo;
      });

      tempoRespostaTotalPorAmg.map(function (data) {
        data.tempo += tempo;
      });
    }

    if (tipo_registro == "E") {
      let id_amg = registro.n_registro;
      pendentesResposta.map(function (pendente, index) {
        if (pendente.id_amg == id_amg) {
          if (jaEstaNaListaFinal(id_amg) == true) {
            let registroAmgIndex = tempoRespostaTotalPorAmg.findIndex(function (
              data
            ) {
              return data.id_amg == id_amg;
            });

            tempoRespostaTotalPorAmg[registroAmgIndex].tempo += 1;
          }

          if (jaEstaNaListaFinal(id_amg) == false) {
            tempoRespostaTotalPorAmg.push({
              id_amg: pendente.id_amg,
              tempo: pendente.tempo,
            });
          }

          pendentesResposta.splice(index, 1);
        }
      });
    }
  });

  tempoRespostaTotalPorAmg.map(function (data) {
    if (naoFoiRespondido(data.id_amg) == true) {
      printf("%d ", data.id_amg);
      printf("%d\n", -1);
    } else {
      printf("%d ", data.id_amg);
      printf("%d\n", data.tempo);
    }
  });

  return null;
}

main();
