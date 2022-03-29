import { REMOVE_CART, ADD_CART, RESET_CART } from "./actionType";

const initialState = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return action.newCart;

    case REMOVE_CART:
      return action.newCart;

    case RESET_CART:
      return action.newCart;

    default:
      return state;
  }
};

export default cartReducer;
