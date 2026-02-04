const botaotema = document.getElementById("botaoTema")

botaotema.addEventListener("click", ()=> {
    //verificar se o valor já tem um tema pré-definido
    const temaAtual = localStorage.getItem("tema");
    //verificar qual o tema e inverter
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    //Adicionar a classe dark no elemento body
    document.body.classList.toggle(novoTema) //veririfca se essa classe já está no objeto, se já estiver ela remove
    //Salvar as preferencias no LocalStorage
    localStorage.setItem("tema", novoTema);
    //Atualiza o texto do botão
    botaotema.textContent = novoTema === "dark" ? "*" : ")"
})

document.addEventListener('DOMContentLoaded', () =>{
    //verificar se tem tema salvo
    const temaSalvo = localStorage.getItem("tema");

    //Se for dark, adciona a classe e altera o botão
    if(temaSalvo === "dark"){
        document.body.classList.add("dark")
        botaotema.textContent = "*";
    }else{
        //caso contrario é light e o botão frbr ser dark
        botaotema.textContent = ")";
    }
})
