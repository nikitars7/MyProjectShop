import img from "../img/logo-black.png";
import HeaderSvgStar from "../iconsvg/HeaderSvgStar";
import HeaderSvgBag from "../iconsvg/HeaderSvgBag";
import styles from "../styles/Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <a href="/">
            <img src={img} alt="Logotype" />
          </a>
          <div className={styles.navbar}>
            <ul>
              <li>
                <a href="/" className={styles.navbar__icon}>
                  <HeaderSvgStar />
                </a>
              </li>
              <li>
                <a href="/" className={styles.navbar__icon}>
                  <HeaderSvgBag />
                  <span className={styles.number}>2</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
