import { useState } from "react";

export default function Player(props) {
  const { name, symbol, isActive } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleEditClick() {
    setIsEditing((editting) => !editting);
  }

  function handleOnChange(event) {
    event.preventDefault();
    setNewName(event.target.value);
  }

  // player name logic:
  let playerName = <span className="player-name">{newName}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" required value={newName} onChange={handleOnChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
