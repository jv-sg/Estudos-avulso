//ouvir o evento de quando o usuario terminar de digitar o cep
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //validar o cep
    if(!(cepInformado.length === 8))
        return

    //fazer a busca do ViaCep
    //Promessa de que o fetch vai buscar
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data => {
        //processamento da página
        if(!data.error){
            document.getElementById("logradouro").value = data.logradouro
            document.getElementById("bairro").value = data.bairro
            document.getElementById("cidade").value = data.localidade
            document.getElementById("estado").value = data.uf
        }else{
            alert("CEP não encontrado")
        }
    })
    .catch(error => console.error("Erro ao buscar o cep informado "+ cepInformado))
})


