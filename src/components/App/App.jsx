import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import styles from "./App.module.css";

export default function App() {
  // Отримуємо збережений стан з localStorage або задаємо початкові значення
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  // Використовуємо useEffect для збереження стану в localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Функція оновлення фідбеку
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Функція для скидання фідбеку
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // Загальна кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Розрахунок відсотка позитивних відгуків
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
    </div>
  );
}