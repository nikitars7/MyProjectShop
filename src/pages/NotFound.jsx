import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div>Page is not found.</div>
      <Link to="/MyProjectShop" className={styles.Link}>
        Back to Shop
      </Link>
    </div>
  );
};

export default NotFound;
