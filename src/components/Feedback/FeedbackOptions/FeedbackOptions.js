const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="controlsWrap">
    <button className="btn" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className="btn" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className="btn" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
