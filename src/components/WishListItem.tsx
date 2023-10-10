import { useAppDispatch } from "../store/store";
import {
  minusItem,
  plusItem,
  removeFromWishList,
} from "../store/slices/wishSlice";
import { CartProduct, addToCart } from "../store/slices/cartSlice";
import classNames from "classnames";
import WishSvgGarbage from "../iconsvg/WishSvgGarbage";
import styles from "../styles/WishListItem.module.scss";
import { useAuth } from "../hooks/useAuth";
interface WishListProps {
  product: CartProduct;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
const WishListItem: React.FC<WishListProps> = ({
  product,
  isVisible,
  setIsVisible,
}) => {
  const { isAuth } = useAuth();
  const { name, price, imageUrl, id, count, size } = product;
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeFromWishList(id));
  };
  const onCLickPlus = () => {
    dispatch(plusItem(product));
  };
  const onClickMinus = () => {
    dispatch(minusItem(product));
  };
  const handleAdd = () => {
    if (isAuth) {
      dispatch(addToCart(product));
      dispatch(removeFromWishList(id));
    } else {
      setIsVisible(!isVisible);
    }
  };
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <button id='wish-remove' data-testid='button-remove' onClick={handleRemove} className={styles.item__delete}>
          <WishSvgGarbage />
        </button>
        <div className={styles.item__body}>
          <img src={imageUrl} alt={name} className={styles.item__image} />
          <div className={classNames(styles.media_body, styles.mw_210)}>
            <h3 className={styles.item__title}>Name: {name}</h3>
            <h3 className={styles.item__price}>Price: {price}</h3>
            <h3 className={styles.item__size}>Size: {size}</h3>
          </div>
        </div>
      </div>
      <div data-testid='item-count' className={styles.item__count}>
        <button
          data-testid='button-minus'
          onClick={onClickMinus}
          disabled={count === 1}
          className={
            count === 1
              ? classNames(
                  styles.item__button,
                  styles.item__button_minus,
                  styles.item__button_outlined,
                  styles.item__button_disabled
                )
              : classNames(
                  styles.item__button,
                  styles.item__button_minus,
                  styles.item__button_outlined
                )
          }
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </button>
        {count}
        <button
          data-testid='button-plus'
          onClick={onCLickPlus}
          className={classNames(
            styles.item__button,
            styles.item__button_outlined
          )}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </button>
      </div>
      <div className={styles.item__buttons}>
        <button
          onClick={handleAdd}
          className={classNames(styles.btn, styles.btn_dark)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
