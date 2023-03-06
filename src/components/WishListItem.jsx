import classNames from "classnames";
import WishSvgGarbage from "../iconsvg/WishSvgGarbage";
import img from "../img/product-07.jpg";
import styles from "../styles/WishListItem.module.scss";
const WishListItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <button className={styles.item__delete}>
          <WishSvgGarbage />
        </button>
        <div className={styles.item__body}>
          <img
            src={img}
            alt="Flowers cotton dress"
            className={styles.item__image}
          />
          <div className={classNames(styles.media_body, styles.mw_210)}>
            <p className={styles.item__title}>Flowers cotton dress</p>
            <p className={styles.item__price}>$29.00</p>
          </div>
        </div>
      </div>
      <div className={styles.item__buttons}>
        <button className={classNames(styles.btn, styles.btn_dark)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
