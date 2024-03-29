const Feedback = ({ feedback, totalFeedback, positiveStatistics }) => {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveStatistics}</li>
    </ul>
  );
};

export default Feedback;
