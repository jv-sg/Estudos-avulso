/*
Elaborar um programa para um Cinema, onde o usuário possa digitar o título e a duração de um filme em minutos.
Exiba o título do filme e converta a duração para horas e minutos.

1. obter o nome do filme
2. obter a duração em minutos
3. converter a duração de minutos em horas
    3.1 fazer a divisão da duração em minutos por 60 pra pegar a quantidade em horas
    3.2 arredondar a quantidade de horas para pegar só as horas cheias
    3.3 pegar o resultado da duração em minutos e remover as horas cheias (hora * 60)
exemplo: 70 minutos (1h e 10 minutos)
60 minutos - 1h
70/60 = 1,16 (arredondar para baixo)
hotas 1
70 - 1 * 60 = 10

4. exibir o nome do filme
5. exibir a duração em horas e minutos 
*/

function algoritimo(){

    const titulo = document.getElementById("titulo").value;
    const duracao = document.getElementById("duracao").value;
    const horas = Math.floor(duracao / 60);
    const minutos = duracao - horas * 60;

    document.getElementById("titulo-saida").textContent = titulo.toUpperCase();
    document.getElementById("duracao-saida").textContent = `${horas} Hora(s) e ${minutos}`
}