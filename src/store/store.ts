import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./slices/wishSlice";
import cartSliceReducer from "./slices/cartSlice";
import productSliceReducer from "./slices/productSlice";
import authSliceReducer from './slices/userAuthSlice';
import filterSliceReducer from './slices/filterSlice'
import { useDispatch } from "react-redux";
export const store =  configureStore({
  reducer: {
    wishSlice: wishListReducer,
    cartSlice:cartSliceReducer,
    productSlice:productSliceReducer,
    authSlice:authSliceReducer,
    filterSlice:filterSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
