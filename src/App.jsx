import MainPage from "./pages/MainPage";
import Wishlist from "./pages/Wishlist";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
    </Routes>
    </div>
  );
}

export default App;
