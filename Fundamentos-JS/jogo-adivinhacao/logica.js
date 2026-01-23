const numeroAleatorio = Math.floor(Math.random() * (100 - 0 + 1)) + 0
let pontuacao = 10

function acertei(){
    const numeroDoJogo = numeroAleatorio
    const numeroDoJogador = parseInt(document.getElementById("numero").value)
    const respostaPuser = document.getElementById("resposta")
    const pontuacaoAtual = document.getElementById("pontuacao")

    if(numeroDoJogador === null || numeroDoJogador < 0){
        alert(`valor inválido`)
        return
    }else if (pontuacao <= 0){
        alert("o jogo acabou")
        pontuacao = 10
        return
    }
    
    else{
        if (numeroDoJogo === numeroDoJogador){
            pontuacaoAtual.textContent = `Sua pontuação: ${pontuacao}` 
            respostaPuser.textContent = "Certa resposta"
            pontuacao = 10
        }
        else if(numeroDoJogo > numeroDoJogador){
            pontuacao -= 1
            pontuacaoAtual.textContent = `Sua pontuação: ${pontuacao}` 
            respostaPuser.textContent = "O numero certo é maior"

        } else{
            pontuacao -= 1
            pontuacaoAtual.textContent = `Sua pontuação: ${pontuacao}` 
            respostaPuser.textContent = "O numero certo é menor"
        }
    }
}