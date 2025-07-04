// loja.js

let categoriaAtual = "Todos";

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

    container.innerHTML = "";

    const itensFiltrados = categoriaAtual === "Todos" 
        ? lojaDeItens 
        : lojaDeItens.filter(item => item.categoria === categoriaAtual);

    if (itensFiltrados.length === 0) {
        container.innerHTML = "<p>Nenhum item disponível nesta categoria</p>";
        return;
    }

    itensFiltrados.forEach(item => {
        const div = document.createElement("div");
        div.className = "item-card";
        
        // Criação programática segura
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
        
        const btnComprar = document.createElement("button");
        btnComprar.className = "btn-buy";
        btnComprar.textContent = "Comprar";
        btnComprar.addEventListener('click', () => comprar(jogador.nome, item.nome));
        
        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(categoria);
        div.appendChild(preco);
        div.appendChild(btnComprar);
        
        container.appendChild(div);
    });
}

function comprar(nomeJogador, nomeItem) {
    if (!window.jogadorAtual || window.jogadorAtual.nome !== nomeJogador) {
        window.jogadorAtual = carregarJogador(nomeJogador);
    }
    
    const item = lojaDeItens.find(i => i.nome === nomeItem);
    if (!item) return false;
    
    return comprarItem(window.jogadorAtual, item);
}

function vender(nomeJogador, nomeItem) {
    if (!window.jogadorAtual || window.jogadorAtual.nome !== nomeJogador) {
        window.jogadorAtual = carregarJogador(nomeJogador);
    }
    
    const item = lojaDeItens.find(i => i.nome === nomeItem);
    if (!item) return false;
    
    return venderItem(window.jogadorAtual, item);
}