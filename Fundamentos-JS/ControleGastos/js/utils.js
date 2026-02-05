//Função utilitária

//Funções puras
const obterElemento = (id) => document.getElementById(id);
export const valorNegativo = (valor) => valor < 0;

const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",")

export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias

    categorias.forEach(({nome, valor}) =>{
        const elemento = obterElemento(nome);
        elemento.textContent= `${nome}: R$${formataMoeda(valor)}`
    });

    const elementoTotal = obterElemento("Total")
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`
}