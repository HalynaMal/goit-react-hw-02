const Options = ({typeOptions}) => {
  return (
    <div>
      <button onClick={() => handleLogOptions("Good")}>Good</button>
      <button onClick={() => handleLogOptions("Neutral")}>Neutral</button>
      <button onClick={() => handleLogOptions("Bad")}>Bad</button>
      <button onClick={() => handleLogOptions("Reset")}>Reset</button>
   
    </div>
  );
};

export default Options;
