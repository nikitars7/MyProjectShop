import { Link } from "react-router-dom";
import Register from "../components/Register";
import styles from '../styles/RegisterPage.module.scss'
const RegisterPage:React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Register}>
      <h1 className={styles.Title}>Register</h1>
        <Register />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
      </div>
    </div>
  );
};

export default RegisterPage;
