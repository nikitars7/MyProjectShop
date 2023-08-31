import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "./cartSlice";
import { getWishProducts } from "../../utils/localStorage";
interface WishInit {
  wishItems:CartProduct[],
}
const {wishItems} = getWishProducts();
const initialState:WishInit = {
  wishItems,
};
const wishListSlice = createSlice({
  name: "wishSlice",
  initialState,
  reducers: {
    addToWishList: (state, action:PayloadAction<CartProduct>) => {
      const { payload } = action;
      const copyItem = state.wishItems.find(item => item.id === payload.id);
      if(copyItem){
        alert('You already have this item')
      }else{
        state.wishItems.push(payload);
      }
    },
    removeFromWishList: (state, action:PayloadAction<number>) => {
      const { payload } = action;
      const removedItems = state.wishItems.filter(
        (product) => product.id !== payload
      );
      state.wishItems = removedItems;
    },
  },
});
export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
