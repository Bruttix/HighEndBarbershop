const DERMAPLANE_IN_CART = "DERMAPLANE_IN_CART";

const ACTION_DERMAPLANE_IN_CART = () => {
  return {
    type: DERMAPLANE_IN_CART,
    payload: {
      name: "Dermaplaning",
      price: 75,
      duration: 60,
    },
  };
};

export default ACTION_DERMAPLANE_IN_CART;
