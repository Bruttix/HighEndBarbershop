const DERMAROLLING_IN_CART = "DERMAROLLING_IN_CART";

const ACTION_DERMAROLLING_IN_CART = () => {
  return {
    type: DERMAROLLING_IN_CART,
    payload: {
      name: "Conditioning Treatment",
      price: 40,
      duration: 30
    }
  };
};

export default ACTION_DERMAROLLING_IN_CART;
