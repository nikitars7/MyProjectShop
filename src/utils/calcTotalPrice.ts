import { CartProduct } from "../store/cartSlice";

export const calcTotaPrice = (cartItems: CartProduct[]) => {
 return cartItems.reduce((init, item) => {
    return init + item.price;
  }, 0);
};
