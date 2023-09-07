import { useEffect, useState } from "react";
import styles from "../styles/ItemsPage.module.scss";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import Product from "../components/Product";
import Filter from "../components/Filter";
import MySelect from "../UI/select/MySelect";
import { ratingList } from "../utils/RateList";
const ItemsPage = () => {
  const [selectedSort, setSelectedSort] = useState<string>("");
  const products = useSelector(
    (state: RootState) => state.productSlice.products
  );
  const { searchParams, sortValue } = useSelector(
    (state: RootState) => state.filterSlice
  );
  const dispatch = useAppDispatch();
  const order = sortValue.includes("-") ? "ask" : "desc";
  const sorted = sortValue.replace("-", "");
  useEffect(() => {
    const search = searchParams ? `&search=${searchParams}` : "";
    dispatch(
      fetchProducts({
        search,
        order,
        sorted,
      })
    );
  }, [searchParams,order,sorted]);
  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
    console.log(sort);
  };
  return (
    <div className={styles.container}>
      <Filter />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
        options={ratingList}
      />
      <h2 className={styles.items__title}>Catalogue</h2>
      <div className={products.length !== 0 ? styles.items__grid : ""}>
        {products.length !== 0 ? (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <div className={styles.items__notfound}>Items were not found</div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
