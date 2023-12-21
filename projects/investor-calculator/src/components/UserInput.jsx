export default function UserInput(props) {
  const { userInput, handleOnChange } = props;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Inverstment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Return</label>
          <input
            type="number"
            required
            onChange={(event) => handleOnChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
