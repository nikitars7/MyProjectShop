import {Routes,Route} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/MyProjectShop" element={<MainPage/>}/>
      <Route path="MyProjectShop/wishlist" element={<Wishlist/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
