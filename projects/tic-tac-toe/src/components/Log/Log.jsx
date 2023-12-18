export default function Log(props) {
  const { turns } = props;

  return (
    <ol id="log">
      {turns.map((turn) => {
        const { player, square } = turn;
        const { row, col } = square;

        return (
          <li key={`${row}${col}`}>
            <p>
              {player} selected square {row}, {col}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
