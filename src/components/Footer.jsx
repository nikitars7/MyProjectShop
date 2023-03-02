import styles from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__wrapper}>
          <p className={styles.footer__copyright}>© Shop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
