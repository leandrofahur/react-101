import { ForwardedRef } from "react";

export default function ResultModal(props) {
  const { result, targetTime, ref } = props;

  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button value="close">Close</button>
      </form>
    </dialog>
  );
}
