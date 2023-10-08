import {
  configureStore,
  StateFromReducersMapObject,
  PreloadedState,
} from "@reduxjs/toolkit";
import wishListReducer from "./slices/wishSlice";
import cartSliceReducer from "./slices/cartSlice";
import productSliceReducer from "./slices/productSlice";
import authSliceReducer from "./slices/userAuthSlice";
import filterSliceReducer from "./slices/filterSlice";
import { useDispatch } from "react-redux";
const reducer = {
  wishSlice: wishListReducer,
  cartSlice: cartSliceReducer,
  productSlice: productSliceReducer,
  authSlice: authSliceReducer,
  filterSlice: filterSliceReducer,
};
export type RootState = StateFromReducersMapObject<typeof reducer>;
export function initStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
  });
}
type Store = ReturnType<typeof initStore>;
type AppDispatch = Store["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
