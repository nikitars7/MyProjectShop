import CartItem from "../components/CartItem";
import CartEmpty from "../components/CartEmpty";
import SummaryCart from "../components/SummaryCart";
import styles from "../styles/Cart.module.scss";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cartItems, totalPrice } = useSelector((store) => store.cartSlice);
  const totalItems = cartItems.reduce((acc,item) => acc+item.price,0)
  if(!totalItems){
    return <CartEmpty/>
  }
  document.title = "Shopping Cart";
  return (
    <div>
      <h1 className={styles.cart__title}>Shopping Cart</h1>
      <div className={styles.container}>
        <div className={styles.cart__grid}>
          <div className={styles.cart__list}>
            {cartItems.map((item) => {
             return  <CartItem key={item.id}item={item} />;
            })}
          </div>
          <SummaryCart totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
