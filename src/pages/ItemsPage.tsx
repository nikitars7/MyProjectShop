import { useEffect, useRef, useState } from "react";
import styles from "../styles/ItemsPage.module.scss";
import { RootState, useAppDispatch } from "../store/store";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchProducts} from "../store/slices/productSlice";
import Product from "../components/Product";
import Filter from "../components/Filter";
import MySelect from "../UI/select/MySelect";
import { ratingList } from "../utils/RateList";
import Skeleton from "../components/Skeleton";
import { getPageCount } from "../utils/pages";
import { usePagination } from "../hooks/usePagination";
import classNames from "classnames";
import { setPage } from "../store/slices/filterSlice";
import { useObserver } from "../hooks/useObserver";
const ItemsPage = () => {
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  let pageCountArray = usePagination(totalPages);
  const { products, isLoading } = useTypedSelector(
    (state: RootState) => state.productSlice
  );
  const { searchParams, sortValue, page } = useTypedSelector(
    (state: RootState) => state.filterSlice
  );
  const dispatch = useAppDispatch();
  const order = sortValue.includes("-") ? "ask" : "desc";
  const sorted = sortValue.replace("-", "");
  const lastElem = useRef<HTMLDivElement>(null);
  // useObserver(lastElem, isLoading, page < totalPages, () => {
  //   dispatch(setPage(page + 1));
  // });
  useEffect(() => {
    const search = searchParams ? `&search=${searchParams}` : "";
    dispatch(
      fetchProducts({
        search,
        order,
        sorted,
        page,
        limit: 8,
      })
    );
  }, [searchParams, order, sorted, page]);
  useEffect(() => {
    setTotalPages(getPageCount(20, 8));
  }, [products]);
  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
  };
  const onChangePage = (page: number) => {
    dispatch(setPage(page));
  };
  return (
    <div className={styles.container}>
      <div className={styles.items__filter}>
        <Filter />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={ratingList}
        />
      </div>
      <h2 data-testid='catalogue-page' className={styles.items__title}>Catalogue</h2>
      <div className={products.length !== 0 ? styles.items__grid : ""}>
        {isLoading === "error" ? (
          <div className={styles.items__error}>
            <h2> Something went wrong 😕</h2>
            <p>
              {" "}
              Unfortunately,during fetching occured an error. Try again later
            </p>
          </div>
        ) : (
          <>
            {isLoading === "loading" &&
              [...new Array(8)].map((_, index) => <Skeleton key={index} />)}
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
            {/* {products.length !== 0 && isLoading !== 'success' ? (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <div className={styles.items__notfound}>Items were not found</div>
        )} */}
          </>
        )}
      </div>
      <div ref={lastElem}></div>
      <div className={styles.items__pagination}>
        {pageCountArray.map((p) => (
          <span
            onClick={() => onChangePage(p)}
            className={
              page === p
                ? classNames(
                    styles.pagination__button,
                    styles.pagination__current
                  )
                : styles.pagination__button
            }
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
