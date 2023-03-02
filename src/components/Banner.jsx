import styles from "../styles/Banner.module.scss";
import img from "../img/image-home-07.jpg";
import classNames from "classnames";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__wrapper}>
          <img src={img} alt="" />
          <div className={styles.banner__overlay}>
            <div>
              <h1 className={styles.banner__title}>Waffle Hooded Coat</h1>
              <a href="/" className={classNames(styles.btn, styles.btn_dark)}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
