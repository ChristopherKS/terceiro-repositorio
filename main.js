const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");


for (let i=0; i < botoes.length; i++){
    botoes[i].onclick = function() {

        for (let j=0; j <botoes.length; j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");

        }  
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}

contadores[0].textContent = "Constagem regressiva";

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-10T23:59:59");
const tempoObjetivo2 = new Date("2024-05-10T23:59:59");
const tempoObjetivo3 = new Date("2024-05-10T23:59:59");
const tempoObjetivo4 = new Date("2024-05-10T23:59:59");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]

function calculaTempoempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFInal = tempoObjetivo - tempoAtual;

let segundos = Math.floor(tempoFInal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %=60;
horas %=24;

return dias + "dias" + horas + "horas" + minutos "minutos" + s
}

contadores[0].textContent = tempoObjetivo1 - tempoAtual;

