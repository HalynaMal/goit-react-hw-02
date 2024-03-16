const Options = ({ updateFeedback, totalFeedback, updateTotalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            updateTotalFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
