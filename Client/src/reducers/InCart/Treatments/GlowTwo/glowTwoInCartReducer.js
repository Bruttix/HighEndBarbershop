const GLOWTWO_IN_CART = "GLOWTWO_IN_CART";
const GLOWTWO_NOT_IN_CART = "GLOWTWO_NOT_IN_CART";
const TREATMENTS_CART_RESET = "TREATMENTS_CART_RESET";

const glowTwoInCartReducer = (state = { in_cart: false }, action) => {
  switch (action.type) {
    case GLOWTWO_IN_CART:
      return { ...state, in_cart: true };
    case TREATMENTS_CART_RESET:
    case GLOWTWO_NOT_IN_CART:
      return { ...state, in_cart: false };
    default:
      return { ...state };
  }
};

export default glowTwoInCartReducer;
