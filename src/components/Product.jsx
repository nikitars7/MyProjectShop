import { useDispatch } from "react-redux";
import { addToWishList } from "../store/wishSlice";
import ProductSvgWish from "../iconsvg/ProductSvgWish";
import styles from "../styles/Product.module.scss";
const Product = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToWishList(product));
  };
  return (
    <div className={styles.product}>
      <div className={styles.products__image}>
        <a href="/" className={styles.products__image_block}>
          <img src={imageUrl} alt={name} />
        </a>
        <button onClick={handleClick} className={styles.add_to_wishlist}>
          <ProductSvgWish />
        </button>
      </div>
      <div className={styles.product__body}>
        <h3>
          <a href="/">{name}</a>
        </h3>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

export default Product;
