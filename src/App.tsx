import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { router } from "./router";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {router.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
