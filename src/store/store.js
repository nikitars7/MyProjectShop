import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishSlice";

export default configureStore({
  reducer: {
    wishSlice: wishListReducer,
  },
});
