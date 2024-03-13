import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
// const [counter, setCounter] = useState(0);
  const [options, setOption] = useState({ good: 0, neutral: 0, bad: 0 })

    const handleLogOption = (typeOptions) => {
      console.log("option: ", typeOptions);

      setOption({...options, [typeOptions]: options[typeOptions] +1 });
  };

  

  // const handleIncrementCounter = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <h2>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>

      <Options handleLogOption={handleLogOption} />
      <Feedback options={options} />
    </div>
  );
}

export default App;
