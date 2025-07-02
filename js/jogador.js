class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.nivel = Math.floor(Math.random() * 92) + 7;
        this.job = this.sortearJob();
        this.zeny = Math.floor(Math.random() * (10000000 - 100000 + 1)) + 100000;
        this.inventario = [];
    }

    sortearJob() {
        const jobs = ["Espadachim", "Noviço", "Mago", "Mercador", "Gatuno", "Arqueiro", "Super Aprendiz"];
        return jobs[Math.floor(Math.random() * jobs.length)];
    }

    adicionarItem(item) {
        this.inventario.push(item);
    }

    removerItem(nomeItem) {
        const index = this.inventario.findIndex(item => item.nome === nomeItem);
        if (index !== -1) {
            this.inventario.splice(index, 1);
        }
    }
}

function salvarJogador(jogador) {
    localStorage.setItem(`jogador_${jogador.nome}`, JSON.stringify(jogador));
}

function carregarJogador(nome) {
    const data = localStorage.getItem(`jogador_${nome}`);
    if (data) {
        const obj = JSON.parse(data);
        const jogador = new Jogador(obj.nome);
        jogador.nivel = obj.nivel;
        jogador.job = obj.job;
        jogador.zeny = obj.zeny;
        jogador.inventario = obj.inventario || [];
        return jogador;
    }
    return null;
}
