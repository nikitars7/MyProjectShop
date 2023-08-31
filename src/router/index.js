import { Main } from "../pages";
import Wishlist from "../pages/Wishlist";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
export const router = [
  { path: "", component: <Main /> },
  { path: "/wishlist", component: <Wishlist /> },
  { path: "/login", component: <LoginPage/> },
  { path: "/register", component: <RegisterPage /> },
  { path: "/cart", component: <Cart /> },
  { path: "*", component: <NotFound /> },
];
