import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";
import styles from "../styles/WishList.module.scss";
import { RootState } from "../store/store";
const Wishlist:React.FC = () => {
  document.title = "Wishlish";
  const { wishItems } = useSelector((store:RootState) => store.wishSlice);
  return (
    <div className={styles.container}>
      <div className={styles.wishlist__items}>
      <h2 className={styles.wishlist__title}>Wishlist</h2>
      <div className={styles.list}>
        {wishItems &&
          wishItems.map((product) => (
            <WishListItem product={product} key={product.id} />
          ))}
      </div>
      </div>
    </div>
  );
};

export default Wishlist;
