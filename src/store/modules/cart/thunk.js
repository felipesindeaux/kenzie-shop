import { addCart, removeCart, resetCart } from "./actions";

export const addCartThunk = (itemId) => (dispatch, getState) => {
  const { products, cart } = getState();
  const isOnCart = cart.some((element) => element.id === itemId);

  if (!isOnCart) {
    const item = products.find((element) => element.id === itemId);

    const newItem = {
      ...item,
      amount: 1,
    };
    localStorage.setItem(
      "@KenzieShop:cart",
      JSON.stringify([...cart, newItem])
    );
    dispatch(addCart([...cart, newItem]));
  } else {
    const newCart = [...cart];
    const item = newCart.find((element) => element.id === itemId);
    const itemIndex = newCart.indexOf(item);

    newCart[itemIndex].amount = newCart[itemIndex].amount + 1;
    localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));
    dispatch(addCart(newCart));
  }
};

export const removeCartThunk = (itemId) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const item = newCart.find((element) => element.id === itemId);
  const itemIndex = newCart.indexOf(item);

  if (item) {
    if (item.amount > 1) {
      newCart[itemIndex].amount = newCart[itemIndex].amount - 1;
    } else {
      newCart.splice(itemIndex, 1);
    }
  }

  localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));
  dispatch(removeCart(newCart));
};

export const resetCartThunk = () => (dispatch) => {
  localStorage.setItem("@KenzieShop:cart", JSON.stringify([]));
  dispatch(resetCart([]));
};
