import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishSlice";
import cartSliceReducer from "./cartSlice";
import productSliceReducer from "./productSlice";
import { useDispatch } from "react-redux";
export const store =  configureStore({
  reducer: {
    wishSlice: wishListReducer,
    cartSlice:cartSliceReducer,
    productSlice:productSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
