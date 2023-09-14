import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FetchProduct } from "../store/slices/productSlice";
import Product from "../components/Product";
import styles from "../App.module.scss";
import MyLoader from "../UI/loader/MyLoader";
import Button from "../UI/button/Button";
const ProductPage: React.FC = () => {
  const [item, setItem] = useState<FetchProduct>();
  const { id } = useParams();
  const navigate = useNavigate();
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
      <div className={styles.product__content}>
      <div className={styles.product__button} onClick={handleClickBack}>
          <Button>Back</Button>
        </div>
        <Product product={item} />
      </div>
    </div>
  );
};

export default ProductPage;
