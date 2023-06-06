import { useDispatch } from "react-redux";
import { removeFromWishList } from "../store/wishSlice";
import { addToCart } from "../store/cartSlice";
import classNames from "classnames";
import WishSvgGarbage from "../iconsvg/WishSvgGarbage";
import styles from "../styles/WishListItem.module.scss";
const WishListItem = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromWishList(id));
  };
  const handleAdd = () => {
    dispatch(addToCart(product))
    dispatch(removeFromWishList(id));
  }
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <button onClick={handleRemove} className={styles.item__delete}>
          <WishSvgGarbage />
        </button>
        <div className={styles.item__body}>
          <img src={imageUrl} alt={name} className={styles.item__image} />
          <div className={classNames(styles.media_body, styles.mw_210)}>
            <p className={styles.item__title}>{name}</p>
            <p className={styles.item__price}>{`$${price}`}</p>
          </div>
        </div>
      </div>
      <div className={styles.item__buttons}>
        <button onClick={handleAdd} className={classNames(styles.btn, styles.btn_dark)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
