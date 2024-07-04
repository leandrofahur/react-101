import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge(props) {
  const { title, targetTime } = props;

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timerId.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  const timerId = useRef();
  const dialog = useRef();

  function handleStart() {
    timerId.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timerId.current);
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
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is runnning..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
}
