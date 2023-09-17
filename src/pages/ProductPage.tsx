import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/store";
import ProductSvgWish from "../iconsvg/ProductSvgWish";
import { addToWishList } from "../store/slices/wishSlice";
import axios from "axios";
import { FetchProduct } from "../store/slices/productSlice";
import styles from "../styles/ProductPage.module.scss";
import MyLoader from "../UI/loader/MyLoader";
import Button from "../UI/button/Button";
import { CartProduct } from "../store/slices/cartSlice";
const ProductPage: React.FC = () => {
  const [item, setItem] = useState<FetchProduct>();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://6404ecfc40597b65de2d48a6.mockapi.io/Products/${id}`
        );
        setItem(data);
      } catch (e) {
        alert(`Not Found`);
        navigate("/");
      }
    };
    getProduct();
  }, []);
  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClick = () => {
    dispatch(addToWishList(item as CartProduct));
  };
  if (!item) {
    return (
      <div className={styles.container}>
        <div className={styles.product__content}>
          <MyLoader />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.item__content}>
        <div className={styles.item__desc}>
          <Button handleClick={handleClickBack}>Back</Button>
          <div className={styles.item__info}>
            <h2 className={styles.item__name}>product: {item.name}</h2>
            <p className={styles.item__price}>price: {item.price} $</p>
          </div>
        </div>
        <div className={styles.item__body}>
          <div className={styles.item__image}>
            <img src={item.imageUrl} alt={item.name} />
            <button
              data-tooltip="Add to WishList"
              onClick={handleClick}
              className={styles.add_to_wishlist}
            >
              <ProductSvgWish />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
