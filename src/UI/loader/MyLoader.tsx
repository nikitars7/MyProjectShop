import "./MyLoader.scss";
import styles from "../../App.module.scss";
const MyLoader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div data-testid='loader' className="loader__wrapper">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MyLoader;
