// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

export {}
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

if(campoSaldo && botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma.value);
        somaSaldo(valorASomar)
    })
    botaoLimpar.addEventListener('click', () => {
        limparS();
    })
    function somaSaldo(valor : number): void{
        let valorCampoSaldo: number = 0;
        if(campoSaldo.innerText !== ""){
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        const totalSomado = valorCampoSaldo + valor;
        campoSaldo.innerText = totalSomado.toString();
    }
    
    function limparS(): void{
        campoSaldo.innerHTML = '0';
    }
    
}