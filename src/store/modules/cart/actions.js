import { ADD_CART, REMOVE_CART, RESET_CART } from "./actionType";

export const addCart = (newCart) => ({
  type: ADD_CART,
  newCart,
});

export const removeCart = (newCart) => ({
  type: REMOVE_CART,
  newCart,
});

export const resetCart = (newCart) => ({
  type: RESET_CART,
  newCart,
});
