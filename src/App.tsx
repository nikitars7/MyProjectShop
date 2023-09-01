import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { router } from "./router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Routes>
      </>
  );
}

export default App;
