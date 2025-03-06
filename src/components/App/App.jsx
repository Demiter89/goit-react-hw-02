import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import styles from "./App.module.css";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція оновлення фідбеку
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // **Функція скидання фідбеку**
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} /> {/* ✅ Передаємо resetFeedback */}
      <Feedback feedback={feedback} />
    </div>
  );
}