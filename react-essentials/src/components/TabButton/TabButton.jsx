import "./TabButton.css";

export default function TabButton(props) {
  const { isSelected, children, ...rest } = props;

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...rest}>
        {children}
      </button>
    </li>
  );
}
