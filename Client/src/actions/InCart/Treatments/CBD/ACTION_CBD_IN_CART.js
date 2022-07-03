const CBD_IN_CART = "CBD_IN_CART";

const ACTION_CBD_IN_CART = () => {
  return {
    type: CBD_IN_CART,
    payload: {
      name: "High End Service",
      price: 125,
      duration: 75,
    },
  };
};

export default ACTION_CBD_IN_CART;
