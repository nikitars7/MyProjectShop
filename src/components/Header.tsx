import { Link, useLocation } from "react-router-dom";
import img from "../img/logo-black.png";
import HeaderSvgStar from "../iconsvg/HeaderSvgStar";
import HeaderSvgBag from "../iconsvg/HeaderSvgBag";
import styles from "../styles/Header.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useRef } from "react";
const Header:React.FC = () => {
  const { cartItems } = useSelector((store:RootState) => store.cartSlice);
  const { wishItems } = useSelector((store:RootState) => store.wishSlice);
  const isMounted = useRef(false);
  const location = useLocation();
  const { pathname } = location;
  useEffect(()=>{
    if(isMounted.current){
      let json = JSON.stringify(cartItems);
      localStorage.setItem('Cart',json);
      let wishJson = JSON.stringify(wishItems);
      localStorage.setItem('Wish',wishJson)
    }
   isMounted.current = true;
  },[cartItems,wishItems])
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <Link to="/">
            <img src={img} alt="Logotype" />
          </Link>
          <div className={styles.navbar}>
            <ul>
              {pathname !== "/wishlist" ? (
                <li>
                  <Link to="/wishlist" className={styles.navbar__icon}>
                    <HeaderSvgStar />
                  </Link>
                </li>
              ) : (
                ""
              )}

              <li>
                <Link to="/cart" className={styles.navbar__icon}>
                  <HeaderSvgBag />
                  <span className={styles.number}>{cartItems.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
