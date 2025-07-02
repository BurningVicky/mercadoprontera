class Jogador {
    constructor(nome){
        this.nome = nome;
        this.job = this.sortearJob();
        this.nivel = this.sortearNivel();
        this.zeny = this.sortearZeny();
        this.inventario = [];
    }

    sortearJob() {
        const jobs = ['Espadachim', 'Mago', 'Arqueiro', 'Gatuno', 'Noviço', 'Mercador',];
        return jobs[Math.floor(Math.random() * jobs.length)];
    }

    sortearNivel() {
        return Math.floor(Math.random() * (98 - 7 + 1)) + 7
    }

    sortearZeny() {
        return Math.floor(Math.random() * (10000000 - 100000)) + 100000;
    }

    adicionarItem(item){
        this.inventario.push(item);
    }

    removerItem(item){
        this.inventario = this.inventario.filter(i => i.nome !== item.nome);
    }
}

function salvarJogador(jogador) {
        localStorage.setItem(jogador.nome, JSON.stringify(jogador));
    }

function carregarJogador(nome) {
        const data = localStorage.getItem(nome);
        return data ? JSON.parse(data) : null;
    }

function atualizarInventario(jogador){
    const lista = document.getElementById("lista-itens");
    lista.innerHTML = "";

    if(jogador.inventario.length === 0){
        lista.innerHTML = "<li>Inventário vazio</li>";
    }else {
        jogador.inventario.forEach(item => {
            const li = document.createElement("li");
            li.textContent = '${item.nome} (Qtd: ${item.qtd})';
            lista.appendChild(li);
        });
    }
}

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

    exibirDados(jogador);
}

// Validação nome jogador
function validarNomeJogador(nome){
    const nomeLimpo = nome.trim();

    if (!nomeLimpo){
        alert("Por favor, jovem aventureiro, insira um nome válido!");
        return false;
    }

    // Verificar tamanho máximo do nome
    if (nomeLimpo.length > 20){
        alert("Aventureiro, o nome deve ter no máximo 20 caracteres!");
        return false;
    }

    // Permitir apenas letras, números e espaços
    const regex = /^[\w\s]+$/;
    if (!regex.test(nomeLimpo)){
        alert("Aventureiro, o nome só pode conter letras, números e espaços!");
        return false;
    }

    return true;
}

// Funções para testes
function testarAdicionarItem(){
    const nome = document.getElementById("nome-jogador").textContent;
    let jogador = carregarJogador(nome);

    let item = jogador.inventario.find(i => i.nome === "Poção Vermelha");
    if(!item){
        item.qtd += 1;
     } else{
        jogador.inventario.push({nome: "Poção Vermelha", qtd: 1});
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

// Lista de itens disponíveis na loja
const lojaDeItens = [
    { nome: "Poção Vermelha", preco: 100, categoria: "Consumível", imagem: "img/pocao_vermelha.png" },
    { nome: "Poção Azul", preco: 150, categoria: "Consumível", imagem: "img/pocao_azul.png" },
    { nome: "Espada Longa", preco: 2500, categoria: "Arma", imagem: "img/espada_longa.png" },
    { nome: "Arco Curto", preco: 2000, categoria: "Arma", imagem: "img/arco_curto.png" },
    { nome: "Cajado Mágico", preco: 1500, categoria: "Arma", imagem: "img/cajado_magico.png" },
    { nome: "Adaga", preco: 800, categoria: "Arma", imagem: "img/adaga.png" }
];

let categoriaAtual = "Todos";
    
function filtrarLoja(categoria) {
    categoriaAtual = categoria;
    exibirLoja(jogador);
}

//renderizar loja de itens
function exibirLoja(jogador) {
  const container = document.getElementById("itens-loja");
  container.innerHTML = "";

  const itensFiltrados = categoriaAtual === "Todos"
    ? lojaDeItens
    : lojaDeItens.filter(item => item.categoria === categoriaAtual);

  itensFiltrados.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item-loja");

    div.innerHTML = `
      <img src="${item.imagem}" width="40"><br>
      <strong>${item.nome}</strong><br>
      Categoria: ${item.categoria}<br>
      Preço: ${item.preco.toLocaleString()} zeny<br>
      <button onclick="comprarItem('${jogador.nome}', '${item.nome}')">Comprar</button>
    `;

    container.appendChild(div);
  });
}

