import { useDispatch } from "react-redux";
import { addToWishList } from "../store/slices/wishSlice";
import ProductSvgWish from "../iconsvg/ProductSvgWish";
import styles from "../styles/Product.module.scss";
import { CartProduct } from "../store/slices/cartSlice";
import { FetchProduct } from "../store/slices/productSlice";
import { Link } from "react-router-dom";
type ProductProps = {
  product:FetchProduct,
}
const Product:React.FC<ProductProps> = ({ product }) => {
  const { name, price, imageUrl,id } = product;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToWishList(product as CartProduct));
  };
  return (
    <div className={styles.product}>
      <div className={styles.products__image}>
        <Link to={`/product/${id}`} className={styles.products__image_block}>
          <img src={imageUrl} alt={name} />
        </Link>
        <button data-tooltip='Add to WishList' onClick={handleClick} className={styles.add_to_wishlist}>
          <ProductSvgWish />
        </button>
      </div>
      <div className={styles.product__body}>
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

export default Product;
