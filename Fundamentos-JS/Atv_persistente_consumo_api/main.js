const campoCep = document.getElementById("cep")
const campoLogradouro = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")

campoCep.addEventListener("blur", (evento) => {
    
    const elemento = evento.target;
    const cepInformado = elemento.value;
    localStorage.setItem("cep", campoCep.value)

    if(!(cepInformado.lenght === 8)){
        console.log("validação "+ cepInformado.lenght === 8)
        
        fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if(!data.error){
                campoLogradouro.value = data.logradouro
                localStorage.setItem("logradouro", campoLogradouro.value)

                bairro.value = data.bairro
                localStorage.setItem("bairro", bairro.value)

                cidade.value = data.localidade
                localStorage.setItem("cidade", cidade.value)

                estado.value = data.uf
                localStorage.setItem("estado", estado.value)
            }else{
                alert("CEO não encontrado")
            }
        })
        .catch(error => console.error("Erro ao buscar o cep informado " + cepInformado))

    }else{
        alert("Numero de caracteres maior do que o nescessário")
    }
})

document.addEventListener('DOMContentLoaded', () =>{
    //verificar se tem tema salvo
    const cepSalvo = localStorage.getItem("cep");
    const logradouroSalvo = localStorage.getItem("logradouro");
    const bairroSalvo = localStorage.getItem("bairro");
    const cidadeSalvo = localStorage.getItem("cidade");
    const estadoSalvo = localStorage.getItem("estado");

    //Se for dark, adciona a classe e altera o botão
    if(cepSalvo){
        campoCep.value = cepSalvo
        campoLogradouro.value = logradouroSalvo
        bairro.value = bairroSalvo
        cidade.value = cidadeSalvo
        estado.value = estadoSalvo
    }else{
        //caso contrario é light e o botão frbr ser dark
        campoCep.value = "";
        campoLogradouro.value = ""
        bairro.value = ""
        cidade.value = ""
        estado.value = ""
    }
})