Objetivo do projeto

Este projeto tem como objetivo desenvolver um Jogo da Velha utilizando React.js.  
O foco é aprender e praticar conceitos fundamentais do React, como:
- Criação e composição de componentes funcionais;
- Gerenciamento de estado com `useState`;
- Passagem de props entre componentes;
- Estruturação do código em componentes reutilizáveis.


Estrutura dos Componentes

- Game
  Componente principal que gerencia o estado do jogo, incluindo:
  - Histórico de jogadas;
  - Controle de turnos;
  - Reinício do jogo.

- Board
  Representa o tabuleiro.  
  É responsável por:
  - Renderizar os 9 quadrados (`Square`);
  - Exibir o status do jogo (próximo jogador ou vencedor);
  - Delegar a lógica de clique para atualização de jogadas.

- Square
  Representa cada célula do tabuleiro.  
  É um botão que mostra:
  - "X" ou "O" conforme o jogador;
  - Um clique chama a função recebida via props para atualizar o estado no `Board`.

- `utils/calculateWinner.js` 
  Função utilitária que verifica se houve um vencedor ou empate.


Como executar o jogo

Clonar o repositorio abaixo, com o link:
https://github.com/DanilloMatavelli/jogo_da_velha

Executar o react com o comando: 
npm i 

Para rodar o jogo execute o comando:
npm run dev 



