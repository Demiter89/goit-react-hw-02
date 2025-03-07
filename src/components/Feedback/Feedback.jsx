import styles from "./Feedback.module.css";
import Notification from "../Notification/Notification";

export default function Feedback({ feedback, totalFeedback, positivePercentage }) {
  return (
    <div className={styles.stats}>
      <h2>Feedback Statistics</h2>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      )}
    </div>
  );
}