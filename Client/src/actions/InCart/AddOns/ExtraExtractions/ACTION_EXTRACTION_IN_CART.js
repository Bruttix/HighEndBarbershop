const EXTRACTION_IN_CART = "EXTRACTION_IN_CART";

const ACTION_EXTRACTION_IN_CART = () => {
  return {
    type: EXTRACTION_IN_CART,
    payload: {
      name: "Lose the Gray",
      price: 45,
      duration: 45
    }
  };
};

export default ACTION_EXTRACTION_IN_CART;
