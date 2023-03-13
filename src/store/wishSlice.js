import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
};
const wishListSlice = createSlice({
  name: "wishSlice",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const { payload } = action;
      state.wishItems = [...state.wishItems, payload];
    },
    removeFromWishList: (state, action) => {
      const { payload } = action;
      state.wishItems = state.wishItems.filter(
        (product) => product.id !== payload
      );
    },
  },
});
export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
