import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });
  // Оголошення функції для оновлення фідбеку
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <h2>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>

      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;
