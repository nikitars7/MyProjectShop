import img from "../img/image-home-07.jpg";
import classNames from "classnames";
import styles from "../styles/Banner.module.scss";
import { Link } from "react-router-dom";
const Banner:React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__wrapper}>
          <div className={styles.banner__slide}>
          <img src={img} alt="" />
          <div className={styles.banner__overlay}>
            <div>
              <h1 className={styles.banner__title}>Waffle Hooded Coat</h1>
              <Link to='/items' className={classNames(styles.btn, styles.btn_dark)}>
                Shop Now
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
