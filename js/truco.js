let pontosTime1 = 0;
let pontosTime2 = 0;
let vitoriaTime1 = 0;
let vitoriaTime2 = 0;

function adicionaPonto(times, pontos) {
    if (times === 'time1') {
        pontosTime1 += pontos;
        document.getElementById('pontosTime1').textContent = pontosTime1;
    } else if (times === 'time2') {
        pontosTime2 += pontos;
        document.getElementById('pontosTime2').textContent = pontosTime2;
    }

    Vencedor();
}

function Vencedor() {
    if (pontosTime1 >= 12) {
        vitoriaTime1++;
        document.getElementById('vitoriaTime1').textContent = vitoriaTime1;
        resetaPontos();
    } else if (pontosTime2 >= 12) {
        vitoriaTime2++;
        document.getElementById('vitoriaTime2').textContent = vitoriaTime2;
        resetaPontos();
    }
}

function resetaPontos() {
    pontosTime1 = 0;
    pontosTime2 = 0;
    document.getElementById('pontosTime1').textContent = pontosTime1;
    document.getElementById('pontosTime2').textContent = pontosTime2;
}

function editaNomeDoTime(times) {
    const novoNome = prompt(`Alterar nome ${times === 'time1' ? 'Time 1' : 'Time 2'}:`);
    if (novoNome !== null && novoNome !== '') {
        document.getElementById(`${times}-name`).textContent = novoNome;
    }
}

document.getElementById('time1-name').textContent = prompt("Digite o nome do Time 1:");
document.getElementById('time2-name').textContent = prompt("Digite o nome do Time 2:");
