const nomes = ["joão", "bruno", "carlo", "guilherme"]

 const nomesGrandes = nomes.filter(nome => nome.length > 5)

 console.log(nomesGrandes)

const produtos = [
{ nome: "Teclado", preco: 29.90, disponivel: true },
{ nome: "Mouse", preco: 19.90, disponivel: false },
{ nome: "Monitor", preco: 799.90, disponivel: true },
{ nome: "Fone de Ouvido", preco: 89.90, disponivel: false },
]

const produtosDisponiveis = produtos.filter(produto => produto.disponivel)
const produtosIndisponiveis = produtos.filter(produto => !produto.disponivel)

console.log("produtosDisponiveis:", produtosDisponiveis)
console.log("produtosIndisponiveis:", produtosIndisponiveis)


//MAP
const numeros = [1, 2, 3, 4]

const numerosDobrados = numeros.map(numero => numero * 2)

console.log(`Numero: ${numeros}`)
console.log(`Numeros dobrado ${numerosDobrados}`)

const usuarios = [
    { nome: "Alice", idade: 25 },
    { nome: "João", idade: 18 },
    { nome: "Kaike", idade: 15 },
]

const nomess = usuarios.map(usuarios => usuarios.nome)

console.log(usuarios)
console.log(nomes)

//ForEach - Não retorna valores diferente do map e filter
const frutas = ["Maçã", "Banana", "Laranja"]
frutas.forEach((item, index, array) => console.log(`Eu gosto de ${item}, ${item} está no indice ${index} e o array ${array}`) )

//Reduce - compila tudo em um só valor
const numeros2 = [10, 20, 30, 40];

const soma = numeros2.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual
}, 0)
console.log(soma)