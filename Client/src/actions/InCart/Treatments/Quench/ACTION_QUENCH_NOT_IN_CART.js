const QUENCH_NOT_IN_CART = "QUENCH_NOT_IN_CART";

const ACTION_QUENCH_NOT_IN_CART = () => {
  return {
    type: QUENCH_NOT_IN_CART,
    payload: {
      name: "Executive Experience"
    }
  };
};

export default ACTION_QUENCH_NOT_IN_CART;
