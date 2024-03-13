const Options = ({ handleLogOption }) => {
  return (
    <div>
      <button onClick={() => handleLogOption("Good")}>Good</button>
      <button onClick={() => handleLogOption("Neutral")}>Neutral</button>
      <button onClick={() => handleLogOption("Bad")}>Bad</button>
      <button onClick={() => handleLogOption("Reset")}>Reset</button>
    </div>
  );
};

export default Options;
