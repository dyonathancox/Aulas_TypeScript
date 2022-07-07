// Como podemos melhorar o esse código usando TS? 

enum Trabalho {
    Atriz,
    Metaleiro,
    Desenvolvedor
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Melissa',
    idade: 29,
    profissao: Trabalho.Desenvolvedor
};

let pessoa2: Humano = {
    nome: 'Claudio',
    idade: 19,
    profissao: Trabalho.Metaleiro
};

let pessoa3: Humano = {
    nome: 'Ana',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Lucas",
    idade: 19,
    profissao: Trabalho.Metaleiro
}