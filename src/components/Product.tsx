import ProductSvgWish from "../iconsvg/ProductSvgWish";
import styles from "../styles/Product.module.scss";
import { FetchProduct } from "../store/slices/productSlice";
import { Link } from "react-router-dom";
import MyModal from "../UI/popup/MyModal";
import { useState } from "react";
import Button from "../UI/button/Button";
type ProductProps = {
  product: FetchProduct;
};
const Product: React.FC<ProductProps> = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.product}>
      <MyModal isVisible={isVisible} setIsVisible={setIsVisible}>
        <div className={styles.product__modal}>
          <h2>If you want to add this Item to cart you should pick the size</h2>
          <Link to={`/product/${id}`}><Button>Get now</Button></Link>
        </div>
      </MyModal>
      <div className={styles.products__image}>
        <Link to={`/product/${id}`} className={styles.products__image_block}>
          <img src={imageUrl} alt={name} />
        </Link>
        <button
          data-tooltip="Add to WishList"
          onClick={handleClick}
          className={styles.add_to_wishlist}
        >
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
