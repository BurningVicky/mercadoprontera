class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.nivel = Math.floor(Math.random() * 54) + 7;
        this.job = this.sortearJob();
        this.zeny = Math.floor(Math.random() * (1000000 - 50000 + 1)) + 50000;
        this.inventario = [];
    }

    sortearJob() {
        const jobs = {
            "Espadachim": "espadachim",
            "Noviço": "novico", 
            "Mago": "mago",
            "Mercador": "mercador",
            "Gatuno": "gatuno",
            "Arqueiro": "arqueiro",
           
        };
        const jobNames = Object.keys(jobs);
        const job = jobNames[Math.floor(Math.random() * jobNames.length)];
        this.jobImage = jobs[job];  // Guarda o nome do arquivo da imagem
        return job;
    }

    temItem(nomeItem) {
        return this.inventario.some(item => item.nome === nomeItem);
    }

    getQuantidadeItem(nomeItem) {
        const item = this.inventario.find(i => i.nome === nomeItem);
        return item ? item.qtd : 0;
    }

    adicionarItem(nomeItem, quantidade = 1) {
        let item = this.inventario.find(i => i.nome === nomeItem);
        if (item) {
            item.qtd += quantidade;
        } else {
            this.inventario.push({ nome: nomeItem, qtd: quantidade });
        }
    }
}

function salvarJogador(jogador) {
    localStorage.setItem(`jogador_${jogador.nome}`, JSON.stringify(jogador));
}

function carregarJogador(nome) {
    const data = localStorage.getItem(`jogador_${nome}`);
    if (data) {
        try {
            const obj = JSON.parse(data);
            const jogador = new Jogador(obj.nome);
            
            // Garante que todos os campos estão sendo carregados
            jogador.nivel = obj.nivel || 1;
            jogador.job = obj.job || 'Noviço';
            jogador.zeny = obj.zeny || 0;
            jogador.inventario = obj.inventario || [];
            
            console.log('Jogador carregado:', jogador);
            return jogador;
        } catch (e) {
            console.error('Erro ao carregar jogador:', e);
            return null;
        }
    }
    return null;
}
