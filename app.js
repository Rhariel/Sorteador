let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();
    if (!nome || amigos.includes(nome)) return alert("Nome inválido ou já adicionado.");
    amigos.push(nome);
    atualizarLista();
    document.getElementById("amigo").value = "";
}

function atualizarLista() {
    document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (!amigos.length) return alert("Adicione ao menos um nome.");
    document.getElementById("resultado").textContent = `O amigo sorteado é: ${amigos[Math.floor(Math.random() * amigos.length)]}`;
}
