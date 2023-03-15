import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
