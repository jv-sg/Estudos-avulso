const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    alert("EU ouvi")
})

btn.addEventListener("click", function(event) {
    console.log('Elemento clicado: ', event.target)
    console.log('Elemento clicado: ', event.type)
})