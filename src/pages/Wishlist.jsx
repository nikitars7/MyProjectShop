import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";
import styles from "../styles/WishList.module.scss";
const Wishlist = () => {
  document.title = "Wishlish";
  const { wishItems } = useSelector((store) => store.wishSlice);
  return (
    <div className={styles.container}>
      <h2 className={styles.wishlist__title}>Wishlist</h2>
      <div className={styles.list}>
        {wishItems &&
          wishItems.map((product) => (
            <WishListItem product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
