import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";
//OOP
const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)

//Manipulação
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (evento) =>{
    /*
    1. pegar o calor informado
    2. pegar categoria informada
    3. impedir números negativos
    4. de acordo com a categoria, atualiza o valor
        4.1 criar variaveis para controlar ou armazenar os valores de cada uma das categorias
    5. atualizar interfaces
    6. limpar campos
    */

    //Prevenção do coportamento padrão
    evento.preventDefault();

   const valorInformado = formulario.elements.valor.value;
   const categoriaInformada = formulario.elements.categoria.value;

   if(valorNegativo(valorInformado)){
        alert("Valor não pode ser negativo");
        return;
   }
   const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada)
   categoria.adicionarValor(valorInformado)

   
   atualizarInterface(gastosPorCategoria);
   formulario.reset()
})