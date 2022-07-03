const MICROCURRENT_IN_CART = "MICROCURRENT_IN_CART";

const ACTION_MICROCURRENT_IN_CART = () => {
  return {
    type: MICROCURRENT_IN_CART,
    payload: {
      name: "Full Face Threading",
      price: 60,
      duration: 45
    }
  };
};

export default ACTION_MICROCURRENT_IN_CART;
