const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-10-24T00:00:00");
const tempoObjetivo2 = new Date("2027-05-12T00:00:00");
const tempoObjetivo3 = new Date("2027-12-30T00:00:00");
const tempoObjetivo4 = new Date("2027-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    // Esse 'for' vai rodar 4 vezes, uma para cada objetivo (0, 1, 2 e 3)
    for (let i = 0; i < tempos.length; i++) {
        let tempoCalculado = calculaTempo(tempos[i]);

        // O `${i}` muda automaticamente para 0, 1, 2 e 3, atualizando todas as abas!
        document.getElementById(`dias${i}`).textContent = tempoCalculado[0];
        document.getElementById(`horas${i}`).textContent = tempoCalculado[1];
        document.getElementById(`min${i}`).textContent = tempoCalculado[2];
        document.getElementById(`seg${i}`).textContent = tempoCalculado[3];
    }

}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();