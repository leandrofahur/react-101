export default function TimerChallenge(props) {
  const { title, targetTime } = props;

  return (
    <div className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p className="">
        <button>Start Challenge</button>
      </p>
      <p className="">Time is running... / Timer inactive</p>
    </div>
  );
}
