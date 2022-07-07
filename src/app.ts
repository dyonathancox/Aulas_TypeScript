/*let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest =anyEstaDeVolta;

let unknownValor: unknown // unknown - somos obrigados a fazer uma validação para garantir que o que tem na propriedade é o que esperamos receber
unknownValor = 3;
unknownValor = 'opa'
unknownValor = true
unknownValor = 'agora sim'

let stringTest2: string = 'agora vai';
stringTest2 = unknownValor;

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}
*/
function jogaErro(erro: string, codigo: number): never{
    throw{error: erro, code: codigo}
}

jogaErro('Deu erro', 500)