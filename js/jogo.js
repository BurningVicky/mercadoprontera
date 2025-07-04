// jogo.js

function comprarItem(jogador, item) {
    if (!jogador || !item) {
        console.error("Parâmetros inválidos:", {jogador, item});
        return false;
    }

    if (jogador.zeny < item.preco) {
        showNotification(`Zeny insuficiente! Você precisa de ${item.preco}z`, "error");
        return false;
    }

    jogador.zeny -= item.preco;
    
    const itemExistente = jogador.inventario.find(i => i.nome === item.nome);
    if (itemExistente) {
        itemExistente.qtd += 1;
    } else {
        jogador.inventario.push({ nome: item.nome, qtd: 1 });
    }

    salvarJogador(jogador);
    exibirDados(jogador);
    
    showNotification(`Compra realizada: ${item.nome} por ${item.preco}z`, "success");
    return true;
}

// Função venderItem única e bem definida
function venderItem(jogador, item) {
    if (!jogador || !item) {
        console.error("Parâmetros inválidos para venderItem");
        return false;
    }

    const itemInventario = jogador.inventario.find(i => i.nome === item.nome);
    if (!itemInventario || itemInventario.qtd <= 0) {
        showNotification(`Você não possui ${item.nome} para vender`, "error");
        return false;
    }

    const valorVenda = Math.floor(item.preco / 2);
    jogador.zeny += valorVenda;
    itemInventario.qtd -= 1;

    if (itemInventario.qtd <= 0) {
        jogador.inventario = jogador.inventario.filter(i => i.nome !== item.nome);
    }

    salvarJogador(jogador);
    exibirDados(jogador);
    
    showNotification(`Vendido: ${item.nome} por ${valorVenda}z`, "success");
    return true;
}

// Exportação para escopo global
if (typeof window !== 'undefined') {
    window.venderItem = venderItem;
    window.comprarItem = comprarItem;
}