import { useEffect } from "react";
import styles from "../styles/ItemsPage.module.scss";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import Product from "../components/Product";
import Filter from "../components/Filter";
const ItemsPage = () => {
  const products = useSelector(
    (state: RootState) => state.productSlice.products
  );
  const searchParams = useSelector((state:RootState) => state.filterSlice.searchParams)
  const dispatch = useAppDispatch();
  useEffect(() => {
   const search = searchParams ? `&search=${searchParams}` : '';
    dispatch(fetchProducts({
      search,
    }));
  }, [searchParams]);
  return (
    <div className={styles.container}>
      <Filter/>
      <div className={styles.items__grid}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
