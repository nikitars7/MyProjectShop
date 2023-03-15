import CartItem from "../components/CartItem";
import SummaryCart from "../components/SummaryCart";
import styles from "../styles/Cart.module.scss";
const Cart = () => {
  document.title = "Shopping Cart";
  return (
    <div>
      <h1 className={styles.cart__title}>Shopping Cart</h1>
      <div className={styles.container}>
        <div className={styles.cart__grid}>
          <div className={styles.cart__list}>
            <CartItem />
          </div>
          <SummaryCart />
        </div>
      </div>
    </div>
  );
};

export default Cart;
