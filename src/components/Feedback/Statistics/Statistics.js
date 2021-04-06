const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statisticsWrap">
    <h2>Statistic</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    {positivePercentage && <p>Positive: {positivePercentage}%</p>}
  </div>
);

export default Statistics;
