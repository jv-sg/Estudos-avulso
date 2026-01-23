//Estacionamento
class Saldo{
    #tempo
    constructor(){
        console.log("Entrou no construtor do saldo");
        this.#tempo = 0
    }

    //Metodos
    adicionarTempo(tempoAd){
        console.log("Adicionar tempo no saldo "+ tempoAd);
        this.#tempo += tempoAd
    }

    existeTempoNoValor(tempoAd){
        console.log("Existe saldo? "+ 1.00 <= tempoAd);
        return tempoAd <= this.#tempo
    }

    get tempo(){
        console.log("Retornar: "+ this.#tempo);
        return this.#tempo
    }
}

class Cancela{
    constructor(valor){
        console.log("Entou no construtor da Cancela "+ valor.value);
        this.valor = valor;
    }

    adicionar(){
        const valorDaHora = parseFloat(document.getElementById("valor").value);
        let troco = 0
        console.log("Valor de entrada "+ valorDaHora);
        

        if(valorDaHora >= 1.00){
            console.log("primeira condição se é maior ou igual a 1 "+ valorDaHora >= 1.00);
            if(valorDaHora >= 1.00 && valorDaHora <= 1.74){
                this.valor.adicionarTempo(30)
                troco = valorDaHora - 1;
                this.mostrarTroco(troco)
                this.mostrarSaldo(this.valor.tempo)
            }
            else if(valorDaHora >= 1.75 && valorDaHora <= 2.99){
                this.valor.adicionarTempo(60)
                troco = valorDaHora - 1.75;
                this.mostrarTroco(troco)
                this.mostrarSaldo(this.valor.tempo)
            }
            else if (valorDaHora >= 3){
                this.valor.adicionarTempo(120)
                troco = valorDaHora - 3;
                this.mostrarTroco(troco)
                this.mostrarSaldo(this.valor.tempo)
            }
        }else{
            alert("saldo insuficiente")
        }
        
    }

    mostrarSaldo(tempo){
        document.getElementById("valor-a-pagar").textContent = `Tempo: ${tempo}min`;
        document.getElementById("valor").value = "";
    }

    mostrarTroco(troco){
        document.getElementById("troco").textContent = `Seu troco: R$ ${troco}`;
    }
}

const adTempo = new Saldo();
const cancela = new Cancela(adTempo)