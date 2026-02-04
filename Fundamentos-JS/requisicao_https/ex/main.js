//Seleciona a nossa ul com a lista de tarefas no HTML
const tarefas = document.getElementById("listaTarefas")
//Faz uma resquisição GET para a API externa pra buscar todas as tarefas
fetch("https://crudcrud.com/api/b74586d6d719418b85f9fbc8b5aa9b0f/tarefas")
.then(resposta => resposta.json()) //converte o corpo da resposta em JSON
.then((listadeTarefas) => {
    //Intera sobre cada elemento do array
    listadeTarefas.forEach(tarefa => {
        //Cria um novo elemento de lista (<li>) para cada tarefa
        const item = document.createElement("li");
        //Define o conteúdo HTML do item, incluindo descrição e botão
        item.innerHTML = `${tarefa.descricao} <button onclick="remove('${tarefa._id}')" id="${tarefa._id}">X</button>`
        //Adiciona o novo item a lista html
        tarefas.appendChild(item)
    });
})

//Adiciona um ouvinte de evento click no botão "adicionar"
document.getElementById("add").addEventListener("click", () =>{
    //Pega a descrição que o usuario digitou no input com ID Tarefa
    const descricao = document.getElementById("tarefa").value;
    //Faz uma requisição POST para a API externa para criar a tarefa
    fetch("https://crudcrud.com/api/b74586d6d719418b85f9fbc8b5aa9b0f/tarefas", {
        //Faz uma requisão POST, mas podemos usar GET, POST, PUT ou DELETE
        method: "POST",
        //Definimos os cabeçalhos da requisição, com o tipo do conteúdo JSON
        headers: {
            "Content-Type": "application/json"
        },
        //Convertemos um objeto JS para uma string JSON
        body: JSON.stringify({descricao: descricao})
    })
    .then(resposta => resposta.json())
    .then((tarefa) =>{
        const item = document.createElement("li");
        //Define o conteúdo HTML do item, incluindo descrição e botão
        item.innerHTML = `${tarefa.descricao} <button onclick="remove('${tarefa._id}')" id="${tarefa._id}">X</button>`
        //Adiciona o novo item a lista html
        tarefas.appendChild(item)
    })
})

function remove(id){
    fetch(`https://crudcrud.com/api/b74586d6d719418b85f9fbc8b5aa9b0f/tarefas/${id}`, {
        //Faz uma requisão POST, mas podemos usar GET, POST, PUT ou DELETE
        method: "DELETE",
        })
    .then(resposta => {
        if (resposta.ok) {
            console.log("Removido com sucesso no servidor");
            
            // Agora removemos o elemento da tela (DOM)
            const botao = document.getElementById(id);
            if (botao) {
                // Remove o "pai" do botão (que geralmente é a <li>)
                botao.parentElement.remove();
            }
        } else {
            console.error("Erro ao deletar item");
        }
    })
    .catch(erro => console.error("Erro na requisição:", erro));
}