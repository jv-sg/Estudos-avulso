//Definir classe Conta Bancaria
class ContaBancaria{
    #saldo;
    constructor(){
        this.#saldo = 0;
    }

    //Metodos
    depositar(valor){
    this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        return valor <=this.#saldo;
    }

    get saldo(){
        return this.#saldo;
    }
}

class CaixaEletronico {
    constructor(conta){
        this.conta = conta;
    }

    depositar(){
        //Pegar o valor do depósito
        const valorDepositar = parseFloat(document.getElementById("valorDeposito").value);

        //Fazer o depósito na conta
        this.conta.depositar(valorDepositar);
        //Exibir saldo atualziado
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar(){
        //Pegar valor do saque
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        //Fazer o saque na conta
        if(this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo)
        }else{
            this.mostrarSaldo("insuficiente")
        }

    }

    mostrarSaldo(saldo){
        document.getElementById("saldo").textContent = `Saldo R$ ${saldo}`;
        document.getElementById("valorDeposito").value = "";
        document.getElementById("valorSaque").value = "";
    }
}

//Criar instancias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);