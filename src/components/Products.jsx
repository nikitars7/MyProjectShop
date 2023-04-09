import products from "../myProducts";
import Product from "./Product";
import classNames from "classnames";
import styles from "../styles/Products.module.scss";
const Products = () => {
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
