"use strict";
// Como podemos melhorar o esse código usando TS? 
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Metaleiro"] = 1] = "Metaleiro";
    Trabalho[Trabalho["Desenvolvedor"] = 2] = "Desenvolvedor";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: 'Melissa',
    idade: 29,
    profissao: Trabalho.Desenvolvedor
};
var pessoa2 = {
    nome: 'Claudio',
    idade: 19,
    profissao: Trabalho.Metaleiro
};
var pessoa3 = {
    nome: 'Ana',
    idade: 32,
    profissao: Trabalho.Atriz
};
var pessoa4 = {
    nome: "Lucas",
    idade: 19,
    profissao: Trabalho.Metaleiro
};
