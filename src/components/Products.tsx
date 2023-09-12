import {useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Product from "./Product";
import classNames from "classnames";
import styles from "../styles/Products.module.scss";
import { fetchProducts } from "../store/slices/productSlice";
import { RootState, useAppDispatch } from "../store/store";
import { Link } from "react-router-dom";
const Products:React.FC = () => {
  const products = useTypedSelector((state:RootState) => state.productSlice.products)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    try{
      dispatch(fetchProducts({limit:4}))
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
          <Link
            to="/items"
            className={classNames(styles.btn, styles.btn_outline_primary)}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
