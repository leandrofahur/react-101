import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(props, ref) {
  const { result, targetTime } = props;

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
});

export default ResultModal;
