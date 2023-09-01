import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./slices/wishSlice";
import cartSliceReducer from "./slices/cartSlice";
import productSliceReducer from "./slices/productSlice";
import authSliceReducer from './slices/userAuthSlice';
import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
export const store =  configureStore({
  reducer: {
    wishSlice: wishListReducer,
    cartSlice:cartSliceReducer,
    productSlice:productSliceReducer,
    authSlice:authSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
