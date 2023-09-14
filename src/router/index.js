import { lazy, Suspense } from "react";
import Wishlist from "../pages/Wishlist";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyLoader from "../UI/loader/MyLoader";
import ProductPage from "../pages/ProductPage";
const ItemsPage = lazy(() =>
  import(/*webpackChunkName: 'ItemsPage'*/ "../pages/ItemsPage")
);
const Main = lazy(() => import(/*webpackChunkName: 'Main'*/ "../pages/Main"));
export const router = [
  {
    path: "",
    component: (
      <Suspense fallback={<MyLoader />}>
        <Main />
      </Suspense>
    ),
  },
  { path: "/wishlist", component: <Wishlist /> },
  {
    path: "/items",
    component: (
      <Suspense fallback={<MyLoader />}>
        <ItemsPage />
      </Suspense>
    ),
  },
  { path: "product/:id", component: <ProductPage /> },
  { path: "/login", component: <LoginPage /> },
  { path: "/register", component: <RegisterPage /> },
  { path: "/cart", component: <Cart /> },
  { path: "*", component: <NotFound /> },
];
