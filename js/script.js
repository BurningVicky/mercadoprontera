document.getElementById("form-jogador").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    console.log("Nome recebido:", nome);

    if (!validarNomeJogador(nome)) return;

    let jogador = carregarJogador(nome);
    if (!jogador) {
        jogador = new Jogador(nome);
        salvarJogador(jogador);
    }

    window.jogadorAtual = jogador;
    exibirDados(jogador);
});

function iniciarJogo(){
    const nome = document.getElementById("nomeJogador").value;

    if (!validarNomeJogador(nome)) {
        return;
    }

    // Segue o fluxo normal do jogo
    let jogador = carregarJogador(nome);
    if (!jogador){
        jogador = new Jogador(nome);
        salvarJogador(jogador);
    }

    window.jogadorAtual = jogador;
    exibirDados(jogador);
}

function exibirDados(jogador) {
    document.getElementById("form-jogador").classList.add("hidden");
    document.getElementById("dados-jogador").classList.remove("hidden");

    document.getElementById("nome-jogador").textContent = jogador.nome;
    document.getElementById("job-jogador").textContent = jogador.job;
    document.getElementById("nivel-jogador").textContent = jogador.nivel;
    document.getElementById("zeny-jogador").textContent = jogador.zeny.toLocaleString();

    atualizarInventario(jogador);
    exibirInventario(jogador);
    exibirLoja(jogador);
}

// Funções de teste
function testarAdicionarItem() {
    const nome = document.getElementById("nome-jogador").textContent;
    let jogador = carregarJogador(nome);

    let item = jogador.inventario.find(i => i.nome === "Poção Vermelha");
    if (item) {
        item.qtd += 1;
    } else {
        jogador.inventario.push({ nome: "Poção Vermelha", qtd: 1 });
    }

    salvarJogador(jogador);
    exibirDados(jogador);
}

function testarRemoverItem() {
    const nome = document.getElementById("nome-jogador").textContent;
    let jogador = carregarJogador(nome);

    jogador.inventario = jogador.inventario.filter(item => item.nome !== "Poção Vermelha");

    salvarJogador(jogador);
    exibirDados(jogador);
}
