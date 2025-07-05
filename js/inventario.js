// Funções e métodos para exibir, filtrar e gerenciar o inventário do jogador

function exibirInventario(jogador) {
    const container = document.getElementById("inventario-lista");
    if (!container) {
        console.error("#inventario-lista não encontrado!");
        return;
    }

    container.innerHTML = ""; // Limpa o container antes de exibir os itens

    // Verifica se o jogador tem inventário vazio e dá um retorno
    if (!jogador?.inventario || jogador.inventario.length === 0) {
        container.innerHTML = `
            <div class="empty-inventory">
                <i class="fas fa-box-open"></i>
                <p>Inventário vazio</p>
            </div>
        `;
        return;
    }

    // Processamento dos itens
    const itensAgrupados = jogador.inventario.reduce((acc, item) => {
        if (!acc[item.nome]) {
            acc[item.nome] = { ...item, qtd: 0 };
        }
        acc[item.nome].qtd += item.qtd;
        return acc;
    }, {});

// Renderização inventário
Object.values(itensAgrupados).forEach(item => {
    const dadosItem = lojaDeItens.find(i => i.nome === item.nome) || {
        nome: item.nome,
        imagem: "img/placeholder.png",
        preco: 0
    };

    const itemEl = document.createElement("div");
    itemEl.className = "item-card";

    // Criação dos elementos
    const img = document.createElement("img");
    img.src = dadosItem.imagem;
    img.alt = item.nome;
    img.onerror = () => img.src = 'img/placeholder.png';

    const nome = document.createElement("h4");
    nome.textContent = item.nome;

    const quantidade = document.createElement("p");
    quantidade.textContent = `Quantidade: ${item.qtd}`;

    const btnVender = document.createElement("button");
    btnVender.className = "btn-sell";
    btnVender.textContent = `Vender (${Math.floor(dadosItem.preco / 2)}z)`;

    // Event listener seguro
    btnVender.addEventListener('click', (e) => {
        e.preventDefault();

         audioManager.playSFX('click');

        // Verifica função vender
        if (typeof window.vender === 'function') {
            try {
                window.vender(jogador.nome, item.nome);
            } catch (error) {
                console.error("Erro ao vender item:", error);
                showNotification("Erro ao processar venda", "error");
            }
        } else {
            console.error("Função vender não disponível");
            showNotification("Sistema de vendas indisponível", "error");
        }
    });

    // Montando a estrutura
    itemEl.appendChild(img);
    itemEl.appendChild(nome);
    itemEl.appendChild(quantidade);
    itemEl.appendChild(btnVender);
    
    container.appendChild(itemEl);
});

// Inicializa SortableJS
new Sortable(container, {
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    onEnd: function(evt) {
    console.log('Item movido', evt.oldIndex, '->', evt.newIndex);
    }
    });

}