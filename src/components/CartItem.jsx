import CartRemoveSvg from "../iconsvg/CartRemoveSvg";
import styles from "../styles/CartItem.module.scss";
import { removeFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({item}) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const handleRemove = () => {
   dispatch(removeFromCart(id))
  }
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <button onClick={handleRemove}href="#" className={styles.item__delete_btn}>
          <CartRemoveSvg />
        </button>
        <img
          src={imageUrl}
          alt="Partridge Bar Stool"
          className={styles.item__image}
        />
        <div>
          <p className={styles.item__category}>Dress</p>
          <a href="#" className={styles.item__name}>
            {name}
          </a>
        </div>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default CartItem;
