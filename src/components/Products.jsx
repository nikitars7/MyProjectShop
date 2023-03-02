import styles from "../styles/Products.module.scss";
import Product from "./Product";
import classNames from "classnames";
import productImage1 from "../img/product-01.jpg";
import productImage2 from "../img/product-02.jpg";
import productImage3 from "../img/product-03.jpg";
import productImage4 from "../img/product-04.jpg";
import productImage5 from "../img/product-05.jpg";
import productImage6 from "../img/product-06.jpg";
import productImage7 from "../img/product-07.jpg";
import productImage8 from "../img/product-08.jpg";
const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.products__title}>This Week's Highlights</h2>
        <div className={styles.products__grid}>
          <Product img={productImage1}>Hoodie with pocket</Product>
          <Product img={productImage2}>Flowers cotton dress</Product>
          <Product img={productImage3}>Hoodie with pocket</Product>
          <Product img={productImage4}>Oversize cotton sweatshirt</Product>
          <Product img={productImage5}>Striped cotton-blend sweatshirt</Product>
          <Product img={productImage6}>Hoodie with pocket</Product>
          <Product img={productImage7}>Flowers cotton dress</Product>
          <Product img={productImage8}>Hoodie with pocket</Product>
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
