import { Link, useLocation } from "react-router-dom";
import img from "../img/logo-black.png";
import { HeaderSvgBag,HeaderSvgStar } from "../iconsvg";
import styles from "../styles/Header.module.scss";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch,RootState } from "../store/store";
import { useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../store/slices/userAuthSlice";
import Button from "../UI/button/Button";
import { wishItemsSelector } from "../store/selectors/wishItemsSelector";
const Header: React.FC = () => {
  const { cartItems } = useTypedSelector((store: RootState) => store.cartSlice);
  const {wishItems}  = useTypedSelector(wishItemsSelector);
  const { isAuth } = useAuth();
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    if (isMounted.current) {
      let json = JSON.stringify(cartItems);
      localStorage.setItem("Cart", json);
      let wishJson = JSON.stringify(wishItems);
      localStorage.setItem("Wish", wishJson);
    }
    isMounted.current = true;
  }, [cartItems, wishItems]);
  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('user')
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          {isAuth  ? (
            <div className={styles.header__auth}>
              <Button handleClick={handleLogOut}>Log out</Button>
            </div>
          ) : (
            <>
              {pathname === "/login" ? (
                <div className={styles.header__auth}>
                  <Link to="/register">
                    <Button>Sign up</Button>
                  </Link>
                </div>
              ) : (
                <div className={styles.header__auth}>
                  <Link to="/login">
                    <Button>Sign in</Button>
                  </Link>
                </div>
              )}
            </>
          )}
          <div className={styles.header__logo}>
            <Link to="/">
              <img src={img} alt="Logotype" data-testid='header-logo'  />
            </Link>
          </div>
          <div className={styles.navbar}>
            <ul>
              {pathname !== "/wishlist" ? (
                <li>
                  <Link id='wish-list' data-testid='header-wish' to="/wishlist" data-tooltip='WishList' className={styles.navbar__icon}>
                    <HeaderSvgStar />
                  </Link>
                </li>
              ) : (
                ""
              )}

              <li>
                <Link data-testid='header-cart' to="/cart" data-tooltip='Basket' className={styles.navbar__icon}>
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
