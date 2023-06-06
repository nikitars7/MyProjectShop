import { Link, useLocation } from "react-router-dom";
import img from "../img/logo-black.png";
import HeaderSvgStar from "../iconsvg/HeaderSvgStar";
import HeaderSvgBag from "../iconsvg/HeaderSvgBag";
import styles from "../styles/Header.module.scss";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((store) => store.cartSlice);
  const location = useLocation();
  const { pathname } = location;
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
