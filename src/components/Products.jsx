import { useState,useEffect } from "react";
import Product from "./Product";
import classNames from "classnames";
import styles from "../styles/Products.module.scss";
const Products = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async() => {
      const response = await fetch('https://6404ecfc40597b65de2d48a6.mockapi.io/Products');
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  },[])
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.products__title}>This Week's Highlights</h2>
        <div className={styles.products__grid}>
          {products &&
            products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
        <div className={styles.products__bottom}>
          <a
            href="/"
            className={classNames(styles.btn, styles.btn_outline_primary)}
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
