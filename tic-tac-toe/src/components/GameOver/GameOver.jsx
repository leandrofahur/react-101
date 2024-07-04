export default function GameOver(props) {
  const { winner, resetGame } = props;

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>It's a draw!</p>}
      <button onClick={resetGame}>Rematch!</button>
    </div>
  );
}
