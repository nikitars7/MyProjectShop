import styles from "./App.module.scss";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className={styles.wrapper}>
      <AppRouter />
    </div>
  );
}

export default App;
