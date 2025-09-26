// A função percorre todas as combinações possíveis de vitória (linhas, colunas e diagonais).

// Se encontrar três posições iguais (todas com X ou todas com O), retorna o vencedor correspondente.

// Caso nenhuma condição seja atendida, retorna null, indicando que o jogo continua sem vencedor.

export default function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  