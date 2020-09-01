let timeLuz = [];
let timeSombra = [];

function adicionaLuz(nome) {
    let listItem = document.createElement('li');
    listItem.innerHTML = nome;
    document.getElementById('resultadoLuz').appendChild(listItem);
}

function adicionaSombra(nome) {
    let listItem = document.createElement('li');
    listItem.innerHTML = nome;
    document.getElementById('resultadoSombra').appendChild(listItem);
}