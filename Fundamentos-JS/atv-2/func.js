function calcImc(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    let imc = peso / (altura*altura)

    if(imc > 35){
        document.getElementById("resultado").textContent = `Seu imc é de: ${imc} e você está com super obsidade`
    }else if(imc >= 30 && imc <= 35){
        document.getElementById("resultado").textContent = `Seu imc é de: ${imc} e você está obeso`
    }else if(imc >= 25 && imc <= 29){
        document.getElementById("resultado").textContent = `Seu imc é de: ${imc} e você está acima do peso`
    }else if(imc >= 20 && imc <= 24){
        document.getElementById("resultado").textContent = `Seu imc é de: ${imc} e você está no peso ideal`
        }
    else{
        document.getElementById("resultado").textContent = `Seu imc é de: ${imc} e você está abaixo do peso`
        }

}