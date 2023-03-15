import ProductImg from "../img/product-07.jpg";
import CartRemoveSvg from "../iconsvg/CartRemoveSvg";
import styles from "../styles/CartItem.module.scss";
const CartItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <button href="#" className={styles.item__delete_btn}>
          <CartRemoveSvg />
        </button>
        <img
          src={ProductImg}
          alt="Partridge Bar Stool"
          className={styles.item__image}
        />
        <div>
          <p className={styles.item__category}>Dress</p>
          <a href="#" className={styles.item__name}>
            Oversize cotton sweatshirt
          </a>
        </div>
      </div>
      <p>$750.00</p>
    </div>
  );
};

export default CartItem;
