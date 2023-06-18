import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type CartProduct = {
  id:number,
  imageUrl:string,
  name:string,
  price:number,
  }
  interface CartStateInit {
    cartItems:CartProduct[],
    totalPrice:number,
  }
const initialState:CartStateInit = {
  cartItems: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<CartProduct>) => {
        state.cartItems.push(action.payload);
        state.totalPrice = state.cartItems.reduce((init, item) => {
        return init + item.price;
      },0);
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
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