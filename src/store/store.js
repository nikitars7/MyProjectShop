import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishSlice";
import cartSliceReducer from "./cartSlice";
import productSliceReducer from "./productSlice";
export default configureStore({
  reducer: {
    wishSlice: wishListReducer,
    cartSlice:cartSliceReducer,
    productSlice:productSliceReducer,
  },
});
