import css from './Notification.module.css';

export default function Notification() {
  return (
    <>
      <p className={css.text}>Statistics</p>
      <p className={css.feedBackText}>No feedback yet</p>
    </>
  );
}