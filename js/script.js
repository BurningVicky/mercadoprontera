document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-jogador");
    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const nome = document.getElementById("nome")?.value.trim();
        
        if (!nome || !validarNomeJogador(nome)) return;

        let jogador = carregarJogador(nome);
        if (!jogador) {
            jogador = new Jogador(nome);
            salvarJogador(jogador);
        }

        window.jogadorAtual = jogador;
        exibirDados(jogador);
    });
});

function exibirDados(jogador) {
    console.group("Exibindo dados do jogador");
    console.log("Jogador:", jogador);
    console.log("Inventário:", jogador.inventario);
    console.groupEnd();
    // Oculta formulário e mostra área do jogo
    document.getElementById("form-jogador").classList.add("hidden");
    document.getElementById("dados-jogador").classList.remove("hidden");

    // Atualiza avatar
    const avatar = document.getElementById("job-avatar");
    avatar.src = `img/${jogador.jobImage}.png`;
    avatar.onerror = function() {
        this.src = 'img/placeholder.png';
    };
    // Atualiza informações
    document.getElementById("nome-jogador").textContent = jogador.nome;
    document.getElementById("job-jogador").textContent = jogador.job;
    document.getElementById("nivel-jogador").textContent = jogador.nivel;
    document.getElementById("zeny-jogador").textContent = jogador.zeny.toLocaleString();

    // Atualiza inventário
    function atualizarInventario(jogador){
        const lista = document.getElementById("lista-itens");
        if(!lista){
            console.error("Elemento #lista-itens não encontrado!");
            return;
        }
    }

    // Atualiza interfaces
    atualizarInventario(jogador);
    exibirInventario(jogador);
    exibirLoja(jogador);

    // Configura filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtrarLoja(btn.dataset.category);
        });
    });
}

function mostrarNotificacao(mensagem, tipo) {
    const notificationArea = document.getElementById('notification-area');
    const notification = document.createElement('div');
    notification.className = `notification ${tipo}`;
    notification.textContent = mensagem;
    notificationArea.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

