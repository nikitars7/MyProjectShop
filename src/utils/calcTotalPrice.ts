import { CartProduct } from "../store/slices/cartSlice";

export const calcTotaPrice = (cartItems: CartProduct[]) => {
 return cartItems.reduce((init, item) => {
    return init + item.price;
  }, 0);
};
