const BACIAL_IN_CART = "BACIAL_IN_CART";

const ACTION_BACIAL_IN_CART = () => {
  return {
    type: BACIAL_IN_CART,
    payload: {
      name: "Men's Long haircut",
      price: 45,
      duration: 45,
    },
  };
};

export default ACTION_BACIAL_IN_CART;
