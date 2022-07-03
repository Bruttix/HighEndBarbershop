const CALM_IN_CART = "CALM_IN_CART";

const ACTION_CALM_IN_CART = () => {
  return {
    type: CALM_IN_CART,
    payload: {
      name: "Men's Haircut",
      price: 40,
      duration: 30,
    },
  };
};

export default ACTION_CALM_IN_CART;
