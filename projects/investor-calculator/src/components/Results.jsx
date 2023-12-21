import { calculateInvestmentResults } from "../util/investment";

export default function Results(props) {
  const { input } = props;

  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);

  return <div>Results...</div>;
}
