"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
Object.defineProperty(exports, "__esModule", { value: true });
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo && botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        var valorASomar = Number(soma.value);
        somaSaldo(valorASomar);
    });
    botaoLimpar.addEventListener('click', function () {
        limparS();
    });
    function somaSaldo(valor) {
        var valorCampoSaldo = 0;
        if (campoSaldo.innerText !== "") {
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        var totalSomado = valorCampoSaldo + valor;
        campoSaldo.innerText = totalSomado.toString();
    }
    function limparS() {
        campoSaldo.innerHTML = '0';
    }
}
