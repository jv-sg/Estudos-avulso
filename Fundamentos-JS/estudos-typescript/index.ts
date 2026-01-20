//Sintax de Type Annotation no Typescript

//let nome: string = "João"
let nome: string | null = null // pode ser tanto null quanto uma string
let idade: number = 18 //pode ser qualquer tipo de numero: 10, 10.5 etc.
let maiorDeIdade: boolean = true
let numeroGrande: bigint = 4343434343434349898n;
let simbolo: symbol = Symbol("id")
console.log(typeof nome)

//Any - é definido quando o typscript não sabe definir o tipo de dado ou podemos por livre e espontanea vontade definir como any - não recomendado

let a;
let b;
a = 10
b = "texto";

//ENUM
//O enum ou (enumeration)

enum StatusPedido{
    Pendente = "Pendente", //0
    Processando = "Processando",//1
    Enviado = "Enviado",//2
    Entregue = "Entregue",//3
    Devolvido = "Devolvido", //4
}

const pedido: StatusPedido = StatusPedido.Processando

console.log(pedido)

enum Misturado {
    Numero = 10,
    Texto = "Olá"
}

console.log(Misturado.Numero)
console.log(Misturado.Texto)

enum TipoUsuario {
    Admin = "Administrador",
    Editor = "Editor",
    Leitor = "Leitor"
}

Object.entries(TipoUsuario).forEach(([chave, valor]) => {
    console.log(chave, valor)
})

//Tipando funções

function somar(primeiroNumero: number, segundoNumero: number): number{
    return primeiroNumero + segundoNumero;
}

function saudacao(nome: string, saudar?: string): string {//valor saudar é opcional
    return saudar ? `${saudar}, ${nome}` : `Olá. ${nome}`
}

function valorCOmDesconto(valor: number, desconto: number = 0): number {//valor padrão do desconto é 0
    return valor - (valor * desconto) / 100
}

//Intersection Types
// Permite que um tipo tenha propriedades de dois ou mais tipos ao mesmo tempo
//os tipos não podem ter atributos parecidos como "id" numerico em um e "id" string em outro

type Usuario = {
    id: number,
    nome: string,
    email: string
}

type Plano = {
    nivelDoPlano: "Básico" | "Premium"
}

type UsuarioComPlano = Usuario & Plano
const user: UsuarioComPlano = {
    id: 1,
    nome: "João",
    email: "joao@email.com",
    nivelDoPlano: "Básico"
}

console.log(user)

//Tipagem em arrays e Objetos
const array1: number[] = [1, 2, 3]
const array2: Array<number> = [1, 2, 3]
const array3: Array<string | number | boolean> = ["1", "2", "3"]
const array4: (string | number | boolean)[] = ["1", "2", "3"]

//Matriz
const matriz: number[][] = [
        [1,2,3],
        [1,2,3]
]

//objeto tipado

type Usuarios = {
    nome: String,
    idade: number,
    email: string,
    telefone?: string //campo opcional
}
let usuarios: Usuarios = {
    nome: "João",
    idade: 24,
    email: "joao@email",
}

//tipando funções
function soma(a: number, b:number): number{
    return a + b
}

const resultado = somar(2, 2)
console.log(resultado)

//outra forma de criar uma função comarrow function
type Multiplicar = (a: number, b:number) => number;
const multiplicar: Multiplicar = (a, b) => {
    return a*b
}

interface TransformarEmMaiusculo {
    (texto: string): string
}
let retornarMaiusculo: TransformarEmMaiusculo = (texto) => texto.toUpperCase();

// let retornarMaiusculo: (texto: string) => string = (texto) => texto.toUpperCase();
console.log(retornarMaiusculo("olá"))