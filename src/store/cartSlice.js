import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cartItems.push(action.payload);
        state.totalPrice = state.cartItems.reduce((init, item) => {
        return init + item.price;
      },0);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce((init, item) => {
        return init + item.price;
      },0);
    },
  },
});
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;