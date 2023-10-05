import { useTypedSelector } from "../hooks/useTypedSelector";
import WishListItem from "../components/WishListItem";
import styles from "../styles/WishList.module.scss";
import "../styles/ItemsTransition.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "../UI/popup/MyModal";
import Button from "../UI/button/Button";
import { wishItemsSelector } from "../store/selectors/wishItemsSelector";
const Wishlist: React.FC = () => {
  document.title = "Wishlish";
  const  {wishItems}  = useTypedSelector(wishItemsSelector);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  if(wishItems.length === 0){
  return (
    <div className={styles.wish__empty}>
       <h2 data-testid='empty-wish' className={styles.wish__empty_title}>WishList is empty , get clothes <Link to='/items'>now</Link></h2>
    </div>
  )
  }
  return (
      <div className={styles.container}>
        <MyModal isVisible={isVisible} setIsVisible={setIsVisible}>
          <div className={styles.wish__modal}>
            <h2>
              If you want to add this Item to cart you should be authorized
            </h2>
            <Link to="/login">
              <Button>Authorize</Button>
            </Link>
          </div>
        </MyModal>
        <div className={styles.wishlist__items}>
          <h2 className={styles.wishlist__title}>Wishlist</h2>
          <div className={styles.list}>
            {wishItems && (
              <TransitionGroup>
                {wishItems.map((product) => (
                  <CSSTransition
                    key={product.id}
                    timeout={500}
                    classNames="item"
                  >
                    <WishListItem
                      isVisible={isVisible}
                      setIsVisible={setIsVisible}
                      product={product}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
          </div>
        </div>
      </div>
  );
};

export default Wishlist;
