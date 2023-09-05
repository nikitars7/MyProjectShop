import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { router } from "./router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {router.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
