let usuarios = {
    usuario1:{
        nome: "Paulo",
        idade: 28,
        endereco:{cidade: "São Paulo", estado: "SP"}
    },

    usuario2:{
        nome: "Bruno",
        idade: 35,
        endereco: {cidade: "Porto Alegre", estado: "RS"}
    },
};

for (let id in usuarios){
    let user = usuarios[id];
    console.log(`Ussuario ${user.nome} tem ${user.idade} anos e mora em ${user.endereco.cidade} no estado de ${user.endereco["estado"]}`)
}

let pedidos  = [
    {id: 101, cliente: "Lucas", total: 500},
    {id: 102, cliente: "João", tital: 100},
]

for(let i in pedidos){
    console.log(`Pedido #${pedidos[i].id}`);
    for(let chave in pedidos[i]){
        console.log(`${chave}: ${pedidos[i][chave]}`)
    }
    console.log("----------------------")
}

let frutas = ["Maçã", "Banana", "Pera"]

for(let fruta of frutas){
    console.log(fruta) //não tras os indices
}