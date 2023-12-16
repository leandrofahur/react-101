import "./TabButton.css";

export default function TabButton(props) {
  const { onClick, isSelected, children } = props;

  function handleOnClick() {
    onClick();
  }

  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={handleOnClick}
      >
        {children}
      </button>
    </li>
  );
}
