import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge(props) {
  const { title, targetTime } = props;

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timerId = useRef(null);
  const dialog = useRef(null);

  function handleStart() {
    timerId.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timerId.current);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <div className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p className="">
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is runnning..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
}
