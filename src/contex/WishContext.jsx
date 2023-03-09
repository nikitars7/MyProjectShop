import { createContext, useReducer } from "react";
import { itemReducer, initialState } from "../reducers/WishReducer";

export const ItemContex = createContext(null);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const addToWishList = (product) => {
    dispatch({ type: "ADD_TO_WISH_LIST", payload: product });
  };
  const removeFromWishList = (productId) => {
    dispatch({ type: "REMOVE_FROM_WISH_LIST", payload: productId });
  };
  const value = {
    state,
    addToWishList,
    removeFromWishList,
  };
  return <ItemContex.Provider value={value}>{children}</ItemContex.Provider>;
};
