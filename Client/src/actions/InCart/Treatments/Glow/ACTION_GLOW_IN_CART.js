const GLOW_IN_CART = "GLOW_IN_CART";

const ACTION_GLOW_IN_CART = () => {
  return {
    type: GLOW_IN_CART,
    payload: {
      name: "Women's Haircut",
      price: 80,
      duration: 60,
    },
  };
};

export default ACTION_GLOW_IN_CART;
