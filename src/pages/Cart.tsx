import CartItem from "../components/CartItem";
import CartEmpty from "../components/CartEmpty";
import SummaryCart from "../components/SummaryCart";
import styles from "../styles/Cart.module.scss";
import '../styles/ItemsTransition.scss'
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Cart: React.FC = () => {
  const { cartItems, totalPrice } = useSelector(
    (store: RootState) => store.cartSlice
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.price, 0);
  if (!totalItems) {
    return <CartEmpty />;
  }
  document.title = "Shopping Cart";
  return (
    <div className={styles.container}>
      <h1 className={styles.cart__title}>Shopping Cart</h1>
      <div className={styles.container}>
        <div className={styles.cart__grid}>
          <div className={styles.cart__list}>
            <TransitionGroup>
              {cartItems.map((item) => (
                <CSSTransition key={item.id} timeout={500} classNames="item">
                  <CartItem item={item} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          <SummaryCart totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
