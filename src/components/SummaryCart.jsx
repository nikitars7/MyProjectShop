import styles from "../styles/SummaryCart.module.scss";
import classNames from "classnames";
const SummaryCart = ({totalPrice}) => {
  return (
    <div className={styles.summary}>
      <h4 className={styles.summary__title}>Summary</h4>
      <div className={styles.summary__body}>
        <div className={styles.summary__line}>
          <div>Total</div>
          <div>${totalPrice}</div>
        </div>
      </div>
      <button
        type="submit"
        className={classNames(
          styles.btn,
          styles.btn_dark,
          styles.btn_full_width
        )}
      >
        Check Out
      </button>
    </div>
  );
};

export default SummaryCart;
