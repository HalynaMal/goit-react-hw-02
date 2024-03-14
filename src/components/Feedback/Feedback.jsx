const Feedback = ({ feedback }) => {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {feedback.total}</li>
      <li>Positive: {feedback.positive}</li>
    </ul>
  );
};

export default Feedback;
