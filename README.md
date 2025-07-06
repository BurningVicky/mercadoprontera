# Mercado de Prontera

Simulação de comércio inspirada no universo de **Ragnarok Online**, desenvolvida como projeto integrador nas disciplinas de Programação Orientada a Objetos e Desenvolvimento para Dispositivos Móveis.

## Objetivo

O projeto tem como foco aplicar conceitos de **Programação Orientada a Objetos** e **manipulação de DOM com JavaScript**, através da criação de um sistema funcional que permite:

- Criação de personagem com nome, classe aleatória (job), nível e zeny (moeda do jogo);
- Compra e venda de itens com verificação de saldo;
- Controle de inventário;
- Feedback visual e sonoro em tempo real.

## Tecnologias Utilizadas

- **HTML**
- **CSS**
- **SortableJS**
- **JavaScript**
- **JSON**


## Estrutura do Projeto

```
mercadoprontera/
├── audio/              → Arquivos de áudio utilizados no jogo
├── css/                → Estilos da aplicação (styles.css)
├── data/
│   ├── itens.json      → Base de dados dos itens disponíveis
│   └── lojaDeltens.js  → Itens da loja específica
├── img/                → Imagens e ícones
├── js/                 → Scripts principais do jogo
│   ├── audioManager.js → Controle de sons e trilha
│   ├── inventario.js   → Lógica do inventário
│   ├── jogador.js      → Classe e atributos do jogador
│   ├── jogo.js         → Inicialização e gerenciamento do jogo
│   ├── loja.js         → Compra, venda e exibição dos itens
│   ├── script.js       → Integração geral com a interface
│   └── validacao.js    → Validação de entrada do usuário
├── index.html          → Ponto de entrada da aplicação
└── favicon.png         → Ícone do projeto
```

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/BurningVicky/mercadoprontera.git
   ```

2. Navegue até a pasta:
   ```bash
   cd mercadoprontera
   ```

3. Abra o arquivo `index.html` em algum navegador.

> Nenhuma instalação extra é necessária, pois trata-se de uma aplicação 100% front-end, com localStorage.

## Metodos Alternativos para Rodar o Projeto

1. Baixe a extensão Live Server via VS Code;

2. Abra o projeto com o Live Server.

3. Ignore todos os passos anteriores e acesse: https://burningvicky.github.io/mercadoprontera/


## Funcionalidades em Destaque

- Sorteio de job, nível e zeny ao iniciar
- Inventário dinâmico com contagem de itens
- Sistema de compra e venda com validações
- Gerenciador de áudio e efeitos sonoros
- Interface baseada em elementos do Ragnarok Online

## Aprendizados

Este projeto permitiu explorar:
- Organização de código em módulos JavaScript
- Manipulação eficiente do DOM
- Aplicação de conceitos de orientação a objetos
- Experiência com estruturação de dados (JSON)
- Feedback visual/sonoro e interações responsivas
- Estilização da interface para dispositivos móveis

## Autoria

Desenvolvido pela Vicky, estudante do curso de **Análise e Desenvolvimento de Sistemas - UCPEL**.
