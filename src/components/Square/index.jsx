import styles from "./Square.module.css"

// Cada célula do tabuleiro é representada por um botão. Ele recebe como propriedade o valor (X, O ou vazio) e a função a ser executada quando for clicado.

export default function Square({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}
