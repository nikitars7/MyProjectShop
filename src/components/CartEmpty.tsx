import emptyCart from '../img/empty-cart.png'
import styles from "../styles/Cart.module.scss";
const CartEmpty:React.FC = () => {
  return (
    <div className={styles.cart__empty}>
      <h2>Cart is empty 😕</h2>
      <img src={emptyCart} alt="emptycart" />
    </div>
  );
};

export default CartEmpty;
