// Classe jogador para o jogo Mercado Prontera

class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.nivel = Math.floor(Math.random() * 54) + 7; // Sorteia nível do jogador entre 7 e 60
        this.job = this.sortearJob();
        this.zeny = Math.floor(Math.random() * (2000000 - 50000 + 1)) + 50000; // Sorteia zeny(dinheiro) entre 50.000 e 2.000.000
        this.inventario = []; // array para armazenar os itens do inventário
    }
    // Metodo para sortear o job(Classe) do jogador
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
        this.jobImage = jobs[job]; 
        return job;
    }

    // Metodo para verificar se o jogador possui um item no inventário
    temItem(nomeItem) {
        return this.inventario.some(item => item.nome === nomeItem);
    }

    // Metodo para obter a quantidade de um item no inventário do jogador
    getQuantidadeItem(nomeItem) {
        const item = this.inventario.find(i => i.nome === nomeItem);
        return item ? item.qtd : 0;
    }

    // Metodo para adicionar um item ao inventário do jogador
    adicionarItem(nomeItem, quantidade = 1) {
        let item = this.inventario.find(i => i.nome === nomeItem);
        if (item) {
            item.qtd += quantidade;
        } else {
            this.inventario.push({ nome: nomeItem, qtd: quantidade });
        }
    }
}

// Função para salvar o jogador no localStorage
function salvarJogador(jogador) {
    localStorage.setItem(`jogador_${jogador.nome}`, JSON.stringify(jogador));
}

// Função para carregar o jogador do localStorage
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
