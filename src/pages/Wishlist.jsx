import { useContext } from "react";
import { ItemContex } from "../contex/WishContext";
import WishListItem from "../components/WishListItem";
import styles from "../styles/WishList.module.scss";
const Wishlist = () => {
  document.title = "Wishlish";
  const { state } = useContext(ItemContex);
  return (
    <div className={styles.container}>
      <h2 className={styles.wishlist__title}>Wishlist</h2>
      <div className={styles.list}>
        {state?.wishItems &&
          state?.wishItems.map((product) => (
            <WishListItem product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