// Função botão de venda no inventário
function exibirInventario(jogador) {
    const container = document.getElementById("inventario-lista");
    container.innerHTML = "";

    if (jogador.inventario.length === 0) {
        container.innerHTML = "<p>Inventário vazio...</p>";
        return;
    }

    jogador.inventario.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item-inventario");

        const dadosItem = lojaDeItens.find(i => i.nome === item.nome);

        div.innerHTML = `
      <img src="${dadosItem?.imagem || "img/placeholder.png"}" width="40"><br>
      <strong>${item.nome}</strong> x${item.qtd}<br>
      <button onclick="venderItem('${jogador.nome}', '${item.nome}')">Vender</button>
    `;

    container.appendChild(div);
  });
}

// Função para comprar um item da loja
function comprarItem(nomeJogador, nomeItem){
    let jogador = carregarJogador(nomeJogador);
    const item = lojaDeItens.find(i => i.nome === nomeItem);

    if(!item){
        alert("Item não encontrado na loja.");
        return;
    }

    if(jogador.zeny < item.preco){
        alert("Zeny insuficiente!");
        return;
    }
    // Desconta zeny do jogador
    jogador.zeny -= item.preco;

    const existente = jogador.inventario.find(i => i.nome === item.nome);
    if (existente) {
        existente.qtd += 1;
    } else {
        jogador.inventario.push({ nome: item.nome, qtd: 1 });
    }

    salvarJogador(jogador);
    exibirDados(jogador);
}

// Função para vender itens
function venderItem(nomeJogador, nomeItem) {
  let jogador = carregarJogador(nomeJogador);
  const item = jogador.inventario.find(i => i.nome === nomeItem);
  const dadosLoja = lojaDeItens.find(i => i.nome === nomeItem);

  if (!item || !dadosLoja) return;

  // Define valor de revenda como 50%
  const precoVenda = Math.floor(dadosLoja.preco / 2);
  jogador.zeny += precoVenda;

  item.qtd -= 1;
  if (item.qtd <= 0) {
    jogador.inventario = jogador.inventario.filter(i => i.nome !== nomeItem);
  }

  salvarJogador(jogador);
  exibirDados(jogador);
}

// Função para adicionar itens ao inventário
function adicionarItem(nomeJogador, nomeItem) {
  let jogador = carregarJogador(nomeJogador);
  const item = lojaDeItens.find(i => i.nome === nomeItem);

  if (!item) {
    alert("Item não encontrado na loja.");
    return;
  }

  // Adicionando item ao inventário
  const existente = jogador.inventario.find(i => i.nome === item.nome);
  if (existente) {
    existente.qtd += 1;
    } else {
        jogador.inventario.push({nome: item.nome, qtd: 1});
    }

    // Salvando jogador atualizado
    salvarJogador(jogador);
    exibirDados(jogador);
}


// Event listener para o formulário de jogador
document.getElementById("form-jogador").addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();

    let jogador = carregarJogador(nome);
    if(!jogador){
        jogador = new Jogador(nome);
        salvarJogador(jogador);
    }
    exibirDados(jogador);
});

function exibirDados(jogador){
    document.getElementById("form-jogador").classList.add("hidden");
    document.getElementById("dados-jogador").classList.remove("hidden");

    document.getElementById("nome-jogador").textContent = jogador.nome;
    document.getElementById("job-jogador").textContent = jogador.job;
    document.getElementById("nivel-jogador").textContent = jogador.nivel;
    document.getElementById("zeny-jogador").textContent = jogador.zeny.toLocaleString();

    atualizarInventario(jogador);
    exibirLoja(jogador);
}