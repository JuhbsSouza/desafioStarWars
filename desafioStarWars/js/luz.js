
function ImprimeListaLuz() {
    let existe = false;
    let nome = document.getElementById("respostasLadodaLuz").value;
    for (let posicao = 0; posicao < timeLuz.length; posicao++) {
        if (timeLuz[posicao] == nome) {
            existe = true;
            break;
        }
    }
    for (let posicao = 0; posicao < timeSombra.length; posicao++) {
        if (timeSombra[posicao] == nome) {
            existe = true;
            break;
        }
    }
    if (existe == false) {
        timeLuz.push(nome);
        adicionaLuz(nome);
    } else {
        alert("Este nome já existe.")
    }
}