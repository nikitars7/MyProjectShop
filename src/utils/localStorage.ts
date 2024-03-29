import { CartProduct } from "../store/slices/cartSlice";
import { AuthInitial } from "../store/slices/userAuthSlice";
import { calcTotaPrice } from "./calcTotalPrice";
export const getProductsFromLS = () => {
let data = localStorage.getItem('Cart');
let products = data? JSON.parse(data) : [];
const totalPrice = calcTotaPrice(products);
return{
   cartItems : products as CartProduct[],
   totalPrice,
}
}
export const getWishProducts = () => {
   let data = localStorage.getItem('Wish');
   let wishItems = data? JSON.parse(data) : [];
   return{
      wishItems : wishItems as CartProduct[],
     
   }
   }
export const getUserFromLS = () => {
   let user = localStorage.getItem('user');
   let userData = user ? JSON.parse(user) : {
      email:null,
      id:null,
      token:null,
   };
   return {
      userData: userData as AuthInitial,
   }
}
