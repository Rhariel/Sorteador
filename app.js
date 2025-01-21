// Array para armazenar os amigos
let amigos = [];

//adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = ""; 
    // Limpar o campo de input
}

//atualizar a lista exibida na página
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    // Limpar a lista atual

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, insira pelo menos um nome para sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `O amigo sorteado é: ${sorteado}`;
}
