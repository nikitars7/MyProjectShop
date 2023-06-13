import { Routes, Route } from "react-router-dom";
import { Main } from "./pages";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import Cart from './pages/Cart'
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
         <Route path="" element={<Main />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
