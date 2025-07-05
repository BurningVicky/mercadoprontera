// Funções e metodos para a loja de itens

let categoriaAtual = "Todos";

// Função para filtrar itens da loja por categoria
function filtrarLoja(categoria) {
    categoriaAtual = categoria;
    exibirLoja(window.jogadorAtual); // Usa o jogador atual da memória
}

function exibirLoja(jogador) {
    const container = document.getElementById("itens-loja");
    if (!container) {
        console.error("Container da loja não encontrado!");
        return;
    }

    // Limpa o container antes de exibir os itens
    container.innerHTML = "";

    const itensFiltrados = categoriaAtual === "Todos" 
        ? lojaDeItens 
        : lojaDeItens.filter(item => item.categoria === categoriaAtual);

    if (itensFiltrados.length === 0) {
        container.innerHTML = "<p>Nenhum item disponível nesta categoria</p>";
        return;
    }
    // Filtra os itens da loja
    itensFiltrados.forEach(item => {
        const div = document.createElement("div");
        div.className = "item-card";
        
        // Criando os elementos do item
        const img = document.createElement("img");
        img.src = item.imagem;
        img.alt = item.nome;
        img.onerror = () => img.src = 'img/placeholder.png';
        
        const nome = document.createElement("h4");
        nome.textContent = item.nome;
        
        const categoria = document.createElement("p");
        categoria.textContent = `Categoria: ${item.categoria}`;
        
        const preco = document.createElement("p");
        preco.textContent = `Preço: ${item.preco.toLocaleString()}z`;
        
        // Botão de compra
        const btnComprar = document.createElement("button");
        btnComprar.className = "btn-buy";
        btnComprar.textContent = "Comprar";
        btnComprar.addEventListener('click', () => {
            audioManager.playSFX('click');
            comprar(jogador.nome, item.nome);
        });

        // Montando a estrutura do item
        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(categoria);
        div.appendChild(preco);
        div.appendChild(btnComprar);
        
        container.appendChild(div);
    });
}

// Chamada de função para comprar um item
function comprar(nomeJogador, nomeItem) {
    if (!window.jogadorAtual || window.jogadorAtual.nome !== nomeJogador) {
        window.jogadorAtual = carregarJogador(nomeJogador);
    }
    
    const item = lojaDeItens.find(i => i.nome === nomeItem);
    if (!item) return false;

    audioManager.playSFX('buy');
    
    return comprarItem(window.jogadorAtual, item);
}
// Chamada de função para vender um item
function vender(nomeJogador, nomeItem) {
    if (!window.jogadorAtual || window.jogadorAtual.nome !== nomeJogador) {
        window.jogadorAtual = carregarJogador(nomeJogador);
    }
    
    const item = lojaDeItens.find(i => i.nome === nomeItem);
    if (!item) return false;
    
    return venderItem(window.jogadorAtual, item);
}