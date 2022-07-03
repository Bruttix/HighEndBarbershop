const MICRODERMABRASION_IN_CART = "MICRODERMABRASION_IN_CART";

const ACTION_MICRODERMABRASION_IN_CART = () => {
  return {
    type: MICRODERMABRASION_IN_CART,
    payload: {
      name: "Relaxer Treatment",
      price: 140,
      duration: 45
    }
  };
};

export default ACTION_MICRODERMABRASION_IN_CART;
