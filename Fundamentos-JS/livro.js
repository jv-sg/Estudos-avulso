function saudacao(nome){
    return `Olá ${nome}`
}

console.log(saudacao('João'))

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(4, 4))

function parOuImpar(numero){
    if(numero % 2 == 0){
        console.log("numero par")
    } else{
        console.log("numero impar")
    }
}

parOuImpar(1)
parOuImpar(2)

function contagemRegressiva(inicio){
    for(i = inicio; i >= 0; i --){
        console.log(i)
    }
}

contagemRegressiva(5)

// function testeEscopo(){
//     let numero = 1
// }
// let teste = numero + 1
console.log("###############################################################################")
const estudante = {
    nome: 'joão',
    idade: 29,
    curso: 'ADS'
}

estudante.idade = 28
console.log(estudante)

estudante.semestre = 1
console.log(estudante)

let frutas = ["maça", "banana", "morango"]
frutas.push("manga")
frutas.shift()
console.log(frutas)

let stringNova = frutas.join(',')
console.log(stringNova)

let sliceNova = frutas.slice(1, 3)
console.log(sliceNova)

const numeros = [2, 3, 1, 4, 6]
let numeroMultiplos = numeros.map(num => num * num)
console.log(numeroMultiplos)