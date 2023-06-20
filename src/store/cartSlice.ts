import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getProductsFromLS } from "../utils/localStorage";
import { calcTotaPrice } from "../utils/calcTotalPrice";
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
  const {cartItems,totalPrice} = getProductsFromLS();
const initialState:CartStateInit = {
  cartItems,
  totalPrice,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<CartProduct>) => {
        state.cartItems.push(action.payload);
        state.totalPrice = calcTotaPrice(state.cartItems)
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = calcTotaPrice(state.cartItems)
    },
  },
});
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;