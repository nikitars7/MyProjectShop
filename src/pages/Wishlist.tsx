import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";
import styles from "../styles/WishList.module.scss";
import '../styles/ItemsTransition.scss'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {useState} from 'react'
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import MyModal from "../UI/popup/MyModal";
import Button from "../UI/button/Button";
const Wishlist: React.FC = () => {
  document.title = "Wishlish";
  const { wishItems } = useSelector((store: RootState) => store.wishSlice);
  const [isVisible,setIsVisible] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <MyModal isVisible={isVisible} setIsVisible={setIsVisible}>
        <div className={styles.wish__modal}> 
          <h2>If you want to add this Item to cart you should be authorized</h2>
          <Link to='/login'><Button>Authorize</Button></Link>
        </div>
      </MyModal>
      <div className={styles.wishlist__items}>
        <h2 className={styles.wishlist__title}>Wishlist</h2>
        <div className={styles.list}>
          {wishItems && (
            <TransitionGroup>
              {wishItems.map((product) => (
                <CSSTransition key={product.id}  timeout={500} classNames="item">
                  <WishListItem isVisible={isVisible} setIsVisible={setIsVisible} product={product} />
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
