import styles from "./Options.module.css";

export default function Options({ updateFeedback, resetFeedback }) {
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={styles.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={styles.button} onClick={resetFeedback}>Reset</button>
    </div>
  );
}