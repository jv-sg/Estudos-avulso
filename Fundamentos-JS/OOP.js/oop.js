//objeto literal
const pessoa = {nome: "Carlos", idade: 20 }

//Criar uma classe
class Veiculo {
    //Metodo construtor
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        //Atributo privado para indicar se o veiculo está ligado
        this._ligado = false;
    }

    //Metodos
    ligar(){
        this._ligado = true;
        console.log("Veiculo ligado")
    }
    desligar(){
        this._ligado = false;
        console.log("Veiculo desligado")
    }
}

const veiculoNovo = new Veiculo("Honda", "Civic", 2015);
veiculoNovo.ligar();
veiculoNovo.desligar();
console.log(veiculoNovo)

//Herança
class Moto extends Veiculo{
    constructor(marca, modelo, ano){
        super(marca, modelo, ano);
    }
}

const motoNova = new Moto("Yamaha", "MT-700", 2025)
console.log(motoNova)
motoNova.ligar()

class Carro extends Veiculo{
    constructor(marca, modelo, ano, numeroPortas){
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas
    }
}

const carro = new Carro("VW", "Gol", 2001, 4)
carro.desligar();
console.log(carro)