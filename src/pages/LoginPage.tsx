import { Link } from "react-router-dom";
import Login from "../components/Login";
import styles from "../styles/LoginPage.module.scss";
const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Login}>
        <h1 className={styles.Title}>Login</h1>
        <Login />
        <p>
          Still without us ? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
