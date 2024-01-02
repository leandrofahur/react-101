import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(null);
  const [name, setName] = useState("");

  const handleOnClick = () => {
    setName(playerName.current.value);
    playerName.current.value = ""; // very careful here! This is a imperative way of doing things.
  };

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
      </p>
      <button onClick={handleOnClick}>Set Name</button>
    </section>
  );
}
