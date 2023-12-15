import "./TabButton.css";

export default function TabButton(props) {
  const { onClick, children } = props;

  function handleOnClick() {
    onClick();
  }

  return (
    <li>
      <button onClick={handleOnClick}>{children}</button>
    </li>
  );
}
