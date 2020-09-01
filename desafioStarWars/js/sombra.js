
function ImprimeListaSombra() {
    let existe = false;
    let nome = document.getElementById("respostasLadoSombrio").value;
    for (let posicao = 0; posicao < timeSombra.length; posicao++) {
        if (timeSombra[posicao] == nome) {
            existe = true;
            break;
        }
    }
    for (let posicao = 0; posicao < timeLuz.length; posicao++) {

        if (timeLuz[posicao] == nome) {
            existe = true;
            break;
        }
    }

    if (existe == false) {
        timeSombra.push(nome);
        adicionaSombra(nome);
    } else {
        alert("Este nome já existe.")
    }
}