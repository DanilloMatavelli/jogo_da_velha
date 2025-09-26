import styles from "./Game.module.css"
import { useState } from "react";
import Board from "../Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // Controla o histórico do jogo. Ao receber o próximo estado do tabuleiro, cria uma nova lista de jogadas, descarta movimentos futuros e atualiza o estado atual para refletir a nova jogada.
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    // Permite ao usuário voltar para qualquer jogada anterior do histórico, ajustando o movimento atual para o escolhido.
  
    function jumpTo(nextMove) { 
      setCurrentMove(nextMove);
    }

    // Gera dinamicamente uma lista de botões que permitem navegar entre os estados anteriores do tabuleiro.”
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className={styles.game}>
        <div className="game-board">
            <h1>Jogo Da Velha</h1>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className={styles.gameinfo}>
            <h1>Historico</h1>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }