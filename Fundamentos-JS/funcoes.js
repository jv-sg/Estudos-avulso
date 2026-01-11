const fruta = "laranja"

function liquidificador(item) {
console.log("processando ... ")
item ? console.log(`saiu um suco de ${item} `) : console.log("você ligou o liquidificador sem nada")
}

liquidificador();

//callback
function carregarVideo(callback){
console.log("Carregando vídeo ... ")
setTimeout(() => {
console.log("Vídeo terminou de ser carregado")
callback()
}, 5000);
}

const reproduzirVideo = () => {
console.log("Video reproduzindo ... ")

}

carregarVideo(reproduzirVideo)