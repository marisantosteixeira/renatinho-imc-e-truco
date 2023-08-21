let equipeA = {
    nome: "",
    pontos: 0,
    vitorias: 0
};

let equipeB = {
    nome: "",
    pontos: 0,
    vitorias: 0
};

const placarElement = document.getElementById("placar");
const pontuacaoElement = document.getElementById("pontuacao");
const equipeAInput = document.getElementById("equipeA");
const equipeBInput = document.getElementById("equipeB");

// att o placar
function atualizarPlacar() {
    placarElement.innerHTML = `
        ${equipeA.nome} (${equipeA.vitorias} vitórias): ${equipeA.pontos} pontos<br>
        ${equipeB.nome} (${equipeB.vitorias} vitórias): ${equipeB.pontos} pontos
    `;
}

// att a pontuação
function atualizarPontuacao() {
    pontuacaoElement.innerHTML = `
        Pontuação Máxima: 12 pontos
    `;
}

//inicia um novo jogo
function novoJogo() {
    equipeA.nome = equipeAInput.value;
    equipeB.nome = equipeBInput.value;
    equipeA.pontos = 0;
    equipeB.pontos = 0;
    atualizarPlacar();
    atualizarPontuacao();
}

//  marcação de pontos da Equipe A
document.getElementById("equipeAPonto1").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeA.pontos += 1;
        verificarVitoria();
    }
    atualizarPlacar();
});

document.getElementById("equipeAPonto3").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeA.pontos += 3;
        verificarVitoria();
    }
    atualizarPlacar();
});

document.getElementById("equipeAPonto6").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeA.pontos += 6;
        verificarVitoria();
    }
    atualizarPlacar();
});

document.getElementById("equipeAPonto12").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeA.pontos += 12;
        verificarVitoria();
    }
    atualizarPlacar();
});

// marcação de pontos da Equipe B
document.getElementById("equipeBPonto1").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeB.pontos += 1;
        verificarVitoria();
    }
    atualizarPlacar();
});

document.getElementById("equipeBPonto3").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeB.pontos += 3;
        verificarVitoria();
    }
    atualizarPlacar();
});

document.getElementById("equipeBPonto6").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeB.pontos += 6;
        verificarVitoria();
    }
    atualizarPlacar();
});

document.getElementById("equipeBPonto12").addEventListener("click", function () {
    if (equipeA.pontos < 12 && equipeB.pontos < 12) {
        equipeB.pontos += 12;
        verificarVitoria();
    }
    atualizarPlacar();
});

//  verifica se uma equipe venceu
function verificarVitoria() {
    if (equipeA.pontos >= 12) {
        equipeA.vitorias++;
        novoJogo();
    } else if (equipeB.pontos >= 12) {
        equipeB.vitorias++;
        novoJogo();
    }
}