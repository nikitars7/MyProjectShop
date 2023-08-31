import {useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import classNames from "classnames";
import styles from "../styles/Products.module.scss";
import { fetchProducts } from "../store/slices/productSlice";
import { RootState, useAppDispatch } from "../store/store";
const Products:React.FC = () => {
  const products = useSelector((state:RootState) => state.productSlice.products)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    try{
      dispatch(fetchProducts())
    }
    catch(err:any){
     console.log(err.message)
    }
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
