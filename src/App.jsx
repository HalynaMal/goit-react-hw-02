import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {

  // const handleClick = (event) => {
  //   console.log(event);
  // }

  // const handleLogClick = (myNumber) => {
  //   console.log(myNumber);
  // }

  const handleLogOptions = (typeOptions) => {
    console.log(typeOptions);
  }
    
  return (
    <>
    <div>
      <h1>Sip Happens Café</h1>
      <h2>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>
      
      <Options typeOptions ={handleLogOptions}/>
      {/* <Feedback typeFeedback={handleLogFeedback} /> */}
   </div>
    </>
  );
};

export default App;
