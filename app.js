//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if(nome == ""){
        alert("Por favor, insira um nome!")
    } else {
        nome = formatarNome(nome);
        nomeAmigos.push(nome);
        nomeAmigosAtualizar(nomeAmigos);
        document.getElementById('amigo').value = "";

    }
}

function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}


function nomeAmigosAtualizar(nomeAmigos) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < nomeAmigos.length; i++) {
        let item = document.createElement("li"); // Cria um <li>
        item.textContent = nomeAmigos[i]; // Define o texto do <li>
        lista.appendChild(item); // Adiciona o <li> à lista
    }

}

function sortearAmigo() {
    if(nomeAmigos == 0) {
        alert("Lista de Amigos Vazia!")
    } else {
        let indiceAleatorioSorteio = Math.floor(Math.random() * nomeAmigos.length);
        let nomeSorteado = nomeAmigos[indiceAleatorioSorteio]
        document.getElementById('resultado').textContent = `O Amigo secreto sorteado é: ${nomeSorteado}`;

    }
}