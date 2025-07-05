const lojaDeItens = [
    // Consumíveis
    {
        nome: "Poção Vermelha",
        preco: 50,
        categoria: "Consumível",
        imagem: "img/pocao-vermelha.png"
    },
    {
        nome: "Poção Azul",
        preco: 250,
        categoria: "Consumível",
        imagem: "img/pocao-azul.png"
    },
    {
        nome: "Poção do Despertar",
        preco: 2500,
        categoria: "Consumível",
        imagem: "img/pocao-do-despertar.png"
    },
     {
        nome: "Poção da Concentração",
        preco: 2500,
        categoria: "Consumível",
        imagem: "img/pocao-da-concentracao.png"
    },
    {
        nome: "Poção Amarela Compacta",
        preco: 450,
        categoria: "Consumível",
        imagem: "img/pocao-amarela-compacta.png"
    },
    
    // Armas
    {
        nome: "Adaga",
        preco: 850,
        categoria: "Arma",
        imagem: "img/adaga.png"
    },
    {
        nome: "Cajado de Iniciante",
        preco: 1300,
        categoria: "Arma",
        imagem: "img/cajado.png"
    },
    {
        nome: "Espada de duas Mãos",
        preco: 1500,
        categoria: "Arma",
        imagem: "img/espada-duas-maos.png"
    },
    {
        nome: "Arco",
        preco: 800,
        categoria: "Arma",
        imagem: "img/arco.png"
    },
    {
        nome: "Maça",
        preco: 1800,
        categoria: "Arma",
        imagem: "img/maca.png"
    },
    {
        nome: "Machado",
        preco: 2500,
        categoria: "Arma",
        imagem: "img/machado.png"
    },
    {
        nome: "Katana",
        preco: 35000,
        categoria: "Arma",
        imagem: "img/katana.png"
    },
    {
        nome: "Machado Rubi",
        preco: 60000,
        categoria: "Arma",
        imagem: "img/machado-rubi.png"
    },
    {
        nome: "Adaga Rubi",
        preco: 30000,
        categoria: "Arma",
        imagem: "img/adaga-rubi.png"
    },
    {
        nome: "Arco Incendiário",
        preco: 40000,
        categoria: "Arma",
        imagem: "img/arco-incendiario.png"
    },
    {
        nome: "Cajado do Feiticeiro",
        preco: 50000,
        categoria: "Arma",
        imagem: "img/cajado-do-feiticeiro.png"
    },
    {
        nome: "Maça Brutal",
        preco: 40000,
        categoria: "Arma",
        imagem: "img/maca-brutal.png"
    },

    // Acessórios
{
        nome: "Anel",
        preco: 5000,
        categoria: "Acessório",
        imagem: "img/anel.png"
    },
    {
        nome: "Brinco",
        preco: 15000,
        categoria: "Acessório",
        imagem: "img/brinco.png"
    },
    {
        nome: "Presilha",
        preco: 15000,
        categoria: "Acessório",
        imagem: "img/presilha.png"
    },
    {
        nome: "Rosário",
        preco: 20000,
        categoria: "Acessório",
        imagem: "img/rosario.png"
    },

    // Equipamentos
    {
        nome: "Armadura Acolchoada",
        preco: 1350,
        categoria: "Equipamento",
        imagem: "img/armadura-acolchoada.png"
    },
    {
        nome: "Armadura das Valquirias",
        preco: 1500000,
        categoria: "Equipamento",
        imagem: "img/armadura-valquiria.png"
    },
    {
        nome: "Mochila da Aventura",
        preco: 400000,
        categoria: "Equipamento",
        imagem: "img/mochila-da-aventura.png"
    },
    {
        nome: "Binóculos",
        preco: 10000,
        categoria: "Equipamento",
        imagem: "img/binoculos.png"
    },
    {
        nome: "Óculos de Nerd",
        preco: 800,
        categoria: "Equipamento",
        imagem: "img/oculos-de-nerd.png"
    },
    {
        nome: "Óculos Escuros",
        preco: 2500,
        categoria: "Equipamento",
        imagem: "img/oculos-escuros.png"
    },
    {
        nome: "Óculos de Aviação",
        preco: 1250,
        categoria: "Equipamento",
        imagem: "img/oculos-de-aviacao.png"
    },
    {
        nome: "Manto das Valquirias",
        preco: 1500000,
        categoria: "Equipamento",
        imagem: "img/manto-das-valquirias.png"
    },
    {
        nome: "Armadura Metálica",
        preco: 4500,
        categoria: "Equipamento",
        imagem: "img/armadura-metalica.png"
    },
    {
        nome: "Armadura de Madeira",
        preco: 1500,
        categoria: "Equipamento",
        imagem: "img/armadura-de-madeira.png"
    },
    {
        nome: "Botas de Ferro",
        preco: 4500,
        categoria: "Equipamento",
        imagem: "img/botas-de-ferro.png"
    },
    {
        nome: "Botas de Combate",
        preco: 2500,
        categoria: "Equipamento",
        imagem: "img/botas-combate.png"
    },
     {
        nome: "Botas do ArchAngeling",
        preco: 800000,
        categoria: "Equipamento",
        imagem: "img/botas-do-archangeling.png"
    },
    {
        nome: "Asas de Anjo",
        preco: 450000,
        categoria: "Equipamento",
        imagem: "img/asas-de-anjo.png"
    },
    {
        nome: "Boina Alada",
        preco: 450000,
        categoria: "Equipamento",
        imagem: "img/boina-alada.png"
    },
    {
        nome: "Chapéu",
        preco: 500,
        categoria: "Equipamento",
        imagem: "img/chapeu.png"
    },
    {
        nome: "Elmo de Sucata",
        preco: 2500,
        categoria: "Equipamento",
        imagem: "img/elmo-de-sucata.png"
    },
    {
        nome: "Elmo das Valquirias",
        preco: 1500000,
        categoria: "Equipamento",
        imagem: "img/elmo-das-valquirias.png"
    },
    {
        nome: "Capa Velha",
        preco: 800,
        categoria: "Equipamento",
        imagem: "img/capa-velha.png"
    }
];