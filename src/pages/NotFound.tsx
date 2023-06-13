import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.scss";
const NotFound:React.FC = () => {
  return (
    <div className={styles.NotFound}>
      <div>Page is not found.</div>
      <Link to="/" className={styles.Link}>
        Back to Shop
      </Link>
    </div>
  );
};

export default NotFound;
