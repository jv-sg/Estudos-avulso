//Temos uma lista de produtos. E precisamos filtrar produtos acima de R$50.
//Depoiss, precisamos aplicar um desconto de 10%
//Por fim, precisamos exibir os produtos já com desconto no controle.

const produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Tênis", preco: 300},
    { nome: "Calça", preco: 80 },
    { nome: "Boné", preco: 40},
    { nome: "Jaqueta", preco: 400}
 ]

//  const produtosAcimaDe50 = produtos.filter(produto => produto.preco > 50)

//  console.log("O produto abaixo de 50 reais são ", produtosAcimaDe50)

//  const produtosComDesconto = produtosAcimaDe50.map(produto => (
//     {
//         nome: produto.nome,
//         preco: produto.preco * 0.9
//     }
//  ))

// produtosComDesconto.forEach(produto => {
//     console.log(`Produto ${produto.nome} com desconto ${produto.preco.toFixed(2)}`)
// })

//  const produtosAcimaDe50 =
//     produtos.filter(produto => produto.preco > 50)
//         .map(produto => (
//         {
//             nome: produto.nome,
//             preco: produto.preco * 0.9
//         }
//         ))
//             .forEach(produto => {
//             console.log(`Produto ${produto.nome} com desconto ${produto.preco.toFixed(2)}`)
//         })

const produtosRefatoradosComReduce = produtos.reduce((acumulador, produto) =>{
    if(produto.preco > 50){
        const produtoComDesconto = {
            nome: produto.nome,
            preco : produto.preco * 0.9
        }

        console.log(`Produto: ${produtoComDesconto.nome}, Preço com desconto: R${produtoComDesconto.preco.toFixed(2)}`)

        acumulador.push(produtoComDesconto)
    }

    return acumulador
}, [])